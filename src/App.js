import MaterialProvider from './config/theme';
import Header from './common/Header';
import Home from './templates/Home';
import './App.css';
import CreateList from './templates/CreateList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <MaterialProvider>
        <Router>
          <>
            <Header/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/lista/:action" component={CreateList}/>
            </Switch>
          </>
        </Router>
      </MaterialProvider>
    </Provider>
  );
}

export default App;
