export interface IMenu {
  heading: string
  items: {
    name: string
    externalLink: boolean
    link: string
    tag: boolean
    tagName: string
  }[]
}

export const menu: IMenu[] = [
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
