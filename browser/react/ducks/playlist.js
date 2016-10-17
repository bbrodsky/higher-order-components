const NEW_PLAYLIST = 'NEW_PLAYLIST';
const initialNewPlaylist = {
  name: "",
  songs: []
};

export const createNewPlaylist = function (name) {
  const action = {
    type: NEW_PLAYLIST,
    name: name
  };
  return action;
};

export default function playlistReducer (state = initialNewPlaylist, action) {
  switch (action.type) {
    case NEW_PLAYLIST: return action.name;
    default: return state;
  }
}


export const saveNewPlaylist = function (someData) {
  console.log(someData)
  return function (dispatch) {

    // making a POST with fetch
    fetch('/api/playlists', {
      method: 'POST',
      body: JSON.stringify(someData),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(playlist => dispatch(createNewPlaylist(playlist)));
  }
}
