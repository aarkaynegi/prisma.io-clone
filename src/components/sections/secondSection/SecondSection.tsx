import schemaImage from '../../../assets/images/second-section-schema.svg'

export function SecondSection() {
  return (
    <>
      <div className="second-section">
        <div className="max-w-[1248px] w-full px-[1.5rem] m-auto">
          <div className="flex justify-between items-center mb-[88px]">
            <div className="max-w-[621px] w-full pr-[51px]">
              <div className="fontBarlow text-[20px] uppercase mb-[8px] text-[#a0aec0] leading-[100%] tracking-[0.1em] font-bold">
                Prisma schema
              </div>
              <h2 className="text-[#2d3748] mb-[18px] text-[48px] fontBarlow font-bold tracking-[-0.02em] leading-[110%]">
                Data model you can read
              </h2>
              <div className="text-[20px] leading-[140%] mb-[50px] textNormal">
                The Prisma schema is intuitive and lets you declare your
                database tables in a human-readable way — making your data
                modeling experience a delight. You define your models by hand or
                introspect them from an existing database.
              </div>
              <a
                href="./docs/concepts/components/prisma-schema"
                className="leading-[1] rounded-[6px] pointer fontInter font-bold text-[18px] bg-[#16a394] border border-[#16a394] text-white py-[16px] px-[24px]"
              >
                Learn more about Prisma Schema
              </a>
            </div>
            <div className="max-w-[570px] w-full ">
              <img src={schemaImage} width="570" height="522" alt="" />
              <a href="./docs/concepts/components/prisma-schema"></a>
            </div>
          </div>
        </div>
        <div className="max-w-[1248px] w-full px-[1.5rem] m-auto">
          <div className="">
            <div className="">
              <a href="./stack">
                <span className="">Supported Languages</span>
                <div className="">
                  <div className="">JavaScript</div>
                  <div className="">TypeScript</div>
                </div>
                <div className="">Prisma in your stack -&gt;</div>
              </a>
            </div>
            <div className="">
              <a href="./stack">
                <span className="">Supported Databases</span>
                <div className="">
                  <div className="">PostgreSQL</div>
                  <div className="">MySQL</div>
                  <div className="">SQLite</div>
                  <div className="">SQL Server</div>
                  <div className="">MongoDB</div>
                  <div className="">CockroachDB</div>
                </div>
                <div className="">Prisma in your stack -&gt;</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
