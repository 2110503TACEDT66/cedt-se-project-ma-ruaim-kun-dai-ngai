'use client'

import Replylist from "./replylist"
import getReplys from "@/libs/getReplys"
import ReplyCart from "./replyCart"
import React from "react";
import { useState } from "react";

export default function reviewlist({reviewItems} : {reviewItems:ReviewItem}) {
//    const util = require('util')
//    const replys = await getReplys(reviewItems._id)
//     //เเตก array
//    util.inspect(replys, {showHidden: false, depth: null, colors: true})
//    console.log(replys)
    const [showButtons, setShowButtons] = useState<boolean>(false);
    const [replyText, setReplyText] = useState<string>("");

    const handleButtonClick = () => {
    setShowButtons(!showButtons);
    };
   

    return (
        <div className="bg-white my-3">
            <div> {reviewItems.user.name}</div>
            <div> {reviewItems.content}</div>
            <div>
                <button onClick={handleButtonClick} className="bg-black text-white hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-4 py-1 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-4">
                    {showButtons ? 'Reply' : 'Reply'}
                </button>
                {showButtons && (
                    <div className="my-5 mx-5">
                        <input type="text" id="replyText" name="replyText" placeholder="Add your reply" onChange={(e) => setReplyText(e.target.value)}/>
                        <input type="submit" id="submitReply" name="submitReply" placeholder="Send reply" onClick={() => alert(replyText)}/>
                    </div>
                )}
            </div>
            
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
