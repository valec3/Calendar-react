import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotesIcon from '@mui/icons-material/Notes';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const CalendarEventModal = () => {
    const {setShowEventModal} = useContext(GlobalContext)

    return (
        <div className="h-screen w-full left-0 top-0 flex justify-center items-center fixed">
            <div className='h-full w-full bg-gray-400 opacity-60 absolute top-0 left-0 z-20'></div>
            <form className="bg-white rounded-lg shadow-2xl w-[90%] lg:w-[50%] xl:w-[30%] z-30">
                <header className="bg-blue-100 px-4 py-2 flex justify-between items-center">
                    <span className='text-blue-600'>
                        <EditNoteIcon fontSize='large'/>
                    </span>
                    <button 
                        className='text-blue-700'
                        onClick={()=>setShowEventModal(false)}
                    >
                        <CloseIcon />
                    </button>
                </header>
                <div className='flex p-4 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-8'>
                            <span className='w-8 h-full'></span>
                            <input 
                                type="text" 
                                placeholder='Agrega un titulo' 
                                className='outline-none w-full px-2 py-2 my-1 text-2xl text-gray-600 font-semibold border-b-[2px] border-b-slate-800 focus:border-blue-500'
                            />
                        </div>
                        <div className='flex gap-8'>
                            <AccessTimeIcon />
                            <p>Monday, April 08</p>
                        </div>
                        <div className='flex gap-8 items-center justify-between'>
                            <NotesIcon />
                            <textarea placeholder='Agrega una descripcion' className='w-full flex-1 resize-none border-b-[2px] outline-none border-b-slate-800 focus:border-blue-500'>
                            </textarea>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <BookmarkIcon />
                            <span className='w-4 h-4 rounded-full bg-red-500'></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CalendarEventModal