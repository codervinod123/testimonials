import React,{useState} from 'react'
import Cards from './Cards'

const Testimonials = ({reviews}) => {

    const [index, setIndex] = useState(0);
    
    const changePrevIndex=()=>{
         if(index===0){
            setIndex(reviews.length-1);
         }else{
            setIndex(index-1)
         }
    }

    const changeNextIndex=()=>{
        if(index===reviews.length-1){
            setIndex(0);
         }else{
            setIndex(index+1)
         }
    }
    
  return (
    <div>
        <Cards review={reviews[index]} changePrevIndex={changePrevIndex} changeNextIndex={changeNextIndex}/>
    </div>

  )
}

export default Testimonials