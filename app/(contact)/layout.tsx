import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center">
        <Navbar />
        {children}
      </div>
    </>
  )
}

export default layout
