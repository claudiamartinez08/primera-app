import './App.css';
import Button from './Button/Button';
import FirstSection from './FirstSection/FirstSection';
function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h3>LOGO HOLI</h3>
        </div>
        <div className="nav">
            <p className="howWorks"> How it works</p>
            <Button text="Login" className="buttonPrimary"/>
            <Button text="SignUp" className="buttonSecundary"/>
        </div>  
    </header>
      <FirstSection/>
    </div>
  );
}

export default App;
