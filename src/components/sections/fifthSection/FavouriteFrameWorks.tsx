const frameworks = [
  {
    name: 'NextJS',
    src: require('../../../assets/images/fifthSection/nextjs.svg').default,
  },
  {
    name: 'GraphQL',
    src: require('../../../assets/images/fifthSection/graphql.svg').default,
  },
  {
    name: 'Apollo',
    src: require('../../../assets/images/fifthSection/apollo.svg').default,
  },
  {
    name: 'hapi',
    src: require('../../../assets/images/fifthSection/hapi.svg').default,
  },
  {
    name: 'nest',
    src: require('../../../assets/images/fifthSection/nest.svg').default,
  },
  {
    name: 'Express',
    src: require('../../../assets/images/fifthSection/express.svg').default,
  },
]

export function FavouriteFrameWorks() {
  return (
    <>
      {frameworks.map((framework, index) => (
        <img key={index} src={framework.src} alt={framework.name} />
      ))}
    </>
  )
}
