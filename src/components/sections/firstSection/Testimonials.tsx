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

const SPACE_CHAR = '\u00A0'

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

function SampleNextArrow(props: any) {
  const { className, onClick } = props
  return <div className={className} onClick={onClick} />
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props
  return <div className={className} onClick={onClick} />
}

export const Testimonials: React.FC = () => {
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
    <Slider {...sliderSetting} className="mt-[30px]">
      {testimonials.map((testimonial) => (
        <div className="p-[30px]">
          <div className="py-[30px] pl-[53px] pr-[46px] max-w-[966px] rounded-[10px] bg-white relative flex flex-col testimonialShadow">
            <span className="pri icon absolute top-[20px] left-[53px] text-[74px] fontInter">
              “
            </span>
            <span
              className="textNormal pt-[53px] mb-[24px] text-[24px] fontInter"
              dangerouslySetInnerHTML={{ __html: testimonial.comment }}
            />
            <div className="flex items-center gap-[20px] textLight fontBarlow leading-[140%]">
              <img
                className="rounded-[100%] w-[84px] h-[84px] object-cover shrink-0"
                src={`images/testimonials/${testimonial.profile}`}
                alt={testimonial.profile}
              />
              <div>
                <span className="textNormal font-bold text-[24px] leading-[140%] block fontInter">
                  {testimonial.author}
                </span>
                <span className="text-[24px] leading-[140%] fontInter">
                  {testimonial.designation} at{SPACE_CHAR}
                </span>
                <span className="text-[24px] leading-[140%] font-bold pri text-[24px] fontInter">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}
