import './App.css';
import './styles.sass';
import './styles.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import Routes from './navigation/Routes';

function App() {
  return (
    <Provider store={store()}>
      <Routes />
    </Provider>
  );
}

export default App;
