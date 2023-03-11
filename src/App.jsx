import Header from './layouts/Header/Header'
import Main from './components/main/Main'
import Footer from './layouts/Footer/Footer'
import './assets/global.scss'

function App() {
  return (
    <div className="container">
      <Header />
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
