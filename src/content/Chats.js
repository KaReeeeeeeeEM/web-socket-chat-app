const messages = [
  { 
    key: 1,
    text: 'Hey there!', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:45:00Z' 
  },
  { 
    key: 2,
    text: 'Hi! How are you?', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:46:00Z' 
  },
  { 
    key: 3,
    text: 'I’m good, thanks! How about you?', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:47:00Z' 
  },
  { 
    key: 4,
    text: 'I’ve been doing well. Just busy with work and life!', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:48:00Z' 
  },
  { 
    key: 5,
    text: 'Yeah, I get that. Work has been crazy for me too.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:49:00Z' 
  },
  { 
    key: 6,
    text: 'What have you been working on lately?', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:50:00Z' 
  },
  { 
    key: 7,
    text: 'Just a new project that’s due soon. It’s a bit stressful!', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:51:00Z' 
  },
  { 
    key: 8,
    text: 'I can imagine! I’ve been juggling a few deadlines myself.', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:52:00Z' 
  },
  { 
    key: 9,
    text: 'How do you usually cope with stress?', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:53:00Z' 
  },
  { 
    key: 10,
    text: 'I try to take short breaks and go for walks. What about you?', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:54:00Z' 
  },
  { 
    key: 11,
    text: 'Same here! I love going for a run when I can.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:55:00Z' 
  },
  { 
    key: 12,
    text: 'That sounds nice! I should try running sometime.', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:56:00Z' 
  },
  { 
    key: 13,
    text: 'Definitely! It really helps clear the mind.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:57:00Z' 
  },
  { 
    key: 14,
    text: 'Do you have any plans for the weekend?', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T13:58:00Z' 
  },
  { 
    key: 15,
    text: 'I might go hiking if the weather is nice. How about you?', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T13:59:00Z' 
  },
  { 
    key: 16,
    text: 'That sounds great! I was thinking of visiting a museum.', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T14:00:00Z' 
  },
  { 
    key: 17,
    text: 'Museums are fun! Which one do you plan to go to?', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T14:01:00Z' 
  },
  { 
    key: 18,
    text: 'I’m thinking of the art museum downtown. They have a new exhibit!', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T14:02:00Z' 
  },
  { 
    key: 19,
    text: 'That sounds interesting! I love art exhibits.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T14:03:00Z' 
  },
  { 
    key: 20,
    text: 'Maybe we can go together sometime! I’d love that.', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T14:04:00Z' 
  },
  { 
    key: 21,
    text: 'Absolutely! Let’s plan for it.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T14:05:00Z' 
  },
  { 
    key: 22,
    text: 'Cool! I’ll check the exhibit schedule.', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T14:06:00Z' 
  },
  { 
    key: 23,
    text: 'Sounds like a plan! I can’t wait.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T14:07:00Z' 
  },
  { 
    key: 24,
    text: 'Me too! It’ll be fun catching up.', 
    isSender: false, 
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg', 
    timestamp: '2024-09-30T14:08:00Z' 
  },
  { 
    key: 25,
    text: 'For sure! Let’s keep each other updated.', 
    isSender: true, 
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg', 
    timestamp: '2024-09-30T14:09:00Z' 
  },
];


  export default messages;