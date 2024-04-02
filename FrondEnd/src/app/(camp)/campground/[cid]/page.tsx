import Image from 'next/image'
import getCamp from '@/libs/getCamp'
import Link from 'next/link'
export default async function CarDetailPage({params} : {params:{cid:string}} ) {
    
     const campDetail = await getCamp(params.cid)
    //Mock Data for Demonstration Only

    // const mockCarRepo = new Map()
    // mockCarRepo.set("001" , {name:"Honda Civic", image: "/img/civic.jpg"} )
    // mockCarRepo.set("002" , {name:"Honda Accord", image: "/img/accord.jpg"} )
    // mockCarRepo.set("003" , {name:"Toyota Fortuner", image: "/img/fortuner.jpg"} )
    // mockCarRepo.set("004" , {name:"Honda Model 3", image: "/img/tesla.jpg"} )
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
      </main>


    )
}

// export async function generateStaticParams() {
//     return [{cid:"001"},{cid:"002"},{cid:"003"},{cid:"004"}]
// }