import Data from './Data'

const Langs = {
  fr: {
    install_prompt: "Ajoutez Gossipr à l'écran d'accueil",
    type_message: "Tapez un message",
    join_channel: "Rejoindre le canal",
    join_channel_hint: "Vous pouvez aussi en créer un nouveau",
    close: 'Fermer',
    copy: 'Copier',
    send: 'Envoyer',
    home_page: {
      title: "Oubliez les groupes de chats et les forums",
      text: "Parlez avec vos amis ou avec des inconnus, sans intermédiaire, sans installation, et sans inscription",
      first: {
        title: 'Simple.',
        text1: "Parfois, vous avez besoin d'envoyer un texte, une photo, ou un fichier à une personne à côté de vous, sans vous prendre la tête.",
        text2: "Gossipr est la manière la plus simple de parler rapidement, vous avez juste à rejoindre le même canal et vous pouvez commencer à parler.",
      },
      second: {
        title: 'Communautés.',
        text: "Quand vous organisez un événement, vous pouvez interagir avec votre communauté en envoyant des messages, des photos, des fichiers... sans que les gens aie toute une démarche d'inscription, d'installation, ou de demande d'accès à réaliser.",
      },
      third: {
        title: 'Accessible.',
        text1: "Gossipr vous permet de parler avec n'importe qui, seulement avec une adresse web.",
        text2: "Par exemple, vous pouvez imprimer un QR code vers l'adresse d'un canal et le coller sur un mur, toutes les personnes qui le scanneront pourrons parler avec vous, sans installation !",
      },
    },
    pin_dialog: {
      title: "Devenez un fournisseur",
      text1: "L'application est stockée sur un réseau de pair-à-pair nommé IPFS.",
      text2: "Stockez l'application sur votre ordinateur, et permettez aux personnes proche de chez vous d'y accéder plus rapidement.",
      install: "Vous avez besoin d'installer un noeud IPFS sur votre ordinateur:",
      ipfs_node: "Noeud IPFS",
      browser_addon: "Extension pour navigateur",
      pin: 'Épingler',
      pinned: "L'application a été épinglée avec succès",
    },
    welcome_message: {
      title: (channel) => "Bienvenue sur le canal "+channel,
      text1: "Commencez par envoyer un message 😉",
      text2: "(ou bien restez muet 🙊)",
    },
    message_menu: {
      quote: "Citer",
      pin: (value) => value ? "Désépingler":"Épingler",
      block: "Bloquer",
      blocked: "Cet utilisateur a été bloqué",
    },
    settings_menu: {
      go_home: "Revenir à la page d'accueil",
      check_my_name: "Valider mon pseudo",
      switch_theme: "Changer de thème",
      pinned_at_top: "Épinglés en haut",
      pinned_at_top_toggled: (value) => `Les messages épinglés s'affichent désormais ${value?'en haut':'normalement'}`,
      multiline: (value) => (value ? "Désactiver" : "Activer") + " les sauts de ligne",
      multiline_toggled: (value) => "Sauts de ligne "+(value?'activés':'désactivés'),
      unblock_all: "Débloquer tout le monde",
      unblocked_all: "Tout le monde a été débloqué",
    },
    channel_menu: {
      share: "Partager ce canal",
      silent: (value) => (value ? "Activer" : "Désactiver") + " les notifications",
      silent_toggled: (value) => `Ce canal ${value?'est désormais':"n'est plus"} en sourdine`,
      clear_all: "Tout effacer",
      cleared_all: "Tous les messages ont été effacés",
      quit: "Quitter ce canal",
      quit_switch_before: "Allez dans un autre canal avant de quitter celui-ci",
    },
    channel_share_dialog: {
      title: (channel) => "Amenez du monde sur le canal "+channel,
      copy_message: (channel) => 'Viens discuter avec moi sur '+channel,
      copied: "L'adresse a été copiée",
    },
    check_my_name: {
      title: "Faites un don, obtenez un nom",
      text: (price, fiat) => `Faites un don à Gossipr et obtenez un pseudo unique, pour seulement ${price} (${fiat})`,
      my_name: "Mon pseudo",
      err_spaces: "Votre nom ne doit pas être entouré d'espaces",
      err_used: "Ce nom est déjà utilisé",
      check: "Valider mon pseudo",
      checked: "Transaction validée avec succès",
    }
  },
  en: {
    install_prompt: "Add Gossipr to the home screen",
    type_message: "Type a message",
    join_channel: "Join the channel",
    join_channel_hint: "You can also create a new one",
    close: 'Close',
    copy: 'Copy',
    send: 'Send',
    home_page: {
      title: "Forget about group chats and forums.",
      text: "Chat with your friends or with strangers, without middleman or third party, without installation, and without registration",
      first: {
        title: 'Simple.',
        text1: "Sometimes you need to send a text, photo, or file to a person next to you, without any hassle.",
        text2: "Gossipr is the easiest way to talk quickly, you just have to join the same channel and you can start talking.",
      },
      second: {
        title: 'Communities.',
        text: "When you organize an event, you can interact with your community by sending messages, photos, files... without people having to go through a whole registration, installation, or access request process.",
      },
      third: {
        title: 'Linkable.',
        text1: 'Gossipr allows you to talk with anyone, only with a web address.',
        text2: 'For example, you can print a QR code to a channel address and stick it on a wall, anyone who scans it can talk to you, without installation!',
      },
    },
    pin_dialog: {
      title: "Become a provider",
      text1: "The app is hosted on a peer-to-peer network named IPFS.",
      text2: "Host the app on your computer, and allow people near you to load the app more quickly.",
      install: "You need to install an IPFS node on your computer:",
      ipfs_node: "IPFS Node",
      browser_addon: "Browser addon",
      pin: "Pin it",
      pinned: "Successfully pinned the app",
    },
    welcome_message: {
      title: (channel) => `Welcome to the ${channel} channel`,
      text1: "Start by sending a message 😉",
      text2: "(or stay silent 🙊)",
    },
    message_menu: {
      quote: "Quote",
      pin: (value) => value ? "Unpin":"Pin",
      block: "Block",
      blocked: "This user has been blocked",
    },
    settings_menu: {
      go_home: "Return to the home page",
      check_my_name: "Validate my nickname",
      switch_theme: "Switch theme",
      pinned_at_top: "Pinned at top",
      pinned_at_top_toggled: (value) => `Pinned messages are now displayed ${value?'at top':'normally'}`,
      multiline: (value) => (value ? "Disable" : "Enable") + " multiline",
      multiline_toggled: (value) => "Multiline "+(value?'enabled':'disabled'),
      unblock_all: "Unblock everyone",
      unblocked_all: "Everyone has been unblocked",
    },
    channel_menu: {
      share: "Share this channel",
      silent: (value) => (value ? "Enable" : "Disable") + " notifications",
      silent_toggled: (value) => `This channel ${value?'is now':'is no longer'} silent`,
      clear_all: "Clear all",
      cleared_all: "All messages have been deleted",
      quit: "Quit this channel",
      quit_switch_before: "Go to another channel before leaving this one",
    },
    channel_share_dialog: {
      title: (channel) => `Bring people to the ${channel} channel`,
      copy_message: (channel) => 'Come chat with me on ' + channel,
      copied: "The address has been copied",
    },
    check_my_name: {
      title: "Make a donation, get a name",
      text: (price, fiat) => `Make a donation to Gossipr and get an unique nickname, for only ${price} (${fiat})`,
      my_name: "My nickname",
      err_spaces: "Your nickname must not be surrounded by spaces",
      err_used: "This nickname is already used",
      check: "Validate my nickname",
      checked: "Successfully validated transaction",
    }
  }
}

export default () => Langs[Data.lang] || Langs['en']