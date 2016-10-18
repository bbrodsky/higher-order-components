'use strict';

import { connect } from 'react-redux';
import Artists from './Artists';
import Filter from './Filter';

const mapStateToProps = function (state) {
  return {
    artists: state.artists
  };
};

export default connect(
  mapStateToProps
)(Filter(Artists));
