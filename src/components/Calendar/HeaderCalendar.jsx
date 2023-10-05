import logoWeb from '../../assets/logo.webp'
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

const HeaderCalendar = () => {
    const {monthIndex,setMonthIndex} = useContext(GlobalContext)

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex-1)
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex+1)
    }
    return (
        <header className="px-6 py-2 flex items-center ">
            <img src={logoWeb} alt="logo google calendar" className='mr-2 w-14 h-14 cursor-pointer' />
            <h2 className='mr-10 text-xl text-gray-800 font-bold'>Calendario</h2>
            <button 
                className='border-[2px] border-slate-300 rounded-full py-2 px-8 mr-5 font-semibold hover:bg-blue-200 hover:border-blue-600 focus:outline-8 outline-blue-600'
                onClick={() => setMonthIndex(dayjs().month())}
            >
                Hoy
            </button>
            <button className='hover:bg-gray-200 rounded-full' onClick={handlePrevMonth}>
                <KeyboardArrowLeftSharpIcon />
            </button>
            <button className='hover:bg-gray-200 rounded-full' onClick={handleNextMonth}>
                <KeyboardArrowRightSharpIcon />
            </button>
            <h2 className='text-2xl font-bold text-slate-600 capitalize ml-4'>
                {dayjs(new Date(dayjs().year(),monthIndex)).format('MMMM YYYY')}
            </h2>
        </header>
    )
}

export default HeaderCalendar