// import { CampgroundJson, ReservationItem } from "../../interfaces"

import ProductCard from "./CampgroundCard"
import Link from "next/link"
export default async function CampCatalog({campJson}:{campJson:CampgroundJson}) {
    const campJsonReady = await campJson
    
    return (
       <>
        <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{campJsonReady.count} </div>
          Campgrounds  Available
        </div>
        <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap"
       ,justifyContent:"space-around" , alignContent:"space-around"}}>
        {/* <div className="flex flex-col m-20 content-center" > */}
        {
          campJsonReady.data.map((campItem:CampgroundItem)=> 
             <Link href={`campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:4 lg:p-8" >
            <ProductCard carName={campItem.name} imgSrc={campItem.picture} address={campItem.address} tel={campItem.tel}/>
             </Link>
          )
        }
        
      {/* </div> */}
      </div>
       </>

    )
}