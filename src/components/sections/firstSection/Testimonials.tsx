import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './Testimonials.css'

interface ITestimonials {
  id: number
  author: string
  designation: string
  company: string
  comment: string
  profile: string
}

const testimonials: ITestimonials[] = [
  {
    id: 1,
    author: 'Lasse Abelsen',
    designation: 'DevOps Engineer',
    company: 'Tryg',
    comment:
      '“Our setup with Prisma enabled us to <b>generate everything from code</b> and ensure our developers can iterate very quickly.”',
    profile: 'lasse-abelsen.webp',
  },
  {
    id: 2,
    author: 'Serghei Ghidora',
    designation: 'Tech Lead',
    company: 'Elsevier',
    comment: `“The flexibility of <b>moving fast</b> and changing the product based on user feedback fast was crucial”`,
    profile: 'serghei-ghidora.webp',
  },
  {
    id: 3,
    author: 'Tom Hutchinson',
    designation: 'Head of Mobile',
    company: 'Rapha',
    comment:
      '“Prisma helps us <b>unify data access</b> from multiple enterprise systems into a single API. It means we can move very quickly whilst staying flexible.”',
    profile: 'tom-hutchinson.webp',
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

  return (
    <Slider {...sliderSetting}>
      {testimonials.map((testimonial) => (
        <div className="py-[30px] pl-[53px] pr-[46px] max-w-[966px] rounded-[10px] bg-white relative">
          <span className="pri icon absolute top-[20px] left-[53px] text-[74px]">
            “
          </span>
          <span className="textNormal pt-[53px] mb-[24px]">
            {testimonial.comment}
          </span>
          <div className="">
            <img
              src={`images/testimonials/${testimonial.profile}`}
              alt={testimonial.profile}
            />
            <div>
              <span className="sc-hRJfrW hpMesL author">
                {testimonial.author}
              </span>
              <span className="sc-hRJfrW hpMesL title">
                {testimonial.designation} at
              </span>
              <span className="sc-hRJfrW hpMesL company">
                {testimonial.company}
              </span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
