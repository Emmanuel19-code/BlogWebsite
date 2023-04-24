import Image from 'next/image'
import Link from 'next/link'
import OtherPost from '../components/OtherPost'

const ReadMore = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='flex'>
             <div className='m-2 w-96'>
                <Image
                src="/assets/Image1.jpg"
                width={400}
                height={200}
                />
                <div className='mt-2 flex items-center'>
                  {/*Profile picture*/}
                    <Image
                    src="/assets/Image8.jpg"
                    width={50}
                    height={50}
                    className='w-14 h-14 rounded-full'
                    />
                    <div className='ml-2'>
                        <p className='font-bold'>John Doe</p>
                        <p className="text-sm font-semibold">
                          Posted an Hour ago
                       </p>
                    </div>
                </div>
                <h2 className='mt-3 font-bold text-2xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </h2>
                <p className='mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Accusantium reprehenderit dolorem doloribus corrupti voluptate ullam, dolor doloremque reiciendis! 
                  Rerum quidem esse a reiciendis at facere quis sed repellendus inventore iste.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Dicta nostrum blanditiis perspiciatis ad laudantium doloribus dolorum necessitatibus quas. 
                  Id nemo sequi ex provident consequuntur amet, quo laudantium debitis voluptates odit!
                </p>
            </div>
            <OtherPost/>
        </div>
     </div>
  )
}

export default ReadMore