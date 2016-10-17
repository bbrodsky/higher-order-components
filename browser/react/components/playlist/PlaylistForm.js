import React from 'react';

export default class PlaylistForm extends React.Component{
  render(){
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.props.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" name="post" type="text" onChange={this.props.handleChange}/>
                {this.props.warning ? <div className="alert alert-warning">Please enter a name</div> : null}
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className={this.props.valid ? "btn btn-success" : "btn btn-success disabled"}>Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
