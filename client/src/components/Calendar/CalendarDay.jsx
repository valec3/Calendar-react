/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../../context/GlobalContext"
import dayjs from "dayjs"

const CalendarDay = ({day}) => {
    const {setDaySelected,setShowEventModal,savedEvents,setSelectedEvent} = useContext(GlobalContext)
    const handleClickDayMonth = (day) => {
        setDaySelected(day)
        setShowEventModal(true)
    }   
    const colorIsToday = day.format('DDMMYYYY') === dayjs().format('DDMMYYYY')
                            ? 'bg-blue-600 text-white rounded-full w-7 text-center' 
                            : ''


    const [dayEvents,setDayEvents] = useState([])
    useEffect(() => {
        const events = savedEvents.filter(event => event.day === day.format('DD') && event.month === day.format('MM') && event.year === day.format('YYYY'))
        setDayEvents(events)
    }, [savedEvents,day])

    const handleClickDayEvent = (event) => {
        setSelectedEvent(event)
        setShowEventModal(true)
    }

    return (
        <div 
            className="border border-blue-200 flex flex-col justify-start items-center gap-1 cursor-pointer w-full" 
            onClick={()=>handleClickDayMonth(day)}
        >
            <p className={`text-sm my-1 w-8 h-8 flex items-center justify-center text-center font-semibold ${colorIsToday}`}>
                {day.format('DD')}
            </p>
            <div className="overflow-auto max-h-28 w-full scroll-hidden flex flex-col gap-1 px-2">
                {
                    dayEvents.map(event => (
                        <div 
                            key={event.id} 
                            className={`bg-${event.color}-200 w-full rounded-md p-1`}
                            onClick={()=>handleClickDayEvent(event)}
                            tabIndex={0} // Add tabIndex attribute for keyboard interaction
                        >
                            <p>{event.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }

export default CalendarDay