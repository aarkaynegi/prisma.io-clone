import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1248px] w-full px-[2rem] lg:px-[1.5rem] m-auto ">
      {children}
    </div>
  )
}
