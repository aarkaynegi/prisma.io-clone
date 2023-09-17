import { Container } from 'components/container/Container'
import { StackDesktop } from 'components/svgs/StackDesktop'
import { StackHhp } from 'components/svgs/StackHhp'
import { FavouriteFrameWorks } from './FavouriteFrameWorks'

export function FifthSection() {
  return (
    <>
      <div className="fifth-section fontInter lg:pt-[168px] pt-[110px] lg:pb-[112px] pb-[85px] bg-white text-center">
        <Container>
          <h2 className="mb-[22px] text-[#1a202c] lg:text-[48px] text-[32px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
            How does Prisma fit into your stack?
          </h2>
          <p className="text-[#4a5568] mb-[64px]">
            Prisma is a server-side library that helps developers read and write
            data to the database in an intuitive, efficient and safe way.
          </p>
          <div className="mb-[100px] mx-auto inline-block w-full">
            <div>
              <StackDesktop clasName="md:block w-full hidden" />
              <StackHhp className="md:hidden w-full block" />
            </div>
          </div>
          <div className="customShadow text-start p-[48px] rounded-[10px] bg-white">
            <h3 className="text-[#2d3748] mb-[16px] lg:text-[36px] text-[28px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
              The ORM that plays well with your favorite framework
            </h3>
            <p className="textNormal mb-[60px]">
              Easy to integrate into your framework of choice, Prisma simplifies
              database access, saves repetitive CRUD boilerplate and increases
              type safety. Its the perfect companion for building
              production-grade, robust and scalable web applications.
            </p>
            <div className="mb-[47px] gap-[12px] grid grid-cols-[_1fr,_1fr,_1fr] grid-rows-[_1fr,_1fr] lg:flex flex-wrap justify-around place-items-center">
              <FavouriteFrameWorks />
            </div>
            <div className="mx-auto text-center flex flex-col justify-center gap-[16px] min-[815px]:flex-row">
              <a
                href="https://github.com/prisma/prisma-examples"
                className="inline-flex justify-center max-w-full z-[1000] m-[4px] items-center rounded-[6px] pointer relative fontInter font-bold text-[18px] border border-[#5a67d8] bg-[#5a67d8] text-white py-[16px] px-[24px] leading-[1.5] lg:w-auto w-full text-left hover:bg-[#4c51bf] hover:border-[#4c51bf]"
              >
                Browse examples on GitHub
              </a>
              <a
                href="https://github.com/prisma/prisma-examples"
                className="inline-flex justify-center max-w-full z-[1000] m-[4px] items-center rounded-[6px] pointer relative fontInter font-bold text-[18px] border border-[#5a67d8] bg-white text-[#5a67d8] py-[16px] px-[24px] leading-[1.5] lg:w-auto w-full text-left hover:text-[#4c51bf] hover:border-[#4c51bf]"
              >
                More about Prisma in your stack
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
