module.exports = {
  name: 'React Basics',
  intro: `
    This is a basic react-quiz!
  `,
  steps: [
    {
      id: 'step-one',
      text: 'Inside which one of these can you `setState`? ``',
      type: 'mcq',
      points: 20,
      answers: [
        'constructor()', 'componentWillMount()', 'render()', 'componentDidMount()', 'None'
      ],
      correctAnswer: 'None'
    }
    {
      id: 'step-two',
      text: 'This is the text for this question',
      type: 'mcq',
      points: 20,
      answers: [
        'One', 'Two', 'Three', 'Four'
      ],
      correctAnswer: 'One'
    }
  ]
}
