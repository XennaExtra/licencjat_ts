import './App.scss';
import {Navbar} from './components/Navbar';
import {LandingPagePicture} from './components/LandingPagePicture'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
      <>
          <Navbar/>
          <LandingPagePicture/>
      </>
  )
}

export default App
