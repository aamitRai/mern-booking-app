import { Footer } from "../component/Footer.tsx";
import {Header} from "../component/Header.tsx";
interface Props{
  children :React.ReactNode;
}
export const Layout=({children}:Props)=>{
    return <>
     <div className="flex- flex-col  min-h-screen">
        <Header/>
      
    </div> 
    <div  className="container  py-5">
      {children}
    </div>
    <div>
      <Footer/>
      </div>
      </>
}