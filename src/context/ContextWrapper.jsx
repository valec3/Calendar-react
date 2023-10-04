/* eslint-disable react/prop-types */
import dayjs from "dayjs"
import GlobalContext from "./GlobalContext"
import { useState } from "react"

export default function ContextWrapper(props){
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    return (
        <GlobalContext.Provider value={{monthIndex,setMonthIndex}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

