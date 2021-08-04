import MaterialProvider from './config/theme';
import Header from './common/Header';
import Home from './templates/Home';
import './App.css';


function App() {
  return (
    <MaterialProvider>
      <Header />
      <Home />
    </MaterialProvider>
  );
}

export default App;
