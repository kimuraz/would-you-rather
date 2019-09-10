import {applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

export default compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
