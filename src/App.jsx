import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'

function App() {

  return (
    <div className='App'>
      <Header></Header>
      <div className='content'>
      <Portfolio></Portfolio>
      </div>
      <Footer></Footer>
    </div>
    
  )
}

export default App
