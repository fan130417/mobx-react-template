import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { AppContainer } from 'react-hot-loader';
import Router from './router';

import 'styles/index.less';

ReactDOM.render(
  <Provider>
    <AppContainer>
      <Router />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);
