import CardsSection from './components/CardsSection'
import CarouselFour from './components/CarouselFour'
import CarouselOne from './components/CarouselOne'
import CarouselThree from './components/CarouselThree'
import CarouselTwo from './components/CarouselTwo'
import HeroContainer from './components/HeroContainer'
import Navbar from './components/Navbar'
import Process from './components/Process'
import Services from './components/Services'
import Showcase from './components/Showcase'

function App() {

  return (
    <div>
      <Navbar />      
      <HeroContainer />
      <CarouselOne />
      <CarouselTwo />
      <CardsSection />
      <CarouselThree />
      <CarouselFour />
      <Services />
      <Process />
      <Showcase />
    </div>
  )
}

export default App
