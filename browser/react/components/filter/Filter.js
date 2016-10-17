import React from 'react';
import { connect } from 'react-redux';

class Filter extends React.Component {

  render () {
    return (
      <form className="form-group">
        <input className="form-control" type="text" placeholder="Filter Artists" onChange={this.props.handleChange} />
      </form>
    )
  }
}


function FormDecorator (InnerComponent) {

  return class StatefulForm extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        input: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      this.setState({ input: evt.target.value.toLowerCase() });
    }

    render () {
      return (
        <InnerComponent
          inputValue={this.state.input}
          handleChange={this.handleChange} />
      )
    }
  }
}

export default FormDecorator(Filter);
