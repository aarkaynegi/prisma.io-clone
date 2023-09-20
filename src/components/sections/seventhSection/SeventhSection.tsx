import Slider, { Settings } from 'react-slick'
import elSevier from '../../../assets/images/seventhSection/slider/elsevier.svg'
import grover from '../../../assets/images/seventhSection/slider/grover.svg'
import ihi from '../../../assets/images/seventhSection/slider/ihi.svg'
import { default as gatsby, default as insta } from '../../../assets/images/seventhSection/slider/insta.svg'
import invisible from '../../../assets/images/seventhSection/slider/invisible.svg'
import outrider from '../../../assets/images/seventhSection/slider/outrider.svg'
import oxio from '../../../assets/images/seventhSection/slider/oxio.svg'
import panther from '../../../assets/images/seventhSection/slider/panther.svg'
import poppy from '../../../assets/images/seventhSection/slider/poppy.svg'
import rapha from '../../../assets/images/seventhSection/slider/rapha.svg'
import southpole from '../../../assets/images/seventhSection/slider/southpole.svg'
import tryg from '../../../assets/images/seventhSection/slider/tryg.svg'
import twiga from '../../../assets/images/seventhSection/slider/twiga.svg'

import './SeventhSection.css'

export const SeventhSection: React.FC = () => {
  const companyLogos = [
    elSevier,
    gatsby,
    grover,
    ihi,
    insta,
    invisible,
    outrider,
    oxio,
    panther,
    poppy,
    rapha,
    southpole,
    tryg,
    twiga,
  ]

  const sliderSetting: Settings = {
    arrows: true,
    slidesToShow: 2.5,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          dots: false,
          infinite: false,
        },
      },
    ],
  }

  return (
    <>
      <div className="seventh-section">
        <div className="header-text">
          <h6>Trusted in Production by</h6>
        </div>
        <section>
          <div className='section-div'>
            <Slider {...sliderSetting}>
              {/* <ul> */}
                {companyLogos.map((el, idx) => (
                  <li key={idx}>
                    <img src={el} alt='el' />
                      {/* <span>{idx}</span> */}
                    {/* </img> */}
                  </li>
                ))}
              {/* </ul> */}
            </Slider>
          </div>
        </section>
      </div>
    </>
  )
}
