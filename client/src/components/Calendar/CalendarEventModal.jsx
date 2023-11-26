import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotesIcon from '@mui/icons-material/Notes';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';

const CalendarEventModal = () => {
    const {setShowEventModal,daySelected,dispatchSavedEvents,selectedEvent,setSelectedEvent} = useContext(GlobalContext);
    const [description, setDescription] = useState(selectedEvent?.description || '');
    const [title, setTitle] = useState(selectedEvent?.title || '');
    const [colorSelected, setColorSelected] = useState(selectedEvent?.color ||'red');
    const colorsLabels = [
        {color:'red',label:'#f44336'},
        {color:'yellow',label:'#ffeb3b'},
        {color:'green',label:'#4caf50'},
        {color:'blue',label:'#2196f3'},
        {color:'indigo',label:'#3f51b5'},
        {color:'purple',label:'#9c27b0'},
    ]

    const handleKeyDown = (e) => {
        if(e.key === 'Escape'){
            setShowEventModal(false)
        }
    }
    const handleSaveEvent = (e) => {
        e.preventDefault()
        const event = {
            id:Date.now(),
            title,
            description,
            color:colorSelected,
            day:daySelected.format('DD'),
            month:daySelected.format('MM'),
            year:daySelected.format('YYYY'),
        }
        if(selectedEvent){
            dispatchSavedEvents({type:'UPDATE_EVENT',payload:{...event,id:selectedEvent.id}})
            setSelectedEvent(null)
        }else{
            dispatchSavedEvents({type:'ADD_EVENT',payload:event})
        }

        console.log(event)
        setShowEventModal(false)
    }
    const handleDeleteEvent = () => {
        console.log(selectedEvent)
        dispatchSavedEvents({type:'DELETE_EVENT',payload:selectedEvent})
        setSelectedEvent(null)
        setShowEventModal(false)
    }
    const handleClosedModal = () => {
        setShowEventModal(false)
        setSelectedEvent(null)
    }
    return (
        <div className="h-screen w-full left-0 top-0 flex justify-center items-center fixed">
            <div className='h-full w-full bg-gray-400 opacity-60 absolute top-0 left-0 z-20'></div>
            <form className="bg-white rounded-lg shadow-2xl w-[90%] lg:w-[50%] xl:w-[30%] z-30"
                onSubmit={handleSaveEvent}
            >
                <header className="bg-blue-100 px-4 py-2 flex justify-between items-center">
                    <span className='text-blue-600'>
                        <EditNoteIcon fontSize='large'/>
                    </span>
                    <div>
                        <button 
                            className='text-red-500 mr-2'
                            onClick={handleDeleteEvent}
                        >
                            <DeleteIcon />
                        </button>
                        <button 
                            className='text-blue-700'
                            onClick={()=>handleClosedModal()}
                        >
                            <CloseIcon />
                        </button>
                    </div>
                </header>
                <div className='flex p-4 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-8'>
                            <span className='w-8 h-full'></span>
                            <input 
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                type="text" 
                                required
                                placeholder='Agrega un titulo' 
                                className='outline-none w-full px-2 py-2 my-1 text-2xl text-gray-600 font-semibold border-b-[2px] border-b-slate-800 focus:border-blue-500'
                            />
                        </div>
                        <div className='flex gap-8'>
                            <AccessTimeIcon />
                            <p className='capitalize'>
                                {daySelected?.format("dddd DD, MMMM")}
                            </p>
                        </div>
                        <div className='flex gap-8 items-center justify-between'>
                            <NotesIcon />
                            <textarea 
                                value={description}
                                onChange={(e)=>setDescription(e.target.value)}
                                placeholder='Agrega una descripcion' 
                                className='w-full flex-1 resize-none border-b-[2px] outline-none border-b-slate-800 focus:border-blue-500'
                            >
                            </textarea>
                        </div>
                        <div className='flex gap-8 items-center'>
                            <BookmarkIcon sx={{}}/>
                            {
                                colorsLabels.map((item)=>(
                                    <span 
                                        key={item.label} 
                                        className={`w-4 h-4 rounded-full bg-${item.color}-500 ${colorSelected==item.color ? 'border-[2px] border-white':''} cursor-pointer flex justify-center items-center`}
                                        onClick={()=>setColorSelected(item.color)}
                                        onKeyDown={handleKeyDown}
                                    >
                                        
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <footer className='flex justify-center py-2'>
                    {
                        selectedEvent ? (
                            <button 
                                type='submit'
                                className='w-80 font-bold bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
                            >
                                Actualizar
                            </button>

                        ) : (
                            <button 
                                type='submit'
                                className='w-80 font-bold bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
                            >
                                Guardar
                            </button>
                        )
                    }
                </footer>
            </form>
        </div>
    )
}

export default CalendarEventModal