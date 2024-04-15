// import Image from 'next/image'
// import getCamp from '@/libs/getCamp'
// import getReviews from '@/libs/getReviews'
// import Link from 'next/link'
// import ReviewList from '@/components/reviewlist'
// // import reviewCart from '@/components/reviewCart'
// export default async function CampDetailPage({params} : {params:{cid:string}} ) {
//      const util = require('util')
//      const campDetail = await getCamp(params.cid)
//      const reviews = await getReviews()

//      console.log(reviews)

//     //  util.inspect(reviews, {showHidden: false, depth: null, colors: true})
  
//     return (
//       <main className="text-center">
         

//          <div className="flex flex-row h-[500px] w-full bg-black">
//             <div className='relative w-[50%] h-[500px]'>
//             <Image src = {campDetail.data.picture}
//               alt='Campground Image' 
//                width ={0} height={0} sizes="100vw"
//                className=" w-full relative  h-full bg-black opacity-[60%]"/>
//                <div className='absolute text-white z-30 top-[100px] left-[40px] text-5xl font-bold'>CAMPING WITH</div>
//                <div className='absolute text-white z-30 top-[150px] left-[40px] text-5xl font-bold'>THE BEST SERVICE</div>
//                </div>

//              <div >

//               <div className=' mx-[100px] my-7 text-left text-white font-bold text-5xl uppercase'> {campDetail.data.name}</div>
              

//              <Link href={`/reservations?id=${params.cid}&model=${campDetail.data.name}`}>
//              <button className="rounded-xl font-bold bg-orange-500 text-white px-5 py-4 hover:bg-indigo-600 hover:text-white uppercase my-[200px] ">SELECT {campDetail.data.name}</button>
//              </Link>
//              </div>

             
//          </div>

//          <div className='bg-black w-full h-[30px]'></div>

//           <div className='bg-black w-full h-fit py-4 text-white flex flex-col'>
//             test1
//             {
//             reviews.data.map((reviewItem:ReviewItem)=> (
            
//               <ReviewList reviewItems={reviewItem}/>
            
//             ))
//           }
//           test2
//           </div>

//           {/* <reviewCart/> */}
          
//           <div className='bg-black w-full h-[30px]'></div>

//       </main>


//     )
// }

// // export async function generateStaticParams() {
// //     return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
// // }