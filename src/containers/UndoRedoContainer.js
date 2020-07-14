import React from 'react';
import { connect } from 'react-redux';
import { undoItemAction, redoItemAction } from '../redux/actions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      undo: undoItemAction,
      redo: redoItemAction,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(({ undo, redo }) => {
  return (
    <div style={{ margin: '1em 0' }}>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
    </div>
  );
});
