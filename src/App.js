import React, {useState} from 'react'

import './index.css';

import Form from "./components/Form";
import Log from "./components/Log";
import InfoBar from './components/InfoBar'
import Home from './components/Home'
import Drawer from './components/Drawer'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import shareicon from './assets/shareicon.png'

import {MuiThemeProvider} from '@material-ui/core/styles'
import Themes from './Themes'
import CssBaseline from '@material-ui/core/CssBaseline';

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from "@material-ui/icons/Clear";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from '@material-ui/core/CircularProgress'
import { Helmet } from "react-helmet";

import Data from './Data'
import Lang from './Lang'

export default class extends React.Component{
  state = { ready: false, theme: Data.theme, snackbar: null }
  componentDidMount(){ window.app = this }

  snackbar = (message) => this.setState({ snackbar: message })
  closeSnackbar = () => this.snackbar(null)

  getTitle = () => {
    if (!Data.channel) return "Gossipr";
    return Data.channel + " - Gossipr";
  }

  getTheme = () => Themes[this.state.theme]

  switchTheme = () => {
    const themes = Object.keys(Themes)
    const i = themes.indexOf(this.state.theme)
    const theme = themes[(i+1)%themes.length]
    this.setState({theme})
    localStorage.setItem('theme', theme)
  }

  render(){
    return <MuiThemeProvider theme={this.getTheme()}>
      <Helmet>
        <title children={this.getTitle()}/>
        <meta name="theme-color" content={this.getTheme().palette.background.default} />
      </Helmet>
      <CssBaseline/>
      {(Data.channel && !Data.newfag) ? (this.state.ready) ? (<>
        <InfoBar/>
        <Drawer />
        <Log />
        <Form />
      </>) : (<Typography component='span' style={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress style={{position: 'absolute', top: '40%'}} size={120} color='inherit' />
      </Typography>):(
        <Home theme={this.getTheme()} />
      )}
      <Snackbar
        color="inherit"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={Boolean(this.state.snackbar)}
        autoHideDuration={6000}
        onClose={this.closeSnackbar}
        message={this.state.snackbar}
        action={[
          <IconButton
            key="close"
            color="inherit"
            onClick={this.closeSnackbar}
            children={<CloseIcon />}
          />
        ]}
      />
      <InstallPrompt/>
    </MuiThemeProvider>
  }
}

const isInstalled = (window.matchMedia('(display-mode: standalone)').matches) || (window.navigator.standalone);
const isiOS = ['iPhone', 'iPad', 'iPod'].includes(navigator.platform)

class InstallPrompt extends React.Component {
  state = { active: (isiOS && !isInstalled) }
  render() {
    if (!this.state.active) return null;
    return <AppBar
      color='default'
      position='fixed'
      style={{ top: 'auto', bottom: 0 }}>
      <Toolbar
        style={{ justifyContent: 'space-between' }}>
        <img alt="install-icon" src={shareicon} style={{ width: '24px' }} />
        <Typography variant="h7" children={Lang().install_prompt} />
        <CloseIcon onClick={() => this.setState({ active: false })} />
      </Toolbar>
    </AppBar>
  }
}