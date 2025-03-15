import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
export default function Roots(){

    return (
        <div>
<Navbar/>
<div>
    <Outlet/>
</div>
        </div>
    )
}