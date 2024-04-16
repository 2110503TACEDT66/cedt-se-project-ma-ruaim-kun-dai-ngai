'use server'
import { getServerSession } from "next-auth"
import getUserProfile from "./getUserProfile"
import { authOptions } from "@/libs/auth"
import getUserID from "../../getUserID"
import { redirect } from "next/navigation"
export default async function addReply(contentReply:string,reviewID:string) {
    if (getUserID() == undefined || getUserID() == null) {
        redirect('/')
     }
     if (contentReply == null) {
        return
    }

    // const session = await getServerSession(authOptions)
    // if (!session || !session.user.token ) return 
        

    // const profile = await getUserProfile(session.user.token)


    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reviews/${reviewID}/replys` , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            replyContent: contentReply,
            user:getUserID(),
        }),
    } )
     if (!response.ok) {
        throw new Error("Failed to add Reply")
        
     } 
      
     
     
     return await response.json

}