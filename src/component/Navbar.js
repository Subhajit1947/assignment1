import React from 'react'
import rpic1 from './rpic1.png'
import rpic2 from './rpic2.png'
import phicon from './phicon.png'
import {Link,useNavigate} from 'react-router-dom'
function Navbar() {
    const navigate=useNavigate()
    const handlecontact=()=>{
        navigate('/contact')
    }
  return (
    <div>
        <div className='border-b-2 h-[18vh] sticky top-0 flex items-center justify-between md:p-5'>
            <div>
                <Link to='/'><img src={rpic1}/></Link>
            </div>
            <div className='flex space-x-3 flex-wrap'>
                <Link to='./blog'><span className='font-bold flex pt-[1px]'>Blog</span></Link>
                <span className='font-bold flex'>Marketing <img className='h-[1rem] w-[1rem] ' src={rpic2}/></span>
                <span className='font-bold flex'>Web Development <img className='h-[1rem] w-[1rem] ' src={rpic2}/></span>
                <span className='font-bold flex'>Company <img className='h-[1rem] w-[1rem] ' src={rpic2}/></span>
                <span className='font-bold flex cursor-pointer' onClick={handlecontact}>Contact </span>
                
            </div>
            <div className='flex justify-center items-center space-x-3'>
                <div className='flex space-x-1 font-bold text-1rem'><img src={phicon} className='h-[2rem] w-[2rem]'/><span>+91 98712 32887</span></div>
                <div className='h-[3rem] w-[10rem] bg-slate-800 text-white rounded-[2rem] flex justify-center items-center text-[0.7rem] font-bold lg:text-[1.2rem]'>Get A Proposal</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar