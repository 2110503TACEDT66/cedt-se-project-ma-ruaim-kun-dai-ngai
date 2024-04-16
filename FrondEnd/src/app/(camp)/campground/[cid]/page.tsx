import Image from 'next/image'
import getCamp from '@/libs/getCamp'
import Link from 'next/link'
import getReviews from '@/libs/getReviews'
import Reviewlist from '@/components/reviewlist'
import addReview from '@/libs/addReview'
import { revalidateTag } from "next/cache";

export default async function CampDetailPage({params} : {params:{cid:string}} ) {

     const util = require('util')
    
     const campDetail = await getCamp(params.cid)
     const reviews = await getReviews(params.cid)
    //Mock Data for Demonstration Only
    util.inspect(reviews, {showHidden: false, depth: null, colors: true})
    console.log(reviews)
 
  
    const addUser = async (addReviewData:FormData) => {
      "use server"
       const reviewText = addReviewData.get("reviewText")
      if (reviewText) {
        addReview(reviewText.toString(),params.cid)
        // console.log('revalidate na')
        await new Promise( (resolve)=>setTimeout(resolve,1000) )
        revalidateTag('reviews')
      }
    }

    return (
      <main className="text-center">
         

         <div className="flex flex-row h-[500px] w-full bg-black">
            <div className='relative w-[50%] h-[500px]'>
            <Image src = {campDetail.data.picture}
              alt='Campground Image' 
               width ={0} height={0} sizes="100vw"
               className=" w-full relative  h-full bg-black opacity-[60%]"/>
               <div className='absolute text-white z-30 top-[100px] left-[40px] text-5xl font-bold'>CAMPING WITH</div>
               <div className='absolute text-white z-30 top-[150px] left-[40px] text-5xl font-bold'>THE BEST SERVICE</div>
               </div>

             <div >

              <div className=' mx-[100px] my-7 text-left text-white font-bold text-5xl uppercase'> {campDetail.data.name}</div>
              

             <Link href={`/reservations?id=${params.cid}&model=${campDetail.data.name}`}>
             <button className="rounded-xl font-bold bg-orange-500 text-white px-5 py-4 hover:bg-indigo-600 hover:text-white uppercase my-[200px] ">SELECT {campDetail.data.name}</button>
             </Link>
             </div>

             
         </div>

         <div className='bg-black w-full h-[30px]'></div>
        

         

        <form action={addUser}>
       
        
             <div className='flex items-center w-1/2 my-2 mx-[500px]'>
                 {/* <label className="w-auto block text-gray-700 pr-4" htmlFor='reviewText'>
                  comment</label> */}
                  <input type='text' required id="reviewText" name="reviewText" placeholder='Type your review here' className="bg-white text-center border border-2 border-gray-200 rounded-xl w-[315px] p-2 text-gray-700  hover:ring-transparent"></input>
             </div>

             <button type="submit" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold my-5 mx-[100px]" >comment</button>
             
        </form>


         
         {
            reviews.data.map((reviewItems:ReviewItem)=>(
                     
                <Reviewlist reviewItems={reviewItems}/>
                
              ))
        }

        
      </main>


    )
}


// export async function generateStaticParams() {
//     return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
// }