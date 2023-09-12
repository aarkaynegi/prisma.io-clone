export const HeaderButton: React.FunctionComponent = () => {
  return (
    <div className="get-started flex gap-10 items-center max-w-[200px]">
      <button className="rounded bg-[#5A67D8] hover:bg-[#4C51BF] text-[#ffffff] font-bold px-[24px] py-[16px] m-[4px] text-14px leading-[14px] h-[40px] font-[600] text-[14px] leading-[22px] flex items-center">
        Get Started
      </button>
      <a href="github.com">
        <i className="fa-brands fa-2x fa-github text-[1.375rem]"></i>
      </a>
    </div>
  )
}
