export function Hero() {
  return (
    <>
      <div className="hero-section pt-[104px] pb-[85px] hero-bg">
        <div className="flex px-[1.5rem] m-auto gap-8 max-w-[1248px] items-center">
          <div className="section-body">
            <div>
              <h1 className="hero-title headingColor font-bold">
                Next-generation <span className="priDark">Node.js</span> and{' '}
                <span className="priDark">TypeScript</span> ORM
              </h1>
            </div>
            <div className="hero-body text-[24px] leading-[150%] mb-[32px] me-[100px]">
              <p>
                Prisma unlocks a new level of <b>developer experience</b> when
                working with databases thanks to its intuiative data model,
                automated migrations, type-safety & auto-completion
              </p>
            </div>
            <div className="hero-buttons">
              <a
                href="/"
                className="rounded bg-[#5A67D8] hover:bg-[#4C51BF] text-[#ffffff] font-bold px-[24px] py-[16px] m-[4px] text-14px lineHeight-[14px]"
              >
                Quickstart
              </a>
              <a
                href="/"
                className="rounded text-[#5A67D8] font-bold px-[24px] py-[16px] m-[4px] text-14px lineHeight-[14px] border-[1px] border-[#5A67D8]"
              >
                Playground
                <i className="fa-solid fa-up-right-from-square ms-2"></i>
              </a>
            </div>
          </div>
          <div className="yt-video">
            <iframe
              className="rounded-[10px]"
              width="480"
              height="288"
              src="https://www.youtube.com/embed/EEDGwLB55bI"
              title="What Is Prisma?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
