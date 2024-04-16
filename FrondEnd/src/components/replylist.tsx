

export default function replylist({replyItems} : {replyItems:ReplyItem}) {
     
   
    return (
        <div className="bg-slate-300 my-3">
            <div> {replyItems.user.name}</div>
            <div> {replyItems.replyContent}</div>
          
        </div>
    )
}