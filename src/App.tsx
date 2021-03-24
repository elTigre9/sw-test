import React from 'react';
import logo from './logo.svg';
import './App.css';
import PushNotifications from './components/PushNotifications';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <PushNotifications />
        </section>
      </header>
    </div>
  );
}

export default App;
