const exampleClubs = [
  {
    id: 1,
    name: 'test',
    description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:',
    ownerId: 1,
    questionnaire: [
      {
        question: 'How?',
        type: 'input'
      },
      {
        question: 'Why?',
        type: 'textarea'
      }
    ],
    members: [ 1, 2, 3, 5],
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
    ]
  }
];

export default exampleClubs;