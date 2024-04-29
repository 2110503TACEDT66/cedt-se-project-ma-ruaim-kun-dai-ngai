import { getServerSession } from "next-auth"
import getHistorys from "@/libs/getHistorys"

export default async function HistoryList({historyItem}: {historyItem:HistoryItem}){

    return (
        <div>
            
                <div className="text-black">{historyItem.content}</div>
            
        </div>
    )
}