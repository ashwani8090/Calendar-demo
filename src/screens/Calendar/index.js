import React from 'react';
import './styles.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "./events";

const Calendar = () => {
    let calendarRef = React.createRef()

    return (<div className="calendar-page">
        <FullCalendar
            ref={calendarRef}
            defaultView="dayGridMonth"
            header={{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            themeSystem="Simplex"
            plugins={[dayGridPlugin]}
            events={events}
            selectable={true}
        />
    </div>)
}

export default Calendar;