import { useState,useEffect, FC} from "react";
import TruckDatagridComponent from "../components/TruckDatagridComponent";
import { TruckDetail } from "../components/TruckDetail";

import { Routes, Route, Outlet, Link } from "react-router-dom";

const TruckContainer:FC=props=>{
    return(
        <div>
            <h1>SCM Application</h1>
            <Outlet/>
           
        </div>
    )
}
export default TruckContainer;