import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface ITestimonials {
  id: number
  author: string
  designation: string
  at: string
  company: string
  comment: string
}

const testimonials: ITestimonials[] = [
  {
    id: 1,
    author: 'Lasse Abelsen',
    designation: 'DevOps Engineer',
    at: 'at',
    company: 'Tryg',
    comment:
      '“Our setup with Prisma enabled us to <b>generate everything from code</b> and ensure our developers can iterate very quickly.”',
  },
  {
    id: 2,
    author: 'Serghei Ghidora',
    designation: 'Tech Lead',
    at: 'at',
    company: 'Elsevier',
    comment:
      '“The flexibility of <b>moving fast</b> and changing the product based on user feedback fast was crucial”',
  },
  {
    id: 3,
    author: 'Tom Hutchinson',
    designation: 'Head of Mobile',
    at: 'at',
    company: 'Rapha',
    comment:
      '“Prisma helps us <b>unify data access</b> from multiple enterprise systems into a single API. It means we can move very quickly whilst staying flexible.”',
  },
]

export const Testimonials: React.FC = () => {
  const sliderSetting: Settings = {
    arrows: true,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  
  return <Slider {...sliderSetting}>

  </Slider>
}
