import React from 'react';
import PlaylistForm from './PlaylistForm';
import {connect} from 'react-redux';
import { saveNewPlaylist } from '../../ducks/playlist'

function FormDecorator (PlaylistForm){
  return class NewPlaylistForm extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        input: '',
        valid: true,
        warning: false
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange (evt) {
      this.setState({ input: evt.target.value });
      if (this.state.input.length <= 16)
        this.setState({
          valid:true,
          warning:false});
      else {
        this.setState({valid:false})
      }
    }

    handleSubmit (evt) {
      evt.preventDefault();
      if (this.state.valid){
        if (this.state.input.length === 0){
            this.setState({warning:true});
        } else {
          const formInput = this.state.input;
          this.props.handleSubmit(formInput);
        }
      }
    }

    render () {
      return (
        <PlaylistForm
          valid={this.state.valid}
          warning={this.state.warning}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      )
    }
  }
}

const mapDispatchToProps = function (dispatch) {

  return {
    handleSubmit: function (formInput) {
      const newPlaylist = {
        name: formInput
      }
      const action = saveNewPlaylist(newPlaylist);
      dispatch(action);
    }
  }
}

const statefulReduxComponentCreator = connect(null, mapDispatchToProps);
const StatefulForm = FormDecorator(PlaylistForm);
const FormContainer = statefulReduxComponentCreator(StatefulForm);
export default FormContainer;
