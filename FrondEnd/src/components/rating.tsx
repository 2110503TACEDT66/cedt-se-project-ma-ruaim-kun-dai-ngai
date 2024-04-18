'use client'

import addRate from "@/libs/addRate"
import { Rating } from "@mui/material"
import { useState } from "react"

export default function Ratingg( {par,user,checkCanRate} : {par:string,user:string,checkCanRate:boolean}) {

    const [rate, setRate] = useState(0)

    
    return (
        <div>
        <Rating id="ratingnum" name="ratingnum" onChange={(event,newvalue)=>{event.stopPropagation(); if (newvalue!=null) { setRate(newvalue)}  }} onClick={() => {addRate(rate, par,user,checkCanRate)}}/>
        </div>
    )
}