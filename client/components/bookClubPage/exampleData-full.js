const exampleClubs = [
  {
    id: 1,
    name: 'Test Bookclub',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 2,
    name: 'Test Bookclub 2',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 3,
    name: 'Test Bookclub 3',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 4,
    name: 'Test Bookclub 4',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 5,
    name: 'Test Bookclub 5',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 6,
    name: 'Test Bookclub 6',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 7,
    name: 'Test Bookclub 7',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 8,
    name: 'Test Bookclub 8',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 9,
    name: 'Test Bookclub 9',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 10,
    name: 'Test Bookclub 10',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 11,
    name: 'Test Bookclub 11',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 12,
    name: 'Test Bookclub 12',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 13,
    name: 'Test Bookclub 13',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 14,
    name: 'test',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
  {
    id: 15,
    name: 'Test Bookclub 14',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    image: '../../assets/images/bookclubs_sample/default_bookclub.jpg',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input',
      },
      {
        question: 'Why?',
        type: 'textarea',
      },
    ],
    members: [1, 2, 3, 5],
    events: [
      {
        id: 1,
        name: 'chapter 1',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:36.473603',
        checkbox: true,
        checked: false,
      },
      {
        id: 2,
        name: 'chapter 2',
        description: 'finish this chapter!',
        dateTime: '2021-02-12T22:06:37.473603',
        checkbox: false,
        checked: false,
      },
    ],
    comments: [
      {
        id: 1,
        text: 'This book is great',
        userId: 1,
        username: 'Daniel',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
      {
        id: 2,
        text: 'This book is terrible',
        userId: 2,
        username: 'Danielle',
        timeSubmitted: '2021-02-12T22:06:37.473603',
      },
    ],
  },
];

export default exampleClubs;
