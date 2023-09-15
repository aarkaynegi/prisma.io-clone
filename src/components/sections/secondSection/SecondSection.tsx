import { Container } from 'components/container/Container'
import schemaImage from '../../../assets/images/second-section-schema.svg'
import './SecondSection.css'

export function SecondSection() {
  return (
    <>
      <div className="second-section">
        <Container>
          <div className="flex justify-between items-center mb-[88px] lg:gap-[0] gap-[32px] lg:flex-row flex-col">
            <div className="max-w-[621px] w-full lg:pr-[51px]">
              <div className="fontBarlow text-[20px] uppercase mb-[8px] text-[#a0aec0] leading-[100%] tracking-[0.1em] font-bold">
                Prisma schema
              </div>
              <h2 className="text-[#2d3748] mb-[18px] text-[32px] lg:text-[48px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
                Data model you can read
              </h2>
              <p className="text-[20px] leading-[140%] mb-[50px] textNormal">
                The Prisma schema is intuitive and lets you declare your
                database tables in a human-readable way — making your data
                modeling experience a delight. You define your models by hand or
                introspect them from an existing database.
              </p>
              <a
                href="./docs/concepts/components/prisma-schema"
                className="inline-block	leading-[1] rounded-[6px] pointer fontInter font-bold text-[18px] bg-[#16a394] border border-[#16a394] text-white py-[16px] px-[24px] lg:w-fit w-full hover:bg-[#187367] hover:border-[#187367]"
              >
                Learn more about Prisma Schema
              </a>
            </div>
            <div className="max-w-[570px] w-full ">
              <img src={schemaImage} width="570" height="522" alt="" />
              <a href="./docs/concepts/components/prisma-schema"></a>
            </div>
          </div>
        </Container>
        <div className="max-w-[1248px] w-full px-[1.5rem] m-auto fontInter">
          <div className="badge-section flex justify-between gap-[48px] mb-[100px] md:flex-row flex-col">
            <div className="max-w-[275px] pointer w-full relative group">
              <a href="./stack">
                <span className="text-[18px] fontBarlow block mb-[32px] text-[#a0aec0] uppercase tracking-[0.1em] leading-[100%] group-hover:opacity-50">
                  Supported Languages
                </span>
                <div className="badge-list group-hover:opacity-50">
                  <div className="badge-item">JavaScript</div>
                  <div className="badge-item">TypeScript</div>
                </div>
                <div className="hidden whitespace-nowrap p-[8px] bg-[#e2e8f0] text-[#4a5568] absolute left-[50%] top-[50%] font-bold rounded-[6px] translate-x-[-50%] translate-y-[-50%] z-[100] group-hover:block">
                  Prisma in your stack -&gt;
                </div>
              </a>
            </div>
            <div className="max-w-[832px] pointer w-full relative group">
              <a href="./stack">
                <span className="text-[18px] fontBarlow block mb-[32px] text-[#a0aec0] uppercase tracking-[0.1em] leading-[100%] group-hover:opacity-50">
                  Supported Databases
                </span>
                <div className="badge-list group-hover:opacity-50">
                  <div className="badge-item">PostgreSQL</div>
                  <div className="badge-item">MySQL</div>
                  <div className="badge-item">SQLite</div>
                  <div className="badge-item">SQL Server</div>
                  <div className="badge-item">MongoDB</div>
                  <div className="badge-item">CockroachDB</div>
                </div>
                <div className="hidden whitespace-nowrap p-[8px] bg-[#e2e8f0] text-[#4a5568] absolute left-[50%] top-[50%] font-bold rounded-[6px] translate-x-[-50%] translate-y-[-50%] z-[100] group-hover:block">
                  Prisma in your stack -&gt;
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
