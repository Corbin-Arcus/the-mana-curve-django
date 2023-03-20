import logo from './logo.svg';
import './App.css';
import CardsPage from './components/CardsPage'
import CreateCardPage from './components/CreateCardPage';
import CardByIdPage from './components/CardByIdPage';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/cards/new' exact={true} element={<CreateCardPage />}/>
          <Route path='/cards/all' exact={true} element={<CardsPage />}/>
          <Route path='/cards/:id' exact={true} element={<CardByIdPage />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
