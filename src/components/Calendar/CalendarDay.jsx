/* eslint-disable react/prop-types */
import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"
import dayjs from "dayjs"

const CalendarDay = ({day}) => {
    const {setDaySelected} = useContext(GlobalContext)

    const handleClickDayMonth = (day) => {
        setDaySelected(day)
    }   

    const colorIsToday = day.format('DDMMYYYY') === dayjs().format('DDMMYYYY')
                            ? 'bg-blue-600 text-white rounded-full w-7 text-center' 
                            : ''
    return (
        <div className="border border-blue-200 flex justify-center gap-1 cursor-pointer" onClick={()=>handleClickDayMonth(day)}>
            <p className={`text-sm my-1 w-8 h-8 flex items-center justify-center text-center font-semibold ${colorIsToday}`}>
                {day.format('DD')}
            </p>
        </div>
    )
    }

export default CalendarDay