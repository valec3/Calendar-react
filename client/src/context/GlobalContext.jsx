import React from 'react';

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: () => {},
    smallCalendarMonth:0,
    daySelected:null,
    setDaySelected:()=>{}
})

export default GlobalContext;
