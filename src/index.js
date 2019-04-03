import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThxRouter from "./components/ThxRouter";
import {ActionCableProvider} from "react-actioncable-provider";
import {API_WS_ROOT} from "./constants";
import { register} from './serviceWorker';

ReactDOM.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <ThxRouter/>
  </ActionCableProvider>,
  document.getElementById('root')
);
register();
