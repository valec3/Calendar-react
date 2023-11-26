/* eslint-disable react/prop-types */
import dayjs from "dayjs"
import GlobalContext from "./GlobalContext"
import { useEffect, useReducer, useState } from "react"


const savedEventsReducer = (state,{type,payload}) => {
    switch (type) {
        case 'ADD_EVENT':
            return [...state,payload]
        case 'DELETE_EVENT':
            return state.filter(event => event.id !== payload.id)
        case 'UPDATE_EVENT':
            return state.map(event => event.id === payload.id ? payload : event)
        default:
            return state
    }
}
const initEvents = () => {
    const events = localStorage.getItem('savedEvents')
    return events ? JSON.parse(events) : []
}


export default function ContextWrapper(props){
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [daySelected, setDaySelected] = useState(null)

    const [userInfo, setUserInfo] = useState(null)
    
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);
    const [savedEvents,dispatchSavedEvents] = useReducer(savedEventsReducer,[],initEvents)


    useEffect(() => {
        localStorage.setItem('savedEvents',JSON.stringify(savedEvents))
    }, [savedEvents])



    return (
        <GlobalContext.Provider value={{
            monthIndex,
            setMonthIndex, 
            daySelected,
            setDaySelected,
            userInfo,
            setUserInfo,
            showEventModal,
            setShowEventModal,
            dispatchSavedEvents,
            savedEvents,
            setSelectedEvent,
            selectedEvent,
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}

