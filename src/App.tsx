import { Header } from './components/header/Header'
import { Hero } from 'components/sections/hero/Hero'
import { FirstSection } from 'components/sections/firstSection/FirstSection'
import { SecondSection } from 'components/sections/secondSection/SecondSection'
import { ThirdSection } from 'components/sections/thirdSection/ThirdSection'
import { FourthSection } from 'components/sections/fourthSection/FourthSection'
import { FifthSection } from 'components/sections/fifthSection/FifthSection'

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
    </div>
  )
}

export default App
