/* eslint-disable react/prop-types */

import CalendarDay from "./CalendarDay"

const MonthCalendar = ({month}) => {

    return (
        <div className="flex flex-col justify-center h-full w-full p-0">
            <div className="max-h-screen w-full overflow-auto h-[100%] flex flex-col">
                <div className="grid grid-cols-7">
                    {
                        month[0].map((day,idx) => (
                            <h3 key={`${day}-${idx}`} className="text-sm text-center text-blue-600 font-bold border border-blue-200 py-2">
                                {day.format('ddd').toUpperCase()}
                            </h3>
                        ))
                    }
                </div>
                <div className="grid grid-cols-7 flex-1">
                    {
                        month.map((row, i) => (
                            row.map((day, j) => (
                                <CalendarDay key={`${i}-${j}`} day={day}/>
                            ))
                        ))
                    }
                </div>
            </div>
        </div>
    )
    }

export default MonthCalendar