/* eslint-disable react/prop-types */
import CalendarDay from "./CalendarDay"

const MonthCalendar = ({month}) => {
    return (
        <div className="grid grid-cols-7 grid-rows-5 h-[80%] w-full">
            {
                month.map((row, i) => (
                    row.map((day, j) => (
                        <CalendarDay key={`${i}-${j}`} day={day} rowIndex={i}/>
                    ))
                ))
            }
        </div>
    )
    }

export default MonthCalendar