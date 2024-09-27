import { Children } from "react"


interface ContainerProps {
    children: React.ReactNode; 
  }

export default function Container({children}: ContainerProps){
    return(
        <div className=" bg-zinc-50 max-w-4xl mx-auto min-h-screen flex flex-col border-x">
            {children}
        </div>
    )
}