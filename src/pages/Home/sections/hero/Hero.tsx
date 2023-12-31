interface YouTubeVideoProps {
  width: number
  height: number
  src: string
  title: string
}

export function Hero() {
  return (
    <>
      <div className="hero-section pt-[104px] pb-[85px] hero-bg">
        <div className="flex px-[2rem] lg:px-[1.5rem] m-auto gap-8 max-w-[1248px] items-center">
          <div className="section-body">
            <div>
              <h1 className="hero-title headingColor font-[700] fontBarlow">
                Next-generation <span className="priDark">Node.js</span> and{' '}
                <span className="priDark">TypeScript</span> ORM
              </h1>
            </div>
            <p className="hero-body text-[24px] leading-[150%] mb-[32px] me-[100px] font-[300]">
              Prisma unlocks a new level of{' '}
              <b className="font-bold">developer experience</b> when working
              with databases thanks to its intuitive data model, automated
              migrations, type-safety & auto-completion
            </p>
            <div className="hero-buttons flex gap-[20px]">
              <a
                href="/"
                className="rounded-[6px] bg-[#5A67D8] hover:bg-[#4C51BF] text-[#ffffff] font-[600] px-[25px] py-[15px] m-[4px] text-[1.25rem] fontBarlow h-fit"
              >
                Quickstart
              </a>
              <a
                href="/"
                className="rounded-[6px] text-[#5A67D8] font-[600] px-[25px] py-[15px] m-[4px] text-[1.25rem] lineHeight-[14px] border-[1px] border-[#5A67D8] fontBarlow h-fit"
              >
                Playground
                <i className="fa-solid fa-up-right-from-square ms-2"></i>
              </a>
            </div>
          </div>
          <div className="yt-video">
            <iframe
              className="rounded-[10px]"
              width={480}
              height={288}
              src={'https://www.youtube.com/embed/EEDGwLB55bI'}
              title={'What Is Prisma?'}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
