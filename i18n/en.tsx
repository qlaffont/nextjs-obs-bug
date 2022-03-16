const lng = {
  components: {
    form: {
      save: 'Send',
      add: 'Add',
      delete: 'Delete',
      cancel: 'Cancel',
      confirm: 'Confirm',
      search: 'Search',
    },
    atoms: {
      alert: {
        wip: 'This feature is under development !',
        info: 'Info',
        error: 'Error',
        success: 'Success',
        changesSaved: 'Changes have been saved.',
        errorTryLater: 'An error has occurred. Please try again later !',
        copied: 'The text has been copied !',
        close: 'Close',
        back: 'Back',
        next: 'Next',
      },
      select: {
        noOptions: 'No element',
        loading: 'Loading',
      },
    },
    layout: {
      connectedAs: 'Connected as {{username}}',
    },
    molecules: {
      question: {
        QuestionForm: {
          title: 'Question title',
          category: 'Category',
          answerType: 'Answer type',
          answerA: 'Answer A',
          answerB: 'Answer B',
          answerC: 'Answer C',
          answerD: 'Answer D',
          answer: 'Answer to the question',
          setAsAnswer: 'Define as an answer',
          questionVideo: 'YouTube video link',
          questionVideoHelper: 'Must start with https://www.youtube.com/embed/IDENTIFIANT-DE-LA-VIDEO',
          submitToPublic: 'Share my question to all players',
          submittedAt: 'Submitted for verification on {{date}}',
          isPublic: "This question can't be edited because this question is public.",
        },
        question: {
          par: 'By',
        },
      },
      playlist: {
        PlaylistForm: {
          title: 'Playlist title',
          share: 'Share playlist',
          inviteText: 'Play my quiz !',
          link: 'Link',
          tabs: {
            questions: {
              title: 'Questions',
            },
            editors: {
              title: 'Editors',
              add: 'Add',
              username: 'Username',
              usernameHelper: 'Username can be modified in settings.',
              usernameNotFound: "This username can't be found",
              delete: {
                title: 'Deleting an editor',
                description: 'Are you sure you want to delete ?',
              },
            },
          },
        },
        playlist: {
          play: 'Play this playlist',
          connectToPlay: 'Connect to play',
        },
      },
      tutorial: {
        action: 'See tutorial',
        settings: {
          username: 'You can if you want, change your nickname.',
        },
        questions: {
          add: 'To create a personalized playlist, you must create questions.',
          edit: 'You can choose between choice answers or input answer. Picture and video will be displayed during the game.',
        },
        playlists: {
          add: 'You can create a game from a playlist. This allows you to play a game only with your questions !',
          share:
            'You can click here to share your playlist with other players. You can in Questions tab, select the questions that will be added to your playlist. Editors can add or delete questions to your playlist.',
        },
        party: {
          playlist:
            'As said before, you can select a playlist to play only with your questions. If you do not select Playlist, you will play with questions selected by MWIZZ team ! Categories field allows you to filter the questions with the selected categories. Simply select the number of questions and the game can start !',
        },
        home: {
          stream:
            "You can embed a MWIZ quizz to OBS or StreamLabs. You just have to get to a game and open a 'browser source' and add at the end of the link '?spectator=true'. Example: https//games.qlaffont.com/party/TUYSD?spectator=true",
          play: 'Enjoy the game !',
        },
      },
    },
  },
  pages: {
    home: {
      title: "Let's play a quiz!",
      description: 'You can create a new game by connecting via Discord !',
      partyCode: 'Party code',
      error: 'Party not found !',
      play: 'Play !',
    },
    profile: {
      playlists: 'Playlists',
    },
    questions: {
      list: {
        title: 'Questions',
        add: 'Add',
      },
      add: {
        title: 'Add a question',
        success: 'Question added successfully',
      },
      edit: {
        title: 'Edit a question',
        success: 'Question modified successfully',
      },
      submit: {
        success: 'Question sent for verification',
      },
      delete: {
        title: 'Delete a question',
        description: 'Are you sure you want to delete ?',
        success: 'Question deleted successfully',
      },
    },
    playlists: {
      list: {
        title: 'Playlists',
        add: 'Add',
      },
      add: {
        title: 'Add a playlist',
        success: 'Playlist added successfully',
        addQuestion: 'Add a question',
        pleaseType: 'Please enter the name of a question',
      },
      edit: {
        title: 'Edit a playlist',
        success: 'Playlist modified successfully',
      },
      delete: {
        title: 'Delete a playlist',
        description: 'Are you sure you want to delete ?',
        success: 'Playlist deleted successfully',
      },
    },
    party: {
      create: {
        title: 'Create a party',
        nbQuestions: 'Number of questions',
        categories: 'Categories',
        playlist: 'Playlist',
        action: 'Create',
      },
      join: {
        title: 'Join the game ? ',
        action: 'Join',
        seo: 'Join a game',
        joinAsSpec: 'Join as a spectator',
        username: 'Username',
        usernameAlreadyTaken: 'Please choose another username',
      },
      waitingStart: {
        title: 'Waiting for the beginning of the game',
        ownerTitle: 'Pending participants',
        participants: 'Participants',
        action: 'Start the game',
        invite: 'Invite players',
        inviteText: 'Come play with me at a quiz !',
        link: 'Link',
      },
      question: {
        picture: 'You can click on picture to enlarge it',
      },
      score: {
        title: 'Scores',
        first: '1st',
        second: '2nd',
        third: '3rd',
        points: 'pts',
        yourScore: 'You have {{score}} points !',
      },
    },
    error: {
      '404': {
        title: 'This page does not exist !',
      },
      '500': {
        title: 'Error ! Please contact support.',
      },
    },
    settings: {
      title: 'Settings',
      user: {
        username: 'Username',
        lang: 'Language',
      },
      alerts: {
        username: {
          error: 'This username is already used !',
          success: 'Your username is changed !',
        },
        language: {
          success: 'Your language has been changed !',
        },
      },
    },
    auth: {
      login: {
        title: 'Login',
        alerts: {
          loginSuccess: 'You are connected !',
        },
      },
      logout: {
        title: 'Logout',
        alerts: {
          logoutSuccess: 'You are connected no more !',
        },
      },
    },
  },
  enums: {
    QuestionCategory: {
      ARTS_AND_LITTERATURE: 'Arts and literature',
      GEOGRAPHY: 'Geography',
      HISTORY: 'History',
      MOVIE_AND_SERIES: 'Movies and series',
      SCIENCE_AND_NATURE: 'Science and Nature',
      SPORTS_AND_HOBBIES: 'Sports and hobbies',
      VIDEO_GAMES: 'Video games',
      OTHER: 'Autre',
    },
    AnswerType: {
      CHOICE: 'Choice',
      MATCH: 'Exact match',
    },
    Language: {
      FR: 'French',
      EN: 'English',
    },
  },
  yup: {
    mixed: {
      default: 'This field is not valid.',
      required: 'This field is required.',
      oneOf: 'This field need to be one of {{values}}.',
      notOneOf: 'This field need to not be one of {{values}}.',
      defined: 'This field need to be defined.',
    },
    string: {
      default: 'This field is not valid.',
      required: 'This field is required.',
      length: 'This field need to have a length of {{length}}.',
      min: 'This field need to have a minimum length of {{min}}.',
      max: 'This field need to have a maximum length of {{max}}.',
      matches: 'This field need to respect regex ({{regex}}).',
      email: 'This field need to be a valid email address.',
      url: 'This field need to be a valid URL. (Starting with http:// or https://).',
      uuid: 'This field need to be a valid UUID.',
      trim: 'This field need to be trimmed (no space before or after content).',
      lowercase: 'This field need to be in lowercase.',
      uppercase: 'This field need to be in uppercase.',
    },
    number: {
      min: 'This field need to have a minimum value of {{min}}.',
      max: 'This field need to have a maximum value of {{max}}.',
      lessThan: 'This field need to be less or equal to {{less}}.',
      moreThan: 'This field need to be greater or equal to {{more}}.',
      positive: 'This field need to be a positive number.',
      negative: 'This field need to be a negative number.',
      integer: 'This field need to be an integer.',
    },
    date: {
      min: 'This field need to contain a date before {{min}}.',
      max: 'This field need to contain a date after {{max}}.',
      dateAfterPreviousValue: 'This field need to contain a date before the previous value.',
    },
    boolean: {
      isValue: 'This field need to have the value of {{value}}.',
    },
    object: {
      noUnkown: 'This field contain some unkown keys.',
    },
    array: {
      min: 'This field need to contain at least {{min}} item(s).',
      max: 'This field need to contain at most {{max}} item(s).',
      length: 'This field need to contain {{length}} item(s).',
    },
  },
};

export default lng;
