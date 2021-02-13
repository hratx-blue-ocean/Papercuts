const exampleClubs = [
  {
    id: 1,
    name: 'test',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:",
    ownerId: 1,
    questionnaire: [
      {
        question_id: 1,
        question:
          'From 1 - 10 how would you scale your experience in our bookclub?',
        answer: 8, //a string
      },
      {
        question_id: 2,
        question:
          'Would you be willing to recommend our bookclub to your friends and family?',
        answer: 'Yes', //string of yes or no
      },
      {
        question_id: 3,
        question:
          'what is your favorite bookclub event that you have attended so far?',
        answer: 'my favorite event so far was the black history related.', // string
      },
      {
        question_id: 4,
        question: 'what was your favorite part of the book?',
        answer: 'my favoirte part ..', //string
      },
      {
        question_id: 5,
        question: 'if you could ask the author anything, what would it be',
        answer: 'I wanna ask the author..', //string
      },
      {
        question_id: 6,
        question:
          "Anything else you'd like us to know about your experience in our bookclub?",
        answer: 'my advice is ...', //string
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
