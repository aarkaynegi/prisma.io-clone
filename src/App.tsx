import { Header } from './components/header/Header'
import { Hero } from 'components/sections/hero/Hero'
import { FirstSection } from 'components/sections/firstSection/FirstSection'
import { SecondSection } from 'components/sections/secondSection/SecondSection'
import { ThirdSection } from 'components/sections/thirdSection/ThirdSection'
import { FourthSection } from 'components/sections/fourthSection/FourthSection'
import { FifthSection } from 'components/sections/fifthSection/FifthSection'
import { Footer } from 'components/sections/footer/Footer'
import { SixthSection } from 'components/sections/sixthSection/SixthSection'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  )
}

export default App
