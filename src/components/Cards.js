import React from 'react'
import {RiDoubleQuotesL,RiDoubleQuotesR} from 'react-icons/ri';
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa';

const Cards = ({review,changePrevIndex,changeNextIndex}) => {
    


    const handlePrevClick=()=>{
        changePrevIndex();
    }

    const handleNextClick=()=>{
        changeNextIndex();
    }
  

  return (
    <div className='relative p-8'>
        <div className='absolute top-[-30px] z-10'>
            <img 
               className='h-20 rounded-full'
               src={review.image}
               alt="castomer_image"
               title={review.name}
            />
               
        </div>
        <div className='h-20 bg-purple-500 w-20 rounded-full absolute top-[-30px] left-[25px]'></div>
        <div className='mt-2 flex flex-col items-center'>
           <h1 className="font-medium text-xl">{review.name}</h1>
           <h1 className='text-gray-400'>{review.job}</h1>
        </div>

        <div className='flex flex-col items-center mt-4'>
            <RiDoubleQuotesL
                className='text-purple-400'
            />
            <p className='flex text-center py-2'>{review.text}</p>
            <RiDoubleQuotesR
                className='text-purple-400'
            />
        </div>
       <div className='flex justify-center my-2'>
         <FaAngleLeft 
            fontSize={"30px"}
            className='text-purple-400 cursor-pointer'
            onClick={handlePrevClick}
         />
         <FaAngleRight
            fontSize={"30px"}
            className='text-purple-400 cursor-pointer'
            onClick={handleNextClick}
         />
       </div>
      
       <div className='flex items-centr'>
          <button className='p-2 bg-purple-400 rounded-sm text-white m-auto cursor-pointer'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Cards