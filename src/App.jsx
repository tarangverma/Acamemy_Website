import CryptoDict from './components/CryptoDict'
import Details from './components/Details'
import DetailsAirdrops from './components/DetailsAirdrops'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Rewards from './components/Rewards'
import Screen from './components/Screen'

function App() {

  return (
    <div className='h-fit w-full'>
      <Navbar />
      <Screen />
      <Details />
      <DetailsAirdrops />
      <Rewards />
      <Projects />
      <CryptoDict />
      <Footer />
    </div>
  )
}

export default App
