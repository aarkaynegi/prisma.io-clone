export function FooterSection(props: any) {
  console.log(props.item)
  return (
    <>
      <h4 className="uppercase text-[1rem] text-[#4a5568] tracking-[0.08em] mt-0 mb-[1rem]">
        {props.item.heading}
      </h4>
      {props.item.items.map((item: any, index: number) => (
        <a href={item.link} key={index} className="">
          {item.tag ? (
            <div className="flex items-center">
              {item.name}
              <span className="text-white uppercase tracking-[0.1rem] flex items-center whitespace-nowrap	leading-[100%] text-[8px] font-bold fontBarlow py-[6px] px-[8px] rounded-[99px] bg-[#5a67d8] ml-[8px]">
                {item.tagName}
              </span>
            </div>
          ) : item.externalLink ? (
            <>
              {item.name}
              <i className="fa-solid fa-arrow-up-right-from-square text-[1rem] mt-[5px] ml-[5px]"></i>
            </>
          ) : (
            <>{item.name}</>
          )}
        </a>
      ))}
    </>
  )
}
