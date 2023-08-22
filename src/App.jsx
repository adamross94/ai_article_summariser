/* Defines the top-level structure of a React application by composing the Hero and Demo components 
within the App component. It sets up the main layout of the application and applies styling rules from 
the imported CSS file. */

import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App;