import { getServerSession } from "next-auth"
import getHistorys from "@/libs/getHistorys"

export default async function HistoryList({historyItem}: {historyItem:HistoryItem}){

    return (
        <div>
                <div className="text-white mt-1">{historyItem.content}</div>
                <div className="text-slate-200">------------</div>
        </div>
    )
}