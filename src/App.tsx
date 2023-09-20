import { FifthSection } from 'components/sections/fifthSection/FifthSection'
import { FirstSection } from 'components/sections/firstSection/FirstSection'
import { Footer } from 'components/sections/footer/Footer'
import { FourthSection } from 'components/sections/fourthSection/FourthSection'
import { Hero } from 'components/sections/hero/Hero'
import { SecondSection } from 'components/sections/secondSection/SecondSection'
import { SeventhSection } from 'components/sections/seventhSection/SeventhSection'
import { SixthSection } from 'components/sections/sixthSection/SixthSection'
import { ThirdSection } from 'components/sections/thirdSection/ThirdSection'
import { Header } from './components/header/Header'

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
      <SeventhSection />
      <Footer />
    </div>
  )
}

export default App
