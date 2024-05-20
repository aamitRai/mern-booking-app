import { Link } from "react-router-dom"
import {Hero } from './Hero.tsx';
export const Header=()=>{
       return <>
       <div className="bg-sky-600 py-6 ">
        <div className="container flex justify-between">
        <span className="font-bold text-white  flex ">
            <Link className="flex items-center px-3 font-bold text-4xl"  to="/">RaiHoliday.com</Link>
        </span>
        <span className="font-bold text-white flex  ">
            <Link to="/sign-in" className="flex items-center px-2 font-bold text-sky-600 bg-white  hover:bg-gray-100 hover:text-sky-600" >Sign In</Link>
        </span>
        </div>
        <div>
       < Hero/>
        </div>
       </div>
       </>
}

 