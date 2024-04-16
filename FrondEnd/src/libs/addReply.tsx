// import { getServerSession } from "next-auth"
// import getUserProfile from "./getUserProfile"
// import { authOptions } from "@/libs/auth"
// export default async function addReply(contentReply:string,reviewID:string) {
//     const session = await getServerSession(authOptions)
//     if (!session || !session.user.token ) return 
        

//     const profile = await getUserProfile(session.user.token)


//     // const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${idcamp}/reviews` , {
//     //     method : "POST",
//     //     headers : {
//     //         "Content-Type" : "application/json",
//     //     },
//     //     body: JSON.stringify({
            
            
            
//     //     }),
//     // } )
//     //  if (!response.ok) {
        
//     //     throw new Error("Failed to add Review")
        
//     //  } 
      
     
     
//     //  return await response.json

// }