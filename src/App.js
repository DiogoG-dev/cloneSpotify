import './App.css';
import './components/Vars.css';
import './SearchArtists';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
