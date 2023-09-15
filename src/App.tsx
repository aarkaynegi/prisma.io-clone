import { Header } from './components/header/Header'
import { Hero } from 'components/sections/hero/Hero'
import { FirstSection } from 'components/sections/firstSection/FirstSection'
import { SecondSection } from 'components/sections/secondSection/SecondSection'
import { ThirdSection } from 'components/sections/thirdSection/ThirdSection'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  )
}

export default App
