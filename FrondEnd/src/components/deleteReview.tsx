'use client'
import React from "react";
import { useState } from "react";
import addReply from "@/libs/addReply";
import RefreshActionReplys from "../../refreshReply";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import deleteReview from "@/libs/deleteReview";
import RefreshActionReviews from "../../refreshActionReviews";


export default function DeleteReviewButton({reviewId, token, isAdmin} : {reviewId : string, token: string|undefined, isAdmin: boolean}) {

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
    <>
    {isAdmin?
        <div className="my-5 mx-5">
            <div className="w-fit h-fit rounded-xl px-2 py-2" onClick={() => {deleteReview(reviewId, token); RefreshActionReviews();}}>Delete</div>
        </div> 
        : null
    }
    </>
  );
}


// export default ButtonComponent;