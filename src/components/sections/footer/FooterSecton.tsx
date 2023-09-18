import { IMenu } from './footer-data'

export function FooterSection(props: IMenu) {
  return (
    <>
      <h4 className="uppercase text-[1rem] text-[#4a5568] tracking-[0.08em] mt-0 mb-[1rem]">
        {props.heading}
      </h4>
      {props.items.map((item: any, index: number) => (
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
