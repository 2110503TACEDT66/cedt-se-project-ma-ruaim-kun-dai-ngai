// 'use client'

import Replylist from "./replylist"
import getReplys from "@/libs/getReplys"
import reviewCart from "./replyCart"
import ReplyCart from "./replyCart"
export default async function reviewlist({reviewItems} : {reviewItems:ReviewItem}) {
   const util = require('util')
   const replys = await getReplys(reviewItems._id)
    //เเตก array
   util.inspect(replys, {showHidden: false, depth: null, colors: true})
   console.log(replys)

   

    return (
       
        


        <div className="bg-white my-3">
            <div> {reviewItems.user.name}</div>
            <div> {reviewItems.content}</div>

           <div className="bg-slate-400"> 
           {
            replys.data.map((replyItems:ReplyItem)=>(
                 
                <Replylist replyItems={replyItems}/>
                
              ))
        }

           </div>

           {/* <ReplyCart ReviewId={reviewItems._id}/> */}

        </div>
    )
}
