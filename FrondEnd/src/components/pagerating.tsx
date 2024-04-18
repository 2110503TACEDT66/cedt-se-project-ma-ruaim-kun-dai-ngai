import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth"
import getUserProfile from "@/libs/getUserProfile"
import Ratingg from "./rating"

export default async function Pagerating({paa,checkCanRate} : {paa:string,checkCanRate:boolean}) {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return 

    const profile = await getUserProfile(session.user.token)




    return (   
    <div>
        <Ratingg par={paa} checkCanRate={checkCanRate} user={profile.data._id}/>
    </div>
    )
}