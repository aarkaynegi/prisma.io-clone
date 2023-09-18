import { Container } from 'components/container/Container'
import logo from '../../../assets/images/prisma-logo-dark.svg'
import './Footer.css'
import { FooterSection } from './FooterSecton'
import { menu } from './footer-data'

export function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="fontInter flex flex-col-reverse min-[768px]:flex-col">
            <div className="footer-section-one">
              {menu.map((column, index) => (
                <div className="mb-[48px]">
                  <FooterSection {...column} key={index} />
                </div>
              ))}
            </div>
            <div className="footer-top-section-two">
              <h4>NewsLetter</h4>
              <div>
                <form action="#" method="POST">
                  <label className="">
                    <div className="">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </label>
                  <label className="">
                    <div className="">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                    />
                  </label>
                  <button className="fontInter font-bold text-[18px] hover:bg-[#4C51BF] focus:bg-[#4C51BF]">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      value="Subscribe for updates"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center flex-col">
              <div className="mb-[0.5rem]">
                <img
                  src={logo}
                  alt="prisma_logo"
                  width={90}
                  height={27}
                  className="max-w-full h-auto"
                />
              </div>
              <div className="fontInter text-[#2d3748] text-[1.125rem] ">
                &copy; {new Date().getFullYear()} Prisma Data, Inc.
              </div>
            </div>
            <div className="min-[768px]:flex justify-start gap-[20px] hidden">
              <a
                className="text-[#2d3748] text-[1.375rem]"
                href="https://discord.gg/KQyTW2H5ca"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
              <a
                className="text-[#2d3748] text-[1.375rem]"
                href="https://twitter.com/prisma"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="text-[#2d3748] text-[1.375rem]"
                href="https://www.youtube.com/c/PrismaData"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                className="text-[#2d3748] text-[1.375rem]"
                href="https://slack.prisma.io"
              >
                <i className="fa-brands fa-slack"></i>
              </a>
              <a
                className="text-[#2d3748] text-[1.375rem]"
                href="https://github.com/prisma"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
