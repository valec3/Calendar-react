import logo from '../assets/logo.png'
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';

const HeaderCalendar = () => {
    return (
        <header className="px-6 py-2 flex items-center ">
            <img src={logo} alt="logo google calendar" className='mr-2 w-10 h-10' />
            <h2 className='mr-10 text-xl text-gray-50 font-bold'>Calendario</h2>
            <button className='border rounded-full py-2 px-8 mr-5 font-semibold'>
                Hoy
            </button>
            <button className='hover:bg-gray-200 rounded-full'>
                <KeyboardArrowLeftSharpIcon />
            </button>
            <button className='hover:bg-gray-200 rounded-full'>
                <KeyboardArrowRightSharpIcon />
            </button>
        </header>
    )
}

export default HeaderCalendar