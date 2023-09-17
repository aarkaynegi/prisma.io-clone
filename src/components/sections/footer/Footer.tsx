import { Container } from 'components/container/Container'
import './Footer.css'
import logo from '../../../assets/images/prisma-logo-dark.svg'
import { FooterSection } from './FooterSecton'

interface IMenu {
  heading: string
  items: {
    name: string
    externalLink: boolean
    link: string
    tag: boolean
    tagName: string
  }[]
}

const menu: IMenu[] = [
  {
    heading: 'Product',
    items: [
      {
        name: 'Client',
        link: './client',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Migrate',
        link: './migrate',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Data Browser',
        link: './data-platform',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Data Proxy',
        link: './data-platform/proxy',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Accelerate',
        link: './data-platform/accelerate',
        tag: true,
        tagName: 'Preview',
        externalLink: false,
      },
      {
        name: 'Pulse',
        link: './data-platform/pulse',
        externalLink: false,
        tag: true,
        tagName: 'Early Access',
      },
      {
        name: 'Pricing',
        link: './pricing',
        tag: false,
        tagName: '',
        externalLink: false,
      },
    ],
  },
  {
    heading: 'Developers',
    items: [
      {
        name: 'Docs',
        link: './docs',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Get Started',
        link: './docs/getting-started',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Prisma Examples',
        link: 'https://github.com/prisma/prisma-examples',
        tag: false,
        tagName: '',
        externalLink: true,
      },
      {
        name: 'Data Guide',
        link: './dataguide',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Prisma in your Stack',
        link: './stack',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Support',
        link: './support',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Community',
        link: './community',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Data Platform Status',
        link: 'https://www.prisma-status.com',
        tag: false,
        tagName: '',
        externalLink: true,
      },
      {
        name: 'VS Code Extension',
        link: 'https://marketplace.visualstudio.com/items?itemName=Prisma.prisma',
        tag: false,
        tagName: '',
        externalLink: true,
      },
    ],
  },
  {
    heading: 'Use Cases',
    items: [
      {
        name: 'Customer Stories',
        link: './showcase',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Enterprise',
        link: './enterprise',
        tag: false,
        tagName: '',
        externalLink: false,
      },
    ],
  },
  {
    heading: 'Company',
    items: [
      {
        name: 'About',
        link: './about',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Blog',
        link: './blog',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Careers',
        link: './careers',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Events',
        link: './events',
        tag: false,
        tagName: '',
        externalLink: false,
      },
      {
        name: 'Causes',
        link: 'https://pris.ly/causes',
        tag: false,
        tagName: '',
        externalLink: true,
      },
      {
        name: 'Terms & Privacy',
        link: 'https://pris.ly/privacy',
        tag: false,
        tagName: '',
        externalLink: true,
      },
    ],
  },
]

export function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="fontInter flex flex-col-reverse min-[768px]:flex-col">
            <div className="footer-section-one">
              {menu.map((column) => (
                <div className="mb-[48px]">
                  <FooterSection item={column} />
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
