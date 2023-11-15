import { Container } from 'pages/Home/container/Container'
import './FourthSection.css'
import fourthFirstSection from '../../../../assets/images/fourthSection/hasslefree-migrations.svg'
import fourthSecondSection from '../../../../assets/images/fourthSection/visual-database.svg'

export function FourthSection() {
  return (
    <>
      <div className="fourth-section fontInter">
        <Container>
          <div className=" w-full items-center justify-between gap-[50px] inline-flex lg:gap-[0] gap-[32px] lg:flex-row flex-col">
            <div className="max-w-[565px] w-full">
              <img src={fourthFirstSection} alt="typesafe-database-client" />
            </div>
            <div className="lg:max-w-[600px] w-full">
              <div className="fontBarlow text-[18px] uppercase mb-[8px] pri leading-[100%] tracking-[0.1em] font-bold">
                Prisma Migrate
              </div>
              <h2 className="text-[--textDark] mb-[32px] text-[32px] lg:text-[48px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
                Hassle-free migrations
              </h2>
              <p className="text-[18px] mb-[32px] textNormal">
                Prisma Migrate auto-generates SQL migrations from your Prisma
                schema. These migration files are fully customizable, giving you
                full control and ultimate flexibility — from local development
                to production environments.
              </p>
              <div className="flex md:flex-row flex-col gap-x-[20px] fontInter text-[18px] tracking-0 leading-[140%]">
                <a
                  href="./client"
                  className="w-auto rounded-[6px] fontBarlow flex items-end text-[1.25rem] justify-center max-w-[100%] text-left m-[4px] z-[1000] pointer leading-1 border border-[#16a394] bg-[#16a394] hover:bg-[#4c51bf] bg-[--pri] hover:border-[#187367] text-white px-[24px] py-[16px] "
                >
                  Learn more
                </a>
                <a
                  href="https://playground.prisma.io"
                  className="group w-auto rounded-[6px] fontBarlow flex items-end text-[1.25rem] justify-center max-w-[100%] text-left m-[4px] z-[1000] pointer leading-1 border border-[--pri] bg-transparent hover:text-[#4c51bf] hover:border-[#4c51bf] text-[--pri] px-[24px] py-[16px] ease-in-out	"
                >
                  Playground
                  <i className="fa-solid fa-arrow-up-right-from-square w-[12px] ml-[8px] mr-[2px] group-hover:ml-[10px] group-hover:mr-0 text-[--pri] group-hover:text-[#4c51bf]"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="my-[64px] max-w-[364px] w-full h-[1px] bg-[#c3dafe] mx-auto"></div>
          <div className=" w-full items-center justify-between gap-[50px] inline-flex lg:gap-[0] gap-[32px] lg:flex-row flex-col">
            <div className="max-w-[565px] w-full">
              <img src={fourthSecondSection} alt="typesafe-database-client" />
            </div>
            <div className="lg:max-w-[600px] w-full">
              <div className="fontBarlow text-[18px] uppercase mb-[8px] text-[#718096] leading-[100%] tracking-[0.1em] font-bold pri">
                Prisma Studio
              </div>
              <h2 className="text-[--textDark] mb-[32px] text-[32px] lg:text-[48px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
                Visual database browser
              </h2>
              <p className="textNormal text-[18px] mb-[32px] fontInter">
                Prisma Studio is the easiest way to explore and manipulate data
                in your Prisma projects. Understand your data by browsing across
                tables, filter, paginate, traverse relations and edit your data
                with safety.
              </p>
              <div className="flex md:flex-row flex-col gap-x-[20px] fontInter text-[18px] tracking-0 leading-[140%]">
                <a
                  href="./client"
                  className="w-auto rounded-[6px] fontBarlow flex items-end text-[1.25rem] justify-center max-w-[100%] text-left m-[4px] z-[1000] pointer leading-1 border border-[--pri] bg-[--pri] hover:bg-[#4c51bf] hover:border-[#4c51bf] text-white px-[24px] py-[16px]"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
