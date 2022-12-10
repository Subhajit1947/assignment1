import React, { useEffect, useState } from 'react'
import plus from './plus.png'

import bdata from './blogdata.json'
function Blog() {
    const [data, setdata] = useState([])
    const latest=data.slice(0,5)
    
    
    
    useEffect(() => {
        
        setdata([...data,...bdata])
    }, [])
    console.log(data,latest)
    
    return (

        <div>
            {data?<>
            <div className='h-[15rem] w-[100%] bg-[url(https://improvedigitally.com/wp-content/uploads/2018/10/sub_header_image_without_overlay.jpg)] bg-cover text-4xl font-bold text-slate-800 pt-10 pl-10'>BLOG</div>
            <div className='flex justify-between'>
                <div className='md:m-5 h-[80%] w-[50%] md:w-[70%] pt-5 flex flex-wrap'>
                    {data.map((obj)=>(
                        
                        <div className='w-[95%] md:w-[40%] bg-white m-5 border-2 rounded-xl '>
                            <div className='h-[10rem] w-[95%]  m-2'>
                                <img src={obj.urlToImage} className='h-[95%] w-[99%] rounded-xl' />
                            </div>
                            <div className='p-8'>
                                <span className='text-[0.9rem] md:text-2xl font-bold text-green-400'>{obj.title}</span>
                                <h1 className='text-[0.6rem] md:text-xl  text-slate-600'>{obj.description}</h1>
                                <img src={plus} className='h-[2rem] w-[2rem]' />
                            </div>
                        </div>)
                        
                    )}
                    

                </div>
                <div className='w-[40%] md:w-[27%]  mt-5 mr-2 p-2'>
                    <div className='border h-[13rem] w-[96%] flex flex-col items-center space-y-5'>
                        <span className='text-2xl font-bold text-orange-400'>Learn and Grow!</span>
                        <input className='border-2 rounded-[1rem] border-blue-400' placeholder='youremail@gmail.com'/>
                        <div className='h-[2rem] w-[10rem] rounded-xl bg-slate-600 text-white font-bold text-xl text-center'>Subscribe</div>
                    </div>
                    <div className='border h-[30rem] w-[96%] flex flex-col items-center space-y-5 mt-5'>
                        <h1 className='text-3xl text-orange-400 font-bold'>Latest Post</h1>
                        
                        {latest.map((obj)=>( 
                            <div className='h-[20%] w-[90%] flex space-x-1'>
                                <div className='h-[80%] w-[30%] '>
                                    <img className='h-[100%] w-[100%] ' src={obj.urlToImage}/>
                                </div>
                                <div className='h-[80%] w-[30%]'> <span>{obj.title.slice(0,20)}</span></div>
                               
                                <h1 className='h-[80%] w-[30%]'>{obj.publishedAt.slice(0,10)}</h1>
                            </div>
                        ))} 
                       
                    </div>
                </div>
            </div>
            </>:
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="rounded-full bg-slate-200 h-10 w-10"></div>
              <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
            
            }
        </div>
    )
}

export default Blog