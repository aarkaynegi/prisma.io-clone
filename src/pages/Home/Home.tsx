import { FifthSection } from './sections/fifthSection/FifthSection'
import { FirstSection } from './sections/firstSection/FirstSection'
import { Footer } from './sections/footer/Footer'
import { FourthSection } from './sections/fourthSection/FourthSection'
import { Hero } from './sections/hero/Hero'
import { SecondSection } from './sections/secondSection/SecondSection'
import { SeventhSection } from './sections/seventhSection/SeventhSection'
import { SixthSection } from './sections/sixthSection/SixthSection'
import { ThirdSection } from './sections/thirdSection/ThirdSection'
import { Header } from './header/Header'

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
