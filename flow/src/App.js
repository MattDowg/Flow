import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import TypeField from './TypeField.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TypeField/>
      <Footer/>
    </div>
  );
}

export default App;