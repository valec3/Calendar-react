/* eslint-disable react/prop-types */
import dayjs from "dayjs"
import GlobalContext from "./GlobalContext"
import { useState } from "react"

export default function ContextWrapper(props){
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [daySelected, setDaySelected] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [showEventModal, setShowEventModal] = useState(true)

    return (
        <GlobalContext.Provider value={{
            monthIndex,
            setMonthIndex, 
            daySelected,
            setDaySelected,
            userInfo,
            setUserInfo,
            showEventModal,
            setShowEventModal
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

