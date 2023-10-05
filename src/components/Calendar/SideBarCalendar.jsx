/* eslint-disable react/prop-types */
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
const SideBarCalendar = () => {
    return (
        <aside className='p-5 border w-64 flex flex-col gap-4'>
            <CreateEventButton />
            <SmallCalendar/>
        </aside>
    )
}

export default SideBarCalendar