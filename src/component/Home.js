import React,{useEffect,useState} from 'react'

import bg1 from './bg1.png'
import rpic3 from './rpic3.webp'
import rpic4 from './rpic4.webp'
import plus from './plus.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bdata from './blogdata.json'
import bisnass from './bisness.json'
import survice from './service.json'
import case1 from './case.json'
import digital from './digital.json'

function Home() {
    const [data, setdata] = useState([])
    const randomIndex = Math.floor(Math.random() * data.length);
    const latest=[bdata[randomIndex],bdata[randomIndex+1],bdata[randomIndex+2]]
    // data.slice(0,3)
    console.log(latest)
    
    useEffect(() => {
        setdata([...data, ...bdata])
    }, [])
    
    

    return (
        <div className={` w-[100vw] bg-[url('https://improvedigitally.com/wp-content/uploads/2019/03/background.png')] bg-cover m-5`}>
            <div className='mt-10 ml-5 mb-0 mr-5 flex h-[33rem]  justify-center '>
                <div className='w-[50%] pl-10'>
                    <span className='font-bold text-xl'>Grow Digitally</span>
                    <div>
                        <span className='text-2xl md:text-6xl font-bold flex flex-col space-y-3 mt-[5rem]'><span>Boosts your</span><span className='text-orange-600'>website traffic!</span>  </span>
                        <div className='mt-[2rem] md:mt-[5rem] space-x-3 '>
                            <input placeholder='Mail Address*' className={`border-b border-blue-300 bg-[url(${bg1})] bg-cover`} />
                            <input placeholder='Your site.com*' className={`border-b border-blue-300 bg-[url(${bg1})] bg-cover`} />
                        </div >
                        <div className='h-[3rem] w-[10rem] bg-slate-800 text-white rounded-[2rem] flex justify-center items-center text-xl md:text-[1.4rem] font-bold mt-8'>Check Now</div>
                    </div>
                </div >

                <div className='w-[50%] mt-[5rem]'>
                    <img src={rpic3} className='w-[70%] h-[60vh] animate-bounce' />
                </div>
            </div>
            <div className='md:ml-5 md:mr-5 h-[40rem] w-[100%] flex  justify-center '>
                <div className='w-[20%] md:w-[40%] h-[20rem] md:h-[30rem] mt-10'>
                    <img src={rpic4} className={`h-[100%] w-[100%]  animate-bounce`} />
                </div>
                <div className='w-[50%] flex flex-col items-center '>
                    <span className='text-xl font-bold text-orange-600'>Our Business Commitment</span>
                    <span className='text-2xl md:text-4xl font-bold'>Grow your <span className='text-orange-600'>business</span> digitally</span>
                    <div className='flex md:justify-center flex-wrap w-[100%]  lg:m-1 lg:space-x-10 lg:space-y-3 p-0 lg:p-3'>
                        {bisnass.map((obj)=>(
                            <div className='lg:h-[10rem] w-[5rem] lg:w-[8rem] mt-1 lg:mt-3 p-1'><h1 className='text-xl lg:text-3xl font-bold text-green-600'>{obj.t}</h1><span className='lg:text-xl'>{obj.title}</span></div>
                        ))}
                    </div>
                    <div className='h-[2rem] lg:h-[3rem] w-[12rem]lg:w-[15rem] bg-slate-800 text-white rounded-[2rem] flex justify-center items-center text-[0.7rem] lg:text-[1.2rem] font-bold mt-8'>Get Free Consultant</div>
                </div>
            </div>
            <div className='flex justify-between ml-10 mr-5'>
                <div className='pl-5'>
                    <span className='text-xl font-bold text-orange-600'>Organic Search Growth</span>
                    <h1 className='text-2xl md:text-4xl font-bold text-slate-600 '>Enhance your<span className='text-orange-600'>Organic</span>  Search Visibility!</h1>
                    <div className='h-[2rem] md:h-[3rem] w-[10rem] md:w-[15rem] bg-slate-800 text-white rounded-[2rem] flex justify-center items-center text-[0.8] md:text-[1.2rem] font-bold mt-8'>Get Free Consultant</div>
                </div>
                <div className='w-[50%]'>
                    <img src='	https://improvedigitally.com/wp-content/uploads/2021/10/Enhance-your-Organic-Search.webp' className='h-[20rem] md:h-[30rem] w-[50%] md:w-[80%] animate-bounce' />
                </div>

            </div>
            <div>
                <div className='text-center text-2xl md:text-4xl font-bold text-slate-600'>
                    <h1>Increase organic <span className='text-orange-600'>website traffic</span></h1>
                    <h1>and enhance your business web presence</h1>
                </div>
                <div className='m-10 flex flex-wrap justify-center md:space-x-10  space-y-5'>
                    {survice.map((obj)=>(
                        <div className='h-[15rem] md:h-[25rem] w-[10] md:w-[20rem] mt-5 space-y-1 md:space-y-5 text-center border-2 p-1 md:p-5'>
                            <div>
                                <img src={obj.url} />
                            </div>
                            <span className='text-xl md:text-3xl font-bold'>{obj.head}</span>
                            <p>{obj.des}</p>
                        </div>
                    ))}
                    

                </div>
            </div>
            <div className='h-[40rem] w-[100vw] bg-[url(https://improvedigitally.com/wp-content/uploads/2019/03/case_study_parallax_bg.png)] bg-cover pt-3 text-center lg:space-y-8'>
                <span className='text-xl font-bold text-orange-600'>Know more about our</span>
                <h1 className='text-3xl lg:text-4xl font-bold text-white'>Latest case studies</h1>
                <div className='m-5 h-[80%] md:pt-5 flex flex-wrap justify-center'>
                    {case1.map((obj)=>(
                        <div className='h-[30%] md:h-[90%] md:w-[30%] bg-white m-1 md:m-1 border-2 rounded-xl '>
                            <div className='h-[50%] w-[95%]  md:m-2'>
                                <img src={obj.url} className='h-[95%] w-[99%] rounded-xl' />
                            </div>
                            <div className='p-1 md:p-8'>
                                <span className='text-xl md:text-2xl font-bold text-green-400'>{obj.head}</span>
                                <h1 className='text-[0.6rem] md:text-xl font-bold text-slate-600'>{obj.des}</h1>
                                <img src={plus} className='h-[1rem] md:h-[2rem] w-[1rem] md:w-[2rem]' />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='ml-5 mr-5 h-[40rem] w-[100%] flex  justify-between '>

                <div className='w-[50%]  m-5 space-y-2  flex flex-col justify-between'>
                    <span className='text-xl font-bold text-orange-600'>Boosting</span>
                    <h1 className='text-2xl md:text-4xl font-bold'>

                        Outstanding
                        Digital Experience</h1>
                    <div className='flex justify-center flex-wrap w-[100%]  m-1 '>
                        {digital.map((obj)=>(
                            <div className='h-[6rem] lg:h-[10rem] p-1 w-[20rem] lg:w-[16rem]  m-1'><img src={obj.uri} /><span className='text-[0.5rem] md:text-[0.8rem] lg:text-[1rem]'>{obj.des}</span></div>
                        ))}
                    </div>
                    <div className='h-[2rem] md:h-[3rem] w-[10rem] md:w-[15rem] bg-slate-800 text-white rounded-[2rem] flex justify-center items-center text-[0.7] md:text-[1.2rem] font-bold mt-[2rem] '>Get Free Consultant</div>
                </div>
                <div className='w-[40%] h-[95%]  flex items-center '>
                    <div className='w-[90%] h-[40%]  m-1'>
                        <img className='w-[98%] h-[98%] animate-bounce ' src='https://improvedigitally.com/wp-content/uploads/2021/10/Outstanding-Digital-Experience.webp' />
                    </div>
                </div>
            </div>
            <div className='h-[40rem] w-[100vw]  pt-3 text-center space-y-8'>
                <span className='text-xl font-bold text-orange-600'>News & Blog</span>
                <h1 className='text-4xl font-bold text-slate-600'>Our latest media</h1>
                <div className='m-5 h-[80%] pt-5 flex'>
                    {latest.map((obj)=>(
                        <div className='h-[90%] w-[30%] bg-white m-5 border-2 rounded-xl '>
                            <div className='h-[40%] md:h-[50%] w-[95%]  m-2'>
                                <img src={obj.urlToImage} className='h-[95%] w-[99%] rounded-xl' />
                            </div>
                            <div className='p-0 md:p-8'>
                                <span className='text-[o.7rem] lg:text-2xl font-bold text-green-400'>{obj.title}</span>
                                
                            
                            </div>
                        </div>
                    ))}
                    
                </div>

            </div>
            <div className='h-[20rem] w-[100%] flex flex-col items-center space-y-8 mt-5'>
                <span className='text-xl font-bold text-orange-600'>Client’s love</span>
                <h1 className='text-4xl font-bold text-slate-600'>Love from Clients</h1>
                <div className='h-[90%] w-[50%] md:w-[30%] '>
                <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
                    <div className='space-y-3'>
                        <h1 className='text-xl font -bold'>Improve Digitally has a very robust set of expertise in digital marketing, and They’ve added a whole new dimension of growth to our business.</h1>

                        <span className='text-2xl text-orange-600 font-bold'>Thomas R Hocking</span>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font -bold'>Honestly, I don't really believe in online marketing but after 6 months, I changed my mind.</h1>

                        <span className='text-4xl text-orange-600 font-bold'>Eric Naor</span>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font -bold'>Their team accomplished their goals exactly on time, and I highly recommend them.</h1>

                        <span className='text-2xl text-orange-600 font-bold'>Rhett Lewis</span>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font -bold'>I was amazed at how quickly they understood our industry and lay out a specific plan for the real estate industry</h1>

                        <span className='text-2xl text-orange-600 font-bold'>Amita</span>
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-xl font -bold'>Improve Digitally provides reliable digital marketing services. We are happy to work with them and look forward to taking our online presence to the next level.</h1>

                        <span className='text-2xl text-orange-600 font-bold'>Allen</span>
                    </div>
                    

                </Carousel>
                </div>
            </div>
            <div className='h-[20rem] w-[100%] flex flex-col items-center space-y-8 mt-5'>
                <span className='text-xl font-bold text-orange-600'>Have a Look</span>
                <h1 className='text-2xl md:text-4xl font-bold text-slate-600'>We’re working with</h1>
                <div className='h-[90%] w-[70%] '>
                <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false}>
                    <div className='h-[100%] w-[30%]'>
                        <img src='https://improvedigitally.com/wp-content/uploads/2022/04/History-Of-Soccer.png'/>
                    </div>
                    <div className='h-[100%] w-[30%]'>
                        <img src='	https://improvedigitally.com/wp-content/uploads/2022/04/Ecom-Fashion.png'/>
                    </div>
                    <div className='h-[100%] w-[30%]'>
                        <img src='https://improvedigitally.com/wp-content/uploads/2022/04/History-Of-Soccer.png'/>
                    </div>

                </Carousel>
                </div>
            </div>
            

        </div>

    )
}

export default Home