'use client'
import ProductCard from "./CampgroundCard"
import Link from "next/link"
import getCamps from "@/libs/getCamps"
import { FormEvent, FormEventHandler, useState } from "react"
import CampRe from "./CampRe"
import RefreshAction from "../../RefreshActionCamps"

export default  function CampCatalog({campJson}:{campJson:CampgroundJson}) {
  // {campJson}:{campJson:CampgroundJson}
    // const camps = await getCamps()

    const campJsonReady = campJson
    // const campJsonReady = await camps

    // class test {
    //   public tel:string;

    //   constructor(tel:string) {
    //     this.tel = tel
    //   }


    // }

    var madi = {
      address:'',
      activity:'',
    }

    

    const [filter,setFilter] = useState(false)
    const [filterValue,setFilterValue] = useState('')
    const [object,setObject] = useState(madi)
    const [search,setSearch] = useState<string|null>('')
    const [showButtons, setShowButtons] = useState<boolean>(false);

    const handleButtonClick = () => {
      setShowButtons(!showButtons);
    };

    // const addSearch = async (addReviewData:FormData) => {
    //   "use server"
    //    const searchText = addReviewData.get("searchText")
    //   if (searchText ) {
    //      console.log(searchText)
    //   }
    //   }
    // }
    
   

    function handleSubmit(e:any) {
      e.preventDefault()
      const formData = new FormData(e.target)
       const searchText = formData.get('searchText')
      //  alert(searchText)
       
       if (searchText) {
        setFilter(true);
        setFilterValue(searchText.toString())
       }
      
     } 



    

   
    
    return (
       <>

            <div className='w-1/2 ml-0 justify-center '>
            <form onSubmit={handleSubmit} className='w-full items-center flex flex-row my-5 justify-center mx-[340px]'>
              <input type='text' required id="searchText" name="searchText" placeholder='Find campground name here' className="bg-white text-center rounded-xl w-[500px] h-[50px] p-2 text-gray-700 focus:outline-none focus:white" ></input>
              {/* <button type="submit" className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" onClick={(e)=>{var form = new FormData; var text = form.get('searchText'); alert(text)  }}>SEARCH</button> */}
              <button type='submit' className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >SEARCH</button>
            </form>
          </div>
         

         { 
        filter? <CampRe value={filterValue} object={object}/> : 
        <div>
          <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{campJsonReady.count} </div>
          Campgrounds  Available
          </div>
          <div style={{margin:"20Spx",display:"flex",flexDirection:"row",flexWrap:"wrap"
       ,justifyContent:"space-around" , alignContent:"space-around"}}>
        {
          campJsonReady.data.map((campItem:CampgroundItem)=> 
             <Link href={`campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:4 lg:p-8" >
            <ProductCard carName={campItem.name} imgSrc={campItem.picture} address={campItem.address} tel={campItem.tel} campid={campItem._id}/>
             </Link>
          )
        }
      </div>

        </div>
        
      
       }
        {/* <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{campJsonReady.count} </div>
          Campgrounds  Available
        </div>
        <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap"
       ,justifyContent:"space-around" , alignContent:"space-around"}}>
        {
          campJsonReady.data.map((campItem:CampgroundItem)=> 
             <Link href={`campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:4 lg:p-8" >
            <ProductCard carName={campItem.name} imgSrc={campItem.picture} address={campItem.address} tel={campItem.tel} campid={campItem._id}/>
             </Link>
          )
        }
      </div> */}

      {/* <button type="submit" onClick={(e)=>setFilter(!filter)} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >reverse</button> */}

      <button type="submit" onClick={(e)=>{setFilter(false);}} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >All</button>
       
      <button type="submit" onClick={(e)=>{setFilter(true); setFilterValue('Rocks National Lakeshore')}} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >Rock</button>

      <button type="submit" onClick={(e)=>{setFilter(true); setFilterValue('Grand Canyon')}} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >Grand</button>
      
      <div>
      <div onClick={handleButtonClick} className="bg-inherit hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-4 py-1 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-4">
        {showButtons ? 'Activity' : 'Activity'}
      </div>
      {showButtons && (
        <div className="flex flex-col bg-black">

        <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value};  setObject(newobject);} else {let newobject = { address:object.address, activity:''};  setObject(newobject);}}} value='Hiking' className="bg-black text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" name="kuy"></input>

        <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value};  setObject(newobject);} else {let newobject = { address:object.address, activity:''};  setObject(newobject);}}} value='Fishing' className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" name="kuy"></input>
  
        <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value};  setObject(newobject);} else {let newobject = { address:object.address, activity:''};  setObject(newobject);}}} value='Biking' className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" name="kuy"></input>

        </div>
      )}
      </div>

      {/* <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity};  setObject(newobject)}; }} value='Arizonia, United States' className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" name="kuy2"></input>

      <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity};  setObject(newobject)}; }} value='New Zealand' className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" name="kuy2"></input>
         
      <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity};  setObject(newobject)}; }} value='Nevada' className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" name="kuy2"></input> */}

        {
          object.address
        }

         {
          object.activity
        }

        
       
      
       </>

    )
}