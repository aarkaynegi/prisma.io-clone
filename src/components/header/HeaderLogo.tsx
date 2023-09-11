export const HeaderLogo: React.FunctionComponent = () => {
  return (
    <div className="get-started flex gap-10 items-center">
      <button className="rounded bg-[#5A67D8] hover:bg-[#4C51BF] text-[#ffffff] font-bold px-[24px] py-[12px] h-[40px] m-[4px] text-[14px] leading-[14px]">
        Get Started
      </button>
      <a href="github.com">
        <i className="fa-brands fa-github text-[1.375rem]"></i>
      </a>
    </div>
  )
}
