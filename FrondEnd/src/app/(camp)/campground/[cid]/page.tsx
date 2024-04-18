import Image from 'next/image'
import getCamp from '@/libs/getCamp'
import Link from 'next/link'
import getReviews from '@/libs/getReviews'
import Reviewlist from '@/components/reviewlist'
import addReview from '@/libs/addReview'
import { revalidateTag } from "next/cache";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'
import getBookings from '@/libs/getBookings'
import Pagerating from '@/components/pagerating'

export default async function CampDetailPage({params} : {params:{cid:string}} ) {

     const util = require('util')
    
     const campDetail = await getCamp(params.cid)
     const reviews = await getReviews(params.cid)
     

    
    //Mock Data for Demonstration Only
    util.inspect(reviews, {showHidden: false, depth: null, colors: true})
    // console.log(reviews)

    var checkCanReview = false
    const session = await getServerSession(authOptions)
    const campBookings = await getBookings(session?.user.token)
    // console.log(campBookings);
    if (campBookings != null && campBookings != undefined) {
      for (let i = 0 ; i < campBookings.count; i++) {
        if (campBookings.data[i].campground._id == params.cid) {
          checkCanReview = true
        }
        
      }
    }

    if (checkCanReview) {
      console.log("can review")
      console.log(session?.user.role)
    } else {
      console.log("cannot review")
      console.log(session?.user.role)
    }
  
    const addUser = async (addReviewData:FormData) => {
      "use server"
       const reviewText = addReviewData.get("reviewText")
      if (reviewText && checkCanReview) {
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

              <div className=' mx-[150px] my-20 text-left text-white font-bold text-5xl uppercase'> {campDetail.data.name}</div>
              

             <Link href={`/reservations?id=${params.cid}&model=${campDetail.data.name}`}>
             <button className="rounded-xl font-bold bg-orange-500 text-white px-5 py-4 hover:bg-indigo-600 hover:text-white uppercase my-[50px] ">SELECT {campDetail.data.name}</button>
             </Link>
             </div>

             
         </div>        

        <form action={addUser} className='w-full items-center flex flex-col my-5'>
          <input type='text' required id="reviewText" name="reviewText" placeholder='Type your review here' className="bg-white text-center border border-2 border-gray-200 rounded-xl w-[315px] p-2 text-gray-700  hover:ring-transparent"></input>
          <button type="submit" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold my-5 mx-[100px] hover:bg-cyan-600 hover:transparent" >COMMENT</button>
        </form>

        <Pagerating checkCanRate={checkCanReview} paa={params.cid.toString()}/>

         
         {
            reviews.data.map((reviewItems:ReviewItem)=>(
                     
                <Reviewlist reviewItems={reviewItems} token={session?.user.token} checkCanReply={checkCanReview} role={session?.user.role}/>
                
              ))
        }

        
      </main>


    )
}


// export async function generateStaticParams() {
//     return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
// }