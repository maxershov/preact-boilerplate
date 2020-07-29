import React from 'preact/compat';

class Classes extends React.Component {

  constructor(props) {
    super(props);
    this.add = this.add.bind(this)
    this.state = {
      count: 0,
    };
  }

  getDerivedStateFromProps(props, state) {
    console.log(props, state);
    console.log('getDerivedStateFromProps');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps');
    this.setState({ defCount: props.defCount })
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }


  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  add() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>Class</h2>
        <p>{this.state.count}</p>
        <button type="button" onClick={this.add}>Class Count</button>
      </div>
    )
  }
}


export default Classes;