import { connect } from 'react-redux';
import Message from './message';
import { createMessage } from '../../actions/message_actions';
import {withRouter} from 'react-router';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  createMessage: (message) =>
  dispatch(createMessage(message)),

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Message));
