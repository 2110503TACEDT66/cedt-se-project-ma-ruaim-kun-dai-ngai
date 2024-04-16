//'use client'

import Replylist from "./replylist"
import getReplys from "@/libs/getReplys"
import ReplyCart from "./replyCart"
import React from "react";
import { useState } from "react";
import ReplyButton from "./ReplyButton";

export default function reviewlist({reviewItems} : {reviewItems:ReviewItem}) {
//    const util = require('util')
//    const replys = await getReplys(reviewItems._id)
//     //เเตก array
//    util.inspect(replys, {showHidden: false, depth: null, colors: true})
//    console.log(replys)
    // const [showButtons, setShowButtons] = useState<boolean>(false);
    // const [replyText, setReplyText] = useState<string>("");

    // const handleButtonClick = () => {
    // setShowButtons(!showButtons);
    // };
   

    return (
        <div className="bg-white my-3">
            <div> {reviewItems.user.name}</div>
            <div> {reviewItems.content}</div>
            <ReplyButton reviewId={reviewItems._id}/>
            
{/* 
           <div className="bg-slate-400"> 
           {
            replys.data.map((replyItems:ReplyItem)=>(
                 
                <Replylist replyItems={replyItems}/>
                
              ))
        }

           </div> */}

           <ReplyCart ReviewId={reviewItems._id}/>

        </div>
    )
}
