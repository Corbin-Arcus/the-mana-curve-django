import logo from './logo.svg';
import './App.css';
import CardsPage from './components/CardsPage'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <CardsPage />
    </Provider>
  );
}

export default App;
