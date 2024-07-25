import React from "react"
import { Link } from "react-router-dom"
export const Pet=(props)=>{
    return (
        <div>
            <h4>name of pet <Link to={`/details/${props.id}`}>{props.name}</Link></h4>
        </div>
    )
}