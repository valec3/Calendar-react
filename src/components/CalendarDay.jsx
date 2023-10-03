/* eslint-disable react/prop-types */

import dayjs from "dayjs"

const CalendarDay = ({day,rowIndex}) => {
    const colorIsToday = day.format('DDMMYYYY') === dayjs().format('DDMMYYYY')
                            ? 'bg-blue-600 text-white rounded-full w-7 text-center' 
                            : ''
    return (
        <div className="border border-gray-200 flex flex-col p-1 items-center gap-1">
            <div className="">
                {
                    rowIndex === 0 && (
                        <h3 className="text-sm mt-1 text-center">
                            {day.format('ddd').toUpperCase()}
                        </h3>
                    )
                }
                <p className={`text-sm p-1 my-1 text-center ${colorIsToday}`}>
                        {day.format('DD')}
                </p>
            </div>
        </div>
    )
    }

export default CalendarDay