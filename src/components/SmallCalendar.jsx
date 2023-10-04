/* eslint-disable react/prop-types */
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { useEffect, useState } from "react"
import { getDaysMonth } from "../utilities"
import dayjs from "dayjs"

const SmallCalendar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getDaysMonth(currentMonthIndex))

    useEffect(() => {
        setCurrentMonth(getDaysMonth(currentMonthIndex))
    }, [currentMonthIndex])

    return (
        <div>
            <div className='flex justify-between items-center mb-2'>
                <h2 className="capitalize font-semibold">
                    {dayjs(new Date(dayjs().year(),currentMonthIndex)).format('MMMM YYYY')}
                </h2>
                <div className='flex items-center'>
                    <KeyboardArrowLeftSharpIcon 
                        className='inline-block cursor-pointer' 
                        onClick={() => setCurrentMonthIndex(currentMonthIndex-1)}
                    />
                    <KeyboardArrowRightSharpIcon 
                        className='inline-block cursor-pointer' 
                        onClick={() => setCurrentMonthIndex(currentMonthIndex+1)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 border border-blue-400">
                {
                    currentMonth.map((week,i)=>(
                        week.map((day,j)=>(
                            <div key={`${i}-${j}`} className='text-sm p-1 border border-blue-400'>
                                {day.format('DD')}
                            </div>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default SmallCalendar