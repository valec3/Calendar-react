/* eslint-disable react/prop-types */
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { useContext, useEffect, useState } from "react"
import { getDaysMonth } from "../../utilities"
import dayjs from "dayjs"
import GlobalContext from '../../context/GlobalContext';

const SmallCalendar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month())
    const [currentDaysMonth, setCurrentDaysMonth] = useState(getDaysMonth(currentMonthIndex))
    const {monthIndex} = useContext(GlobalContext)

    useEffect(() => {
        setCurrentDaysMonth(getDaysMonth(monthIndex))
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])
    useEffect(() => {
        setCurrentDaysMonth(getDaysMonth(currentMonthIndex))
    }, [currentMonthIndex])
    const stylesDayNow = (day) => {
        return day.format('DD-MM-YY')===dayjs().format('DD-MM-YY') ? 'bg-blue-600 rounded-full text-white':''
    }
    return (
        <div>
            <div className='flex justify-between items-center mb-2'>
                <h2 className="capitalize font-semibold ">
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
            <div className="grid grid-cols-7">
                {
                    currentDaysMonth[0].map((day,i)=>(
                        <div key={i} className='text-sm p-1 text-blue-600 font-semibold'>
                            {day.format('dd').charAt(0).toUpperCase()}
                        </div>
                    ))
                }
                {
                    currentDaysMonth.map((week,i)=>(
                        week.map((day,j)=>(
                            <button key={`${i}-${j}`} className={`text-sm p-1 cursor-pointer ${stylesDayNow(day)}`}>
                                {day.format('D')}
                            </button>
                        ))
                    ))
                }
            </div>
        </div>
    )
}

export default SmallCalendar