module.exports = {
  name: 'React Basics',
  intro: `
    This is a basic react-quiz!`,
  steps: [
    {
      id: 'step-one',
      text: 'Which one is the correct way to set state?',
      type: 'mcq',
      points: 20,
      answers: [
        "this.state.comment = 'Hello';", "this.setState({comment: 'Hello'});", 'Both are fine', 'None'
      ],
      correctAnswer: "this.setState({comment: 'Hello'});"
    },
    {
      id: 'step-two',
      text: 'Inside which one of these can you `setState`?',
      type: 'mcq',
      points: 20,
      answers: [
        'constructor()', 'componentWillMount()', 'render()', 'componentDidMount()', 'None 🚫'
      ],
      correctAnswer: 'None 🚫'
    },
    {
      id: 'step-three',
      text: "Let's say you have a counter in your state, and you want to increment its value by the `increment` value in your props, which is the correct way of doing it?",
      type: 'mcq',
      points: 20,
      answers: [
        'this.setState({ counter: this.state.counter + this.props.increment });',
        'this.setState((prevState, props) =>({ counter: prevState.counter + props.increment }));',
        'Both are fine 👍',
        'None 🚫'
      ],
      correctAnswer: 'this.setState((prevState, props) =>({ counter: prevState.counter + props.increment }));'
    },
    {
      id: 'step-four',
      text: `What does the code below do?

      this.setState({ numAvacados: 3})
      this.setState({ numAvacados: this.state.numAvacados + 1})
      console.log(this.state.numAvacados)
      `,
      type: 'mcq',
      points: 20,
      answers: [
        '3',
        '4',
        "No one knows 🙃",
        'error'
      ],
      correctAnswer: "No one knows 🙃",
    },
    {
      id: 'step-five',
      text: `What does the code below do?

      await this.setState({ numAvacados: 3})
      await this.setState({ numAvacados: this.state.numAvacados + 1})
      console.log(this.state.numAvacados)
      `,
      type: 'mcq',
      points: 20,
      answers: [
        '3',
        '4',
        'No one knows',
        'error'
      ],
      correctAnswer: '4'
    }
  ]
}
