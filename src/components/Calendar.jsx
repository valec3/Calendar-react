import { useState,useContext, useEffect } from "react"
import HeaderCalendar from "./HeaderCalendar"
import MonthCalendar from "./MonthCalendar"
import SideBarCalendar from "./SideBarCalendar"
import { getDaysMonth } from "../utilities"
import GlobalContext from "../context/GlobalContext"

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(getDaysMonth())
    const {monthIndex} = useContext(GlobalContext)
    useEffect(() => {
        setCurrentMonth(getDaysMonth(monthIndex))
    },[monthIndex])

    return (
        <div className="flex flex-col h-screen bg-slate-100 px-2 py-2">
            <HeaderCalendar/>
            <div className="flex h-full w-full items-center gap-2">
                <SideBarCalendar />
                <MonthCalendar month={currentMonth}/>
            </div>
        </div>
    )
}

export default Calendar