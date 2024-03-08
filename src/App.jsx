import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'

function App() {

  return (
    <div className='App' id='home'>
      <Header></Header>
      <div className='content'>
      <Portfolio></Portfolio>
      </div>
      <div id='footer'>
      <Footer></Footer>
      </div>
    </div>
    
  )
}

export default App
