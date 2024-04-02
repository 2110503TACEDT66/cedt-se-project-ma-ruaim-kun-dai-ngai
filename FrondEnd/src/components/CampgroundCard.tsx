
'use client'
import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material';
import { useState } from 'react'

export default function CampgroundCard( {carName,address,tel,imgSrc,onCompare} : {carName:string,address:string,tel:string,imgSrc:string,onCompare?:Function}) {
   
  const [value,setValue] = useState<number | null>(5)

    return (
      <InteractiveCard contentName={carName}>

         
         
          <div className={'w-[300px] h-[60%] relative rounded-t-lg'}>
             <Image src={imgSrc} alt='Campground Picture' fill={true} className='object-cover rounded-t-lg relative h-full'/>
             
          </div>
          <div className='w-full  h-[8%] text-center font-bold text-xl' >{carName}</div>
          <Rating value={value} onChange={(event,newvalue)=>setValue(newvalue)}  onClick={(e)=>{e.stopPropagation();}}/>
          <div className='w-full  h-[8%] text-center text-xs' >Address : {address}</div>
          <div className='w-full  h-[8%] text-center font-semi-bold text-xs' >Contact us : {tel}</div>

          {
            onCompare?
          <button className='bg-sky-600 h-[10%] mx-3 px-1 py-1 rounded-md text-white hover:bg-indigo-600'
           onClick={(e)=>{e.stopPropagation(); e.preventDefault(); onCompare(carName)}}> Compare</button>:''
          }

        


        
        </InteractiveCard>
    );
}