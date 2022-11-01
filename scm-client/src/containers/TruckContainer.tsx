import { useState,useEffect, FC} from "react";
import TruckDatagridComponent from "../components/TruckDatagridComponent";
import { TruckDetail } from "../components/TruckDetail";

const TruckContainer:FC=props=>{
    return(
        <div>
            <h1>SCM Application</h1>
            <TruckDatagridComponent/>
            {/* <TruckDetail/> */}
        </div>
    )
}
export default TruckContainer;