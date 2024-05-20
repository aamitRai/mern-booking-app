import './App.css'
import { BrowserRouter as Router, Route ,Routes,Navigate } from "react-router-dom"
import { Layout } from "./layout/Layout"
import { Signin } from './component/Signin'
import { Signup } from './component/Signup'

function App() {

  return (
    <>

      <Router>
    <Routes>
        {/* <Route path="/head" element={<Layout></Layout>}></Route> */}
        <Route path="/" element={<Layout><p className='bg-sky-600'>Home</p></Layout>}></Route>
        <Route path="/booking" element={<Layout><p className='bg-sky-600'>Booking</p></Layout>}></Route>
        <Route path="/signin" element={<Layout><Signin></Signin></Layout>}></Route>
        <Route path="/signup" element={<Layout><Signup ></Signup></Layout>}></Route>
        <Route path="*" element={<Navigate to="/" />}/>

    
    </Routes>
  </Router>
  </>  )
}

export default App
