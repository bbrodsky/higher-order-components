import React from 'react';


export default (InnerComponent) => {

  return class ArtistFilter extends React.Component {

    constructor (props) {
      super(props);
      this.state = { filter: '' };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      this.setState({ filter: evt.target.value.toLowerCase() });
    }

    render () {
      const { filter } = this.state;
      const { artists } = this.props;

      return (
        <InnerComponent
          artists={
            filter ?
            artists.filter(artist => artist.name.toLowerCase().match(filter)) :
            artists
          }
          filter={filter}
          handleChange={this.handleChange}
        />
      )
    }
  }
}
