import React, { useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import { INITIAL_EVENTS } from './eventutils.jsx';
import { authContext } from '../../hooks/useAuth';
import ApiService from '../../services/ApiService';

// const renderSidebarEvent = (event:any) => (
//   <li key={event.id}>
//     <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
//     <i>{event.title}</i>
//   </li>
// );
const renderEventContent = (eventInfo:any) => (
  <div>
    <p>{eventInfo.timeText}</p>
    <p>{eventInfo.event.title}</p>
  </div>
);

export const Calender = () => {
  const { user } = useContext(authContext);
  // const [weekendsVisible, setWeekendsVisible] = React.useState('true');
  const [currentEvents, setCurrentEvents] = React.useState([]);
  // const handleWeekendsToggle = () => {
  //   // setWeekendsVisible(!weekendsVisible);
  // };?
  useEffect(() => {
    const events = async () => {
      const appointment = await ApiService.get(`/Appointment/${user?.id}`);
      setCurrentEvents(appointment.data);
    };
    events();
  }, []);

  const handleDateSelect = async (selectInfo:any) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
    if (title) {
      const calenderObj = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };
      const newAppointment = await ApiService.post('/Appointment', { ...calenderObj, description: 'heheher', DoctorId: user?.id });
      console.log({ ...calenderObj, description: 'heheher', DoctorId: user?.id });
      const appointment = {
        end: newAppointment.data.end,
        start: newAppointment.data.start,
        id: newAppointment.data.id,
        title: newAppointment.data.title,
      };
      setCurrentEvents((prev:any) => prev.concat(appointment));
    }
  };

  const handleEventClick = async (clickInfo:any) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      await ApiService.destroy(`/Appointment/${clickInfo.event.id}`);
      clickInfo.event.remove();
    }
  };

  return (
    <div className="demo-app">
      {/* {here()} */}
      <div className="demo-app-main">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek',
          }}
          initialView="timeGridWeek"
          editable
          selectable
          selectMirror
          dayMaxEvents
          // weekends={weekendsVisible}
          events={currentEvents}
            // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};
