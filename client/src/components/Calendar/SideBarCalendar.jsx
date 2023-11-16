/* eslint-disable react/prop-types */
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
const SideBarCalendar = () => {
    return (
        <aside className='h-full max-lg:h-fit max-lg:flex-row max-lg:w-full p-5 border w-64 flex flex-col justify-center lg:justify-start gap-4'>
            <CreateEventButton />
            <SmallCalendar/>
        </aside>
    )
}

export default SideBarCalendar