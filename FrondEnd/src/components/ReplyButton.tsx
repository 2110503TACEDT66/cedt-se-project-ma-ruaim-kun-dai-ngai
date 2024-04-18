'use client'
import React from "react";
import { useState } from "react";
import addReply from "@/libs/addReply";
import RefreshActionReplys from "../../refreshReply";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function ReplyButton({reviewId, token, checkCanReply} : {reviewId : string, token: string|undefined, checkCanReply:boolean}) {

// const ButtonComponent: React.FC = ({id} : {id:String}) => {

  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>("");

  // const handleButtonClick = () => {
  //   setShowButtons(!showButtons);
  // };

  // const postReply = () => {
  //   addReply(replyText, reviewId)
  //   revalidateTag('replys')
  // }


  return (
    <div>
      <button onClick={()=>setShowButtons(!showButtons)} className="bg-black text-white hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-4 py-1 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-4">
        {showButtons ? 'Reply' : 'Reply'}
      </button>
      {showButtons ?
        <div className="my-5 mx-5">
            <input type="text" id="replyText" name="replyText" placeholder="Add your reply" onChange={(e) => setReplyText(e.target.value)}/>
            <input type="submit" id="submitReply" name="submitReply" placeholder="Send reply" onClick={() => {addReply(replyText, reviewId, token , checkCanReply);  RefreshActionReplys();}}/>
        </div> : null
              }
    </div>
  );
}


// export default ButtonComponent;