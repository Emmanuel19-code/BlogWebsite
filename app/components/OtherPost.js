import Image from 'next/image'
import Link from 'next/link'

const OtherPost = ({}) => {
  return (
    <div className='m-2'>
                <h4 className='font-bold text-lg'>
                    Other Posts You may like
                 </h4>
                 <div className='mt-3'>
                    <Image
                    src="/assets/Image2.png"
                    width={300}
                    height={100}
                    />
                    <h3 className='text-lg font-bold mt-2'>
                        Lorem Ipsum World
                     </h3>
                     <p 
                   className='border border-teal-300 text-teal-500 text-center w-24 p-1 mt-2 cursor-pointer'
                   >
                     <Link href="/readMore">Read More</Link>
                   </p>
                 </div>
             </div>
  )
}

export default OtherPost