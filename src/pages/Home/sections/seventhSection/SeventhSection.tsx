import Slider, { Settings } from 'react-slick'
import React, { useEffect, useRef, useState } from 'react'
import './SeventhSection.css'

import elsevier from '../../../../assets/images/seventhSection/slider/elsevier.svg'
import gatsby from '../../../../assets/images/seventhSection/slider/gatsby.svg'
import grover from '../../../../assets/images/seventhSection/slider/grover.svg'
import ihi from '../../../../assets/images/seventhSection/slider/ihi.svg'
import insta from '../../../../assets/images/seventhSection/slider/insta.svg'
import invisible from '../../../../assets/images/seventhSection/slider/invisible.svg'
import outrider from '../../../../assets/images/seventhSection/slider/outrider.svg'
import oxio from '../../../../assets/images/seventhSection/slider/oxio.svg'
import panther from '../../../../assets/images/seventhSection/slider/panther.svg'
import poppy from '../../../../assets/images/seventhSection/slider/poppy.svg'
import rapha from '../../../../assets/images/seventhSection/slider/rapha.svg'
import southpole from '../../../../assets/images/seventhSection/slider/southpole.svg'
import tryg from '../../../../assets/images/seventhSection/slider/tryg.svg'
import twiga from '../../../../assets/images/seventhSection/slider/twiga.svg'

const companyLogos = [
  { logo: elsevier, link: 'https://www.elsevier.com/' },
  { logo: gatsby, link: 'https://www.gatsbyjs.com' },
  { logo: grover, link: 'https://www.grover.com/' },
  { logo: ihi, link: 'https://www.ihiterrasun.com/' },
  { logo: insta, link: '#' },
  { logo: invisible, link: 'https://inv.tech/' },
  { logo: outrider, link: 'https://outrider.org/' },
  { logo: oxio, link: 'https://oxio.com/' },
  { logo: panther, link: 'https://www.panther.co/' },
  { logo: poppy, link: 'https://poppy.be/' },
  { logo: rapha, link: 'https://www.rapha.cc/' },
  { logo: southpole, link: 'https://www.southpole.com/' },
  { logo: tryg, link: 'https://www.tryg.com/' },
  { logo: twiga, link: 'https://twiga.com/' },
]

export const SeventhSection: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const sliderSettings: Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 5000,
    slidesToShow: 8,
    arrows: false,
    swipeToSlide: false,
    touchMove: false,
    touchThreshold: 0,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="seventh-section">
      <div className="header-text text-center">
        <h6 className="fontBarlow font-bold">Trusted in Production by</h6>
      </div>
      <section>
        <div className="section-div">
          <div className="slide-container">
            <Slider {...sliderSettings}>
              {companyLogos.map((obj, index) => (
                <a
                  key={index}
                  href={obj.link}
                  className="!flex items-center justify-center w-max"
                >
                  <img
                    src={obj.logo}
                    alt={`${obj.logo} Logo`}
                    className="companyLogo"
                  />
                </a>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}
