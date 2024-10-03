const chatLayouts = [
    { 
      key: 1,
      name: 'Adolph',
      text: 'Hey there!', 
      isSender: true, 
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', 
      timestamp: '2024-09-30T13:45:00Z' 
    },
    { 
      key: 2,
      name: 'Johansen',
      text: 'Hi! How are you?', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
      timestamp: '2024-09-29T13:46:00Z' 
    },
    { 
      key: 3,
      name: 'Cray',
      text: 'I’m good, thanks! How about you?', 
      isSender: true, 
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', 
      timestamp: '2024-09-29T13:47:00Z' 
    },
    { 
      key: 4,
      name: 'Tony',
      text: 'I’ve been doing well. Just busy with work and life!', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg', 
      timestamp: '2024-09-28T13:48:00Z' 
    },
    { 
      key: 5,
      name: 'White Boy',
      text: 'Yeah, I get that. Work has been crazy for me too.', 
      isSender: true, 
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', 
      timestamp: '2024-09-28T13:49:00Z' 
    },
    { 
      key: 6,
      name: 'Hassan',
      text: 'What have you been working on lately?', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/3.jpg', 
      timestamp: '2024-09-26T13:50:00Z' 
    },
    { 
      key: 7,
      name: 'Oka',
      text: 'Just a new project that’s due soon. It’s a bit stressful!', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/5.jpg', 
      timestamp: '2024-09-26T13:51:00Z' 
    },
    { 
      key: 8,
      name: 'Kidu',
      text: 'I can imagine! I’ve been juggling a few deadlines myself.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/4.jpg', 
      timestamp: '2024-09-26T13:52:00Z' 
    },
    { 
      key: 9,
      name: 'Sammah',
      text: 'How do you usually cope with stress?', 
      isSender: true, 
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', 
      timestamp: '2024-09-25T13:53:00Z' 
    },
    { 
      key: 10,
      name: 'Palmer',
      text: 'I try to take short breaks and go for walks. What about you?', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/5.jpg', 
      timestamp: '2024-09-25T13:54:00Z' 
    },
    { 
      key: 11,
      name: 'Rockey',
      text: 'Same here! I love going for a run when I can.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/7.jpg', 
      timestamp: '2024-09-24T13:55:00Z' 
    },
    { 
      key: 12,
      name: 'Sanga',
      text: 'That sounds nice! I should try running sometime.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/6.jpg', 
      timestamp: '2024-09-24T13:56:00Z' 
    },
    { 
      key: 13,
      name: 'Ian',
      text: 'Definitely! It really helps clear the mind.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/8.jpg', 
      timestamp: '2024-09-22T13:57:00Z' 
    },
    { 
      key: 14,
      name: 'Esnat',
      text: 'Do you have any plans for the weekend?', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/7.jpg', 
      timestamp: '2024-09-21T13:58:00Z' 
    },
    { 
      key: 15,
      name: 'Tynie',
      text: 'I might go hiking if the weather is nice. How about you?', 
      isSender: true, 
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', 
      timestamp: '2024-09-21T13:59:00Z' 
    },
    { 
      key: 16,
      name: 'Wynie',
      text: 'That sounds great! I was thinking of visiting a museum.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/8.jpg', 
      timestamp: '2024-09-19T14:00:00Z' 
    },
    { 
      key: 17,
      name: 'Herieth',
      text: 'Museums are fun! Which one do you plan to go to?', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/10.jpg', 
      timestamp: '2024-09-19T14:01:00Z' 
    },
    { 
      key: 18,
      name: 'Teckie',
      text: 'I’m thinking of the art museum downtown. They have a new exhibit!', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/9.jpg', 
      timestamp: '2024-09-16T14:02:00Z' 
    },
    { 
      key: 19,
      name: 'Noel',
      text: 'That sounds interesting! I love art exhibits.', 
      isSender: true, 
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg', 
      timestamp: '2024-09-16T14:03:00Z' 
    },
    { 
      key: 20,
      name: 'Zubie',
      text: 'Maybe we can go together sometime! I’d love that.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/10.jpg', 
      timestamp: '2024-09-15T14:04:00Z' 
    },
    { 
      key: 21,
      name: 'Mohd',
      text: 'Absolutely! Let’s plan for it.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/12.jpg', 
      timestamp: '2024-09-14T14:05:00Z' 
    },
    { 
      key: 22,
      name: 'Martha',
      text: 'Cool! I’ll check the exhibit schedule.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/11.jpg', 
      timestamp: '2024-09-13T14:06:00Z' 
    },
    { 
      key: 23,
      name: 'Cheed',
      text: 'Sounds like a plan! I can’t wait.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/13.jpg', 
      timestamp: '2024-09-13T14:07:00Z' 
    },
    { 
      key: 24,
      name: 'Noah',
      text: 'Me too! It’ll be fun catching up.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/women/12.jpg', 
      timestamp: '2024-09-12T14:08:00Z' 
    },
    { 
      key: 25,
      name: 'Immaculatha',
      text: 'For sure! Let’s keep each other updated.', 
      isSender: false, 
      profilePic: 'https://randomuser.me/api/portraits/men/14.jpg', 
      timestamp: '2024-09-11T14:09:00Z' 
    },
  ];
  
  
    export default chatLayouts;