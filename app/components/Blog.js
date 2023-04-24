import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = ({title,content}) => {
  return (
    <div className=''>
        <div className="md:flex   m-3 p-4">
                <div className='m-3'>
                   <h2 className='font-bold text-3xl m-1'>Colorfull Modernizes Herman Miller's</h2>
                   <p className='md:w-96 m-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum reiciendis unde assumenda. 
                    Porro, sint neque tempore in dicta eveniet quaerat praesentium inventore magni at delectus illo iusto eos voluptas a?
                   </p>
                   <p 
                   className='border text-white bg-teal-600 text-center w-24 p-1 m-2 cursor-pointer'
                   >
                     <Link href="/readMore">Read More</Link>
                   </p>
                </div>
                <Image
                src="/assets/Image1.jpg"
                width={400}
                height={400}
                className="m-2"
                />
        </div>
    </div>
  )
}

export default Blog