import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// Fonts
import '@fontsource/quicksand';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
import '@fontsource/lato';
import ErrorBoundary from './modules/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
