import './ThirdSection.css'
import thirdSectionSchema from '../../../assets/images/thirdSection/typesafe-database-client.svg'
import vscode from '../../../assets/images/thirdSection/vscode.svg'
import ts from '../../../assets/images/thirdSection/ts-framed.svg'
import { Container } from 'components/container/Container'

export function ThirdSection() {
  return (
    <>
      <div className="third-section">
        <Container>
          <div className="mb-[100px] mt-[82px] w-full items-center justify-between gap-[50px] inline-flex lg:gap-[0] gap-[32px] lg:flex-row flex-col">
            <div className="max-w-[565px] w-full">
              <img src={thirdSectionSchema} alt="typesafe-database-client" />
            </div>
            <div className="lg:max-w-[600px] w-full">
              <div className="fontBarlow text-[18px] uppercase mb-[8px] text-[#718096] leading-[100%] tracking-[0.1em] font-bold">
                Prisma Client
              </div>
              <h2 className="text-white mb-[32px] text-[32px] lg:text-[48px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
                Type-safe database client
              </h2>
              <p className="text-[#cbd5e0] text-[18px] mb-[32px] fontInter">
                Prisma Client is a query builder that’s tailored to your schema.
                We designed its API to be intuitive, both for SQL veterans and
                developers brand new to databases. The auto-completion helps you
                figure out your query without the need for documentation.
              </p>
              <div className="flex gap-x-[20px] fontInter text-[18px] tracking-0 leading-[140%]">
                <a
                  href="./client"
                  className="w-auto rounded-[6px] fontBarlow flex items-end text-[1.25rem] justify-center max-w-[100%] text-left m-[4px] z-[1000] pointer leading-1 border border-[#16a394] bg-[#16a394] hover:bg-[#187367] hover:border-[#187367] text-white px-[24px] py-[16px]"
                >
                  Explore Prisma Client
                </a>
                <a
                  href=""
                  className="group w-auto rounded-[6px] fontBarlow flex items-end text-[1.25rem] justify-center max-w-[100%] text-left m-[4px] z-[1000] pointer leading-1 border border-[#16a394] bg-transparent hover:text-[#187367] hover:border-[#187367] text-[#16a394] px-[24px] py-[16px] ease-in-out	"
                >
                  Playground
                  <i className="fa-solid fa-arrow-up-right-from-square w-[12px] ml-[8px] mr-[2px] group-hover:ml-[10px] group-hover:mr-0 text-[#16a394] group-hover:text-[#187367]"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mb-[42px] inline-flex gap-[48px] fontInter lg:gap-[0] lg:gap-[32px] lg:flex-row flex-col">
            <div className="lg:w-1/2 flex items-start gap-[24px] lg:flex-row flex-col">
              <img src={vscode} alt="vscode" className="w-[74px] h-[74px]" />
              <div className="">
                <h6 className="text-white font-bold mb-[8px] text-[20px]">
                  Extra ergonomy in VS Code
                </h6>
                <p className="text-[#cbd5e0] mb-[16px] text-[16px]">
                  Auto-completion, linting, formatting and more help Prisma
                  developers in VS Code stay confident and productive.
                </p>
                <a
                  href=""
                  className="inline-flex justify-center max-w-[100%] z-[1000] m-[4px] mr-[14px] items-center rounded-[6px] pointer relative fontInter font-bold text-[18px] bg-transparent text-[#16a394] pr-[10px] rounded-none border-b-[3px] border-[#16a394] hover:text-[#187367] hover:border-[#187367] group"
                >
                  Download Prisma VS Code Extension
                  <i className="fa-solid fa-arrow-up-right-from-square absolute top-[50%] translate-y-[-50%] right-[-15px] h-auto group-hover:right-[-20px] ease-in-out duration-100"></i>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex items-start gap-[24px] lg:flex-row flex-col">
              <img src={ts} alt="vscode" className="w-[74px] h-[74px]" />
              <div className="">
                <h6 className="text-white font-bold mb-[8px] text-[20px]">
                  Make fewer errors with TypeScript
                </h6>
                <p className="text-[#cbd5e0] mb-[16px] text-[16px]">
                  Prisma provides the strongest type-safety guarantees of all
                  the ORMs in the TypeScript ecosystem.
                </p>
                <a
                  href=""
                  className="inline-flex justify-center max-w-[100%] z-[1000] m-[4px] mr-[14px] items-center rounded-[6px] pointer relative fontInter font-bold text-[18px] bg-transparent text-[#16a394] pr-[5px] rounded-none	border-b-[3px] border-[#16a394] hover:text-[#187367] hover:border-[#187367] group"
                >
                  Read comparison with TypeORM
                  <i className="fa-solid fa-arrow-right absolute top-[50%] translate-y-[-50%] right-[-15px] h-auto group-hover:right-[-20px] ease-in-out duration-100"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden pt-[33px] mt-[53px] mb-[-53px] z-10 relative bg-white customShadow rounded-[10px] lg:block">
            <div className="inline-grid grid-rows-[repeat(4,auto)] grid-cols-[repeat(4,_1fr)] px-[60px] gap-[12px] w-full mb-[35px]">
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Auto-generated</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Easy Relation API</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Advanced Pagination</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Nested Writes</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Raw Database Access</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Sorting and Filtering</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Transactions</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Aggregations</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Case-insensitive Mode</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Select Distinct</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Helpful Error Messages</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">SQL Query Logging</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">JSON Field Support</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Native Database Types</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Custom Generators</span>
              </div>
              <div className="text-[18px] text-[#04c8bb] flex font-[600] items-center">
                <i className="fa-solid fa-check text-center text-[25px] mr-[14px] w-[24px] h-[24px]"></i>
                <span className="text-[#4a5568]">Middleware</span>
              </div>
            </div>
            <div className="py-[20px] border-t border-[#e2e8f0]">
              <a
                href="/docs/concepts/components/prisma-client"
                className="text-center w-full text-[16px] block font-[600] text-[#a0aec0]"
              >
                Explore the up-to-date Prisma Client Documentation
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
