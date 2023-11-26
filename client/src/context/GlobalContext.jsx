import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: () => {},
    smallCalendarMonth:0,
    daySelected:null,
    setDaySelected:()=>{},
    userInfo:null,
    setUserInfo:()=>{},
    showEventModal:false,
    setShowEventModal:()=>{},
    dispatchSavedEvents:({type,payload})=>{},
    savedEvents : [],
    setSelectedEvent:()=>{},
    selectedEvent:null,
})

export default GlobalContext;
