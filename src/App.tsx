import './App.scss';
import {Navbar} from './components/Navbar';
import {LandingPagePicture} from './components/LandingPagePicture'
import {LandingPageShortcutButtons} from "./components/LandingPageShortcutButtons";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
      <>
          <Navbar/>
          <LandingPagePicture/>
          <LandingPageShortcutButtons/>
      </>
  )
}

export default App
