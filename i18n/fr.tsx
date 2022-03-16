const lng = {
  components: {
    form: {
      save: 'Envoyer',
      add: 'Ajouter',
      delete: 'Supprimer',
      cancel: 'Annuler',
      confirm: 'Confimer',
      search: 'Rechercher',
    },
    atoms: {
      alert: {
        wip: 'Cette fonctionalité est en cours de développement !',
        info: 'Info',
        error: 'Erreur',
        success: 'Succès',
        changesSaved: 'Les modifications ont été sauvegardées.',
        errorTryLater: 'Une erreur est survenue. Veuillez réessayer plus tard !',
        copied: 'Le texte a été copié !',
        close: 'Fermer',
        back: 'Retour',
        next: 'Suivant',
      },
      select: {
        noOptions: 'Aucun élement',
        loading: 'Chargement',
      },
    },
    layout: {
      connectedAs: 'Connecté en tant que {{username}}',
    },
    molecules: {
      question: {
        QuestionForm: {
          title: 'Titre de la question',
          category: 'Catégorie',
          answerType: 'Type de réponse',
          answerA: 'Réponse A',
          answerB: 'Réponse B',
          answerC: 'Réponse C',
          answerD: 'Réponse D',
          answer: 'Réponse à la question',
          setAsAnswer: 'Définir en tant que réponse',
          questionVideo: 'Lien de la vidéo Youtube',
          questionVideoHelper: 'Doit commencer par https://www.youtube.com/embed/IDENTIFIANT-DE-LA-VIDEO',
          submitToPublic: 'Proposer ma question à tous les joueurs',
          submittedAt: 'Soumis pour vérification le {{date}}',
          isPublic: "Cette question n'est pas modifiable car cette question est publique.",
        },
        question: {
          par: 'Par',
        },
      },
      playlist: {
        PlaylistForm: {
          title: 'Titre de la playlist',
          share: 'Partager la playlist',
          inviteText: 'Joue à mon quizz !',
          link: 'Lien',
          tabs: {
            questions: {
              title: 'Questions',
            },
            editors: {
              title: 'Editeurs',
              add: 'Ajouter',
              username: 'Pseudo',
              usernameHelper: 'Le pseudo peut être modifiée dans les paramètres.',
              usernameNotFound: 'Ce pseudo est introuvable',
              delete: {
                title: "Suppression d'un éditeur",
                description: 'Êtes vous sur de vouloir supprimer ?',
              },
            },
          },
        },
        playlist: {
          play: 'Jouer à cette playlist',
          connectToPlay: 'Se connecter pour jouer',
        },
      },
      tutorial: {
        action: 'Voir le tutoriel',
        settings: {
          username: 'Votre pouvez si vous le souhaitez changer votre pseudo.',
        },
        questions: {
          add: 'Pour créer une partie personnalisée, vous devez avoir créer au préalable des questions.',
          edit: 'Vous pouvez choisir entre des réponses par choix ou des réponses par saisie. Les photos et vidéos seront affichées lors de la partie.',
        },
        playlists: {
          add: 'Vous pouvez créer une partie via une playlist. Ceci permet de jouer une partie uniquement avec vos questions !',
          share:
            "Vous pouvez cliquer ici afin de partager votre playlist à d'autres joueurs. Vous pouvez dans l'onglet Questions, sélectionner les questions qui seront rajoutées à votre playlist. Les éditeurs peuvent ajouter ou supprimer des questions à votre playlist.",
        },
        party: {
          playlist:
            "Comme dit précédemment, vous pouvez selectionner une playlist afin de jouer uniquement avec vos questions. Si vous ne sélectionnez pas de playlist, vous allez jouer avec les questions sélectionnées par l'équipe Mwizz ! Le champ catégories vous permet de filtrer les questions par les catégories choisies. Il vous suffit ensuite de sélectionner le nombre de questions et la partie peut commencer !",
        },
        home: {
          stream:
            "Vous pouvez intégrer une partie Mwizz sur OBS ou Streamlabs pour cela il vous suffit de rejoindre une partie et d'ouvrir une 'Browser Source' et d'ajouter à la fin de l'URL de la pratie Mwizz '?spectator=true'. Exemple: https//games.qlaffont.com/party/TUYSD?spectator=true",
          play: 'Bonne partie !',
        },
      },
    },
  },
  pages: {
    home: {
      title: 'Jouons à un quizz !',
      description: 'Tu peux créer une nouvelle partie en te connectant via Discord !',
      partyCode: 'Code de partie',
      error: 'Partie non trouvée !',
      play: 'Jouer !',
    },
    profile: {
      playlists: 'Playlists',
    },
    questions: {
      list: {
        title: 'Questions',
        add: 'Ajouter',
      },
      add: {
        title: "Ajout d'une question",
        success: 'Question ajoutée avec succès',
      },
      edit: {
        title: 'Modification de la question',
        success: 'Question modifiée avec succès',
      },
      submit: {
        success: 'Question envoyée pour vérification avec succès',
      },
      delete: {
        title: 'Suppression de la question',
        description: 'Êtes vous sur de vouloir supprimer ?',
        success: 'Question supprimée avec succès',
      },
    },
    playlists: {
      list: {
        title: 'Playlists',
        add: 'Ajouter',
      },
      add: {
        title: "Ajout d'une playlist",
        success: 'Playlist ajoutée avec succès',
        addQuestion: 'Ajouter une question',
        pleaseType: "Veuillez saisir le nom d'une question",
      },
      edit: {
        title: 'Modification de la playlist',
        success: 'Playlist modifiée avec succès',
      },
      delete: {
        title: 'Suppression de la playlist',
        description: 'Êtes vous sur de vouloir supprimer ?',
        success: 'Playlist supprimée avec succès',
      },
    },
    party: {
      create: {
        title: "Création d'une partie",
        nbQuestions: 'Nombre de questions',
        categories: 'Catégories',
        playlist: 'Playlist',
        action: 'Créer une partie',
      },
      join: {
        title: 'Rejoindre la partie ? ',
        action: 'Rejoindre',
        seo: 'Rejoindre une partie',
        joinAsSpec: 'Rejoindre en tant que spectateur',
        username: 'Pseudo',
        usernameAlreadyTaken: 'Veuillez choisir un autre pseudo',
      },
      waitingStart: {
        title: 'En attente du début de la partie',
        ownerTitle: 'En attente des participants',
        participants: 'Participants',
        action: 'Démarrer la partie',
        invite: 'Inviter des joueurs',
        inviteText: 'Viens jouer avec moi à un quizz !',
        link: 'Lien',
      },
      question: {
        picture: "Vous pouvez cliquer sur l'image pour l'agrandir",
      },
      score: {
        title: 'Scores',
        first: '1er',
        second: '2ème',
        third: '3ème',
        points: 'pts',
        yourScore: 'Vous avez {{score}} points !',
      },
    },
    error: {
      '404': {
        title: "Cette page n'existe pas !",
      },
      '500': {
        title: 'Erreur ! Veuillez contacter le support.',
      },
    },
    settings: {
      title: 'Paramètres',
      user: {
        username: 'Pseudo',
        lang: 'Langue',
      },
      alerts: {
        username: {
          error: 'Ce pseudo est déjà utilisé !',
          success: 'Votre pseudo est modifié !',
        },
        language: {
          success: 'Votre langue a été modifié !',
        },
      },
    },
    auth: {
      login: {
        title: 'Se Connecter',
        alerts: {
          loginSuccess: 'Vous êtes connecté !',
        },
      },
      logout: {
        title: 'Déconnexion',
        alerts: {
          logoutSuccess: 'Vous êtes déconnecté !',
        },
      },
    },
  },
  enums: {
    QuestionCategory: {
      ARTS_AND_LITTERATURE: 'Arts et Littérature',
      GEOGRAPHY: 'Géographie',
      HISTORY: 'Histoire',
      MOVIE_AND_SERIES: 'Films et Séries',
      SCIENCE_AND_NATURE: 'Sciences et Nature',
      SPORTS_AND_HOBBIES: 'Sports et Loisirs',
      VIDEO_GAMES: 'Jeux Vidéos',
      OTHER: 'Autre',
    },
    AnswerType: {
      CHOICE: 'Choix',
      MATCH: 'Saisie exact',
    },
    Language: {
      FR: 'Français',
      EN: 'Anglais',
    },
  },
  yup: {
    typeError: 'Ce champ est invalid.',
    mixed: {
      default: 'Ce champ est invalid.',
      required: 'Ce champ doit être remplis.',
      oneOf: 'Ce champ doit contenir une de ces valeurs {{values}}.',
      notOneOf: 'Ce champ ne doit pas contenir une de ces valeurs {{values}}.',
      defined: 'Ce champ doit être défini.',
    },
    string: {
      default: 'Ce champ est invalid.',
      required: 'Ce champ doit être remplis.',
      length: 'Ce champ doit faire {{length}} caractères.',
      min: 'Ce champ doit faire au minimum {{min}} caractères.',
      max: 'Ce champ doit faire au maximum {{max}} caractères.',
      matches: 'Ce champ doit respecter la regex ({{regex}}).',
      email: 'Ce champ doit être un email valid.',
      url: 'Ce champ doit contenir une url valide. (Commençant par http:// ou https://).',
      uuid: 'Ce champ doit être un UUID valid.',
      trim: "Ce champ doit être trimmé (pas d'espace avant ou après).",
      lowercase: 'Ce champ doit être en minuscule.',
      uppercase: 'Ce champ doit être en majuscule.',
    },
    number: {
      min: 'Ce champ doit être plus grand ou égal à {{min}}.',
      max: 'Ce champ doit être plus petit ou égal à {{max}}.',
      lessThan: 'Ce champ doit être plus petit que {{less}}.',
      moreThan: 'Ce champ doit être plus petit que {{more}}.',
      positive: 'Ce champ doit être un nombre positif.',
      negative: 'Ce champ doit être un nombre négatif.',
      integer: 'Ce champ doit être un nombre entier.',
    },
    date: {
      min: 'Ce champ doit contenir une date après le {{min}}.',
      max: 'Ce champ doit contenir une date avant le {{max}}.',
      dateAfterPreviousValue: 'Ce champ doit contenir une date qui se passe après la date précédente.',
    },
    boolean: {
      isValue: 'Ce champ doit avoir la valeur {{value}}.',
    },
    object: {
      noUnkown: 'Ce champ contient des clés inconnus.',
    },
    array: {
      min: 'Ce champ doit contenir au minimum {{min}} élément(s).',
      max: 'Ce champ doit contenir au maximum {{max}} élément(s).',
      length: 'Ce champ doit contenir {{length}} élément(s).',
    },
  },
};

export default lng;
