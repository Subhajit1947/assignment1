import React from 'react'

function Contact() {
    return (
        <div className='md:relative m-5'>
            <div className='h-[10rem] bg-[url(https://improvedigitally.com/wp-content/uploads/2022/09/about-us-header.png)] bg-cover'>
                Contact
            </div>
            <div className='h-[30rem] pt-[5rem]'>
                <div className='h-[90%] w-[90%] lg:w-[40%] text-center  space-y-5'>
                    <span className='text-4xl text-orange-400 font-bold'>We can't wait to hear from you!</span>
                    <p>At Improve Digitally, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!!</p>
                    <span className='text-4xl text-orange-400 font-bold'>Contact</span>
                    <h1>Jamia Nagar, Okhla, New Delhi, Delhi 110025</h1>
                    <h1>
                        +91 98712 32887</h1>
                    <h1>
                        info@improvedigitally.com</h1>
                </div>

            </div>
            <div className='h-[40rem] lg:h-[30rem] w-[27rem] md:w-[35rem] lg:[40rem] border-2 bg-white rounded-xl  lg:absolute lg:top-[6rem] lg:right-[3rem] flex flex-col items-center space-y-[2rem]'>
                <div className='text-center text-orange-400 font-bold text-3xl pt-[1rem]'>Get in Touch</div>
                <div className='p-5 flex flex-wrap space-x-7 space-y-[4rem]'>

                    <input className='border-b-2 border-blue-300 mt-8 ml-2' placeholder='your name *' />
                    <input className='border-b-2 border-blue-300' placeholder='youremail#gmail.com *' />
                    <input className='border-b-2 border-blue-300' placeholder='mob *' />
                    <input className='border-b-2 border-blue-300' placeholder='Location *' />
                    <input className='border-b-2 border-blue-300' placeholder='Subject *' />

                </div>
                <div className='h-[2rem] w-[13rem] bg-slate-600 text-center text-2xl text-white rounded-xl font-bold'>Submit</div>
            </div>
        </div>
    )
}

export default Contact