import React from 'react';
import ReactDOM from 'react-dom';

import Jetsetter from './containers/Jetsetter';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Jetsetter />
  </Provider>,
  document.getElementById('root')
);
