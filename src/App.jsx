import Nav from './components/Navigation/Nav'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'

import './App.css'

function App() {
return (
  <div className="app">
    <header className="page-header" id="top">
    <Nav/>
    <Hero/>
    </header>
    
    <div className="container">
    <Skills/>
 
    </div>
    
  </div>
)  

}

export default App
