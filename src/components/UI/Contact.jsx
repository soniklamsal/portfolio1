import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className='pb-16'>
        <div className="container">
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-4 ml-4'>Get in touch</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe title='google-maps'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.924591126615!2d85.32951859487092!3d27.694703218574848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1726739701947!5m2!1sen!2snp" 
                    className='border-0 w-full h-full allow-FullScreen="" leading="Lazy "referrerPolicy="no-referrer-when-downgrade'>
                </iframe>
                </div>

                <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                    <form className="w-full">
                        <div className='mb-5'>
                            <input type="text" placeholder="Enter your name" name="" id="" className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <div className='mb-5'>
                            <input type="email" placeholder="Enter your Email" name="" id="" className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <div className='mb-5'>
                            <textarea type="text" rows={3} placeholder="Write your message" name="" id="" className="w-full p-3 focus:outline-none rounded-[5px]" />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headerColor text-center ease-linear duration-150'>Send message</button>
                    </form>
                    
                </div>

            </div>
        </div>
    </section>
  )
}
