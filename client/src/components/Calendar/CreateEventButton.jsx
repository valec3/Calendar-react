import AddIcon from '@mui/icons-material/Add';
const CreateEventButton = () => {
    return (
        <button className="border p-2 px-6 rounded-full flex items-center shadow-md hover:shadow-xl gap-2 font-bold text-slate-700 hover:bg-slate-200 h-fit">
            <AddIcon className="text-blue-600" fontSize='large' sx={{ fontSize: '32px', fontWeight: 'bold' }}/>
            <span>Evento</span>
        </button>
    )
    }

export default CreateEventButton