'use client'
import React from "react";
import { useState } from "react";

const ButtonComponent: React.FC = () => {
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>("");

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

//   const addReply = async (addReplyForm:FormData) => {
//     "use server"
//      const replyText = addReplyForm.get('replyText')

//      if (replyText) {
      
       
//         console.log(replyText)
//      }
//}
  return (
    <div>
      <button onClick={handleButtonClick} className="bg-black text-white hover:bg-red-800 hover:border-red-800 hover:text-black text-white px-4 py-1 rounded-md border-solid border-2 border-white font-normal text-xl underline-offset-0 my-4">
        {showButtons ? 'Reply' : 'Reply'}
      </button>
      {showButtons && (
        // <form action={addReply}>
        //      <div className='flex items-center w-1/2 my-2'>
        //           <input type='text' required id="replyText" name="replyText" placeholder='Add your reply' className="bg-white text-center border border-2 border-gray-200 rounded-xl w-[315px] p-2 text-gray-700  hover:ring-transparent"></input>
        //      </div>

        //      <button type="submit" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold my-5 mx-[100px]"  >Send reply</button>

        //      <div className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold my-5 mx-[100px]" >Send reply</div>
             
        // </form>
        <div className="my-5 mx-5">
            <input type="text" id="replyText" name="replyText" placeholder="Add your reply" onChange={(e) => setReplyText(e.target.value)}/>
            <input type="submit" id="submitReply" name="submitReply" placeholder="Send reply" onClick={() => alert(replyText)}/>
        </div>
      )}
    </div>
  );
}

export default ButtonComponent;