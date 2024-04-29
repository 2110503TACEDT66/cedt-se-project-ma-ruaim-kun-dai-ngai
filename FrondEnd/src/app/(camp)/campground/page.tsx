// import { CarPanel } from "@/components/CarPanel";
import getCamps from "@/libs/getCamps";
import CarCatalog from "@/components/CampCatalog";
import TopRatesCatalog from "@/components/TopRatesCatalog";
import { Suspense } from "react";
import Image from "next/image";
import { LinearProgress } from "@mui/material";
import { getTodayDate } from "@mui/x-date-pickers/internals";
import DateBar from "@/components/DateBar";
import getReviews from "@/libs/getReviews";
import { revalidateTag } from "next/cache";
import getCampsSorted from "@/libs/getCampSorted";
export default async function Campground() {
        revalidateTag("camps")
    const camps = await getCamps(null,null)
    const campsSorted = await getCampsSorted()
    const today = new Date()
    const month = today.getMonth()
   return (
    <main className="text-center">
        <div className="flex flex-row">
         <div className="bg-orange-100 w-[55%] h-[300px] px-10 py-10">
            <div className="w-[80%] bg-white h-full rounded-xl mx-20 px-4 py-4">
                <div className="text-xl font-bold my-6">Select your favorite campgrounds</div>
                <div className="text-sm"> this page shows you a available campgrounds which you can choose for booking and start your jorney with us</div>
            </div>
         </div>
         
         <div className="w-[45%] h-[300px] relative">
         <Image src ='https://drive.google.com/uc?id=1Avl4nP75JWxe4A5AjczvushfV51pKXAH' alt='cover' width={0} height={0} sizes="100vw"  className='relative w-full h-full opacity-[80%]'/>
         <div className="absolute bottom-[180px] left-[40px] z-20 text-5xl font-bold text-white">DISCOVER THE</div>
         <div className="absolute bottom-[110px] left-[40px] z-20 text-5xl text-white font-bold flex flex-row">
            <div >WORLD'S </div>
            <div className="mx-3 text-orange-300">BEAUTY</div>
         </div>
         </div>

         </div>
         <DateBar></DateBar>
        <Suspense fallback={<p>Loading....<LinearProgress></LinearProgress></p>}>
        <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{camps.count} </div>
          Campgrounds  Available
          </div>
        <CarCatalog campJson={camps} />
        <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{campsSorted.count} </div>
          Top-rated campgrounds
          </div>
        <TopRatesCatalog campJson={campsSorted} />
        </Suspense>

        

        {/* <hr className="my-10" />
        <h1 className='text-x font-md '>Try Client-side Car Panel</h1>
        <CarPanel/> */}
    </main> 

   );
}