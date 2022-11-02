import React, { useEffect, useContext, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { toast } from 'react-toastify';
import AddAppointment from './AddAppointment';
import { authContext } from '../../../hooks/useAuth';
import ApiService from '../../../services/ApiService';
import { ResponsiveDialog } from './DeleteConfirm';
import IAppointment from '../../../Interfaces/IAppointment';
import PendingPopup from './PendingCard';
import IOpen from '../../../Interfaces/IOpen';
import AppointmentValid from '../../../Validation/Appointment';

export const Calender = () => {
  const { user } = useContext(authContext);
  const [newAppointment, setNewAppointment] = useState<IAppointment>();
  const [info, setInfo] = useState<any>();
  const [currentEvents, setCurrentEvents] = React.useState<any>([]);
  const [open, setOpen] = useState<IOpen>({
    deletePop: false,
    pendingPop: false,
    addingPop: false,
  });
  const [delAppointment, setDelAppointment] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const events = async () => {
      const appointment = await ApiService.get(`/Appointment/${user?.id}`);
      setCurrentEvents(appointment.data);
    };
    events();
  }, [user?.id]);

  const handleDateSelect = async (selectInfo: any) => {
    setOpen(prev => ({ ...prev, addingPop: true }));
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    setNewAppointment(prev => ({
      ...prev,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    }));
  };
  const handle = async (eventDropInfo: any) => {
    try {
      const { data } = await ApiService.put('/dragAppointment', {
        start: new Date(eventDropInfo.event.start).toISOString(),
        end: new Date(eventDropInfo.event.start).toISOString(),
        id: eventDropInfo.event.id,
        DoctorId: user?.id,
      });
      setCurrentEvents((prev: any) => {
        return prev.map((ele: any) => {
          if (ele.id === data.id) {
            return { ...ele, start: data.start, end: data.end };
          }
          return ele;
        });
      });
      toast.success('Change successfully');
    } catch (error: any) {
      toast.error(error.massage);
    }
  };
  const handleEventClick = async (clickInfo: any) => {
    setOpen(prev => ({ ...prev, deletePop: true }));
    setDelAppointment({
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
    });
    setInfo(clickInfo);
  };
  return (
    <div className="demo-app">
      <PendingPopup
        open={open.pendingPop}
        setOpen={setOpen}
        setAppointment={setCurrentEvents}
      />
      <ResponsiveDialog
        setOpen={setOpen}
        setAppointment={setDelAppointment}
        edit={async () => {
          try {
            await AppointmentValid.validate({
              title: delAppointment.title,
              description: delAppointment.description,
              id: info.event.id,
              DoctorId: user?.id,
            });
            const { data } = await ApiService.put(`/Appointment/`, {
              ...delAppointment,
              id: info.event.id,
              DoctorId: user?.id,
            });

            setCurrentEvents((prev: any) => {
              return prev.map((ele: any) => {
                if (ele.id === data.id) {
                  return data;
                }
                return ele;
              });
            });
            toast.success('edited successfully');
            setOpen(prev => ({ ...prev, deletePop: false }));
          } catch (error: any) {
            toast.error(error.message);
          }
        }}
        remove={async () => {
          try {
            await ApiService.destroy(
              `/Appointment/${user?.id}/${info.event.id}`,
            );
            info.event.remove();
            setOpen(prev => ({ ...prev, deletePop: false }));
            toast.success('Deleted successfully');
          } catch (error: any) {
            toast.error(error.message);
          }
        }}
        open={open.deletePop}
        appointment={delAppointment}
      />
      <AddAppointment
        open={open.addingPop}
        onClose={() => {
          setOpen(prev => ({ ...prev, addingPop: false }));
        }}
        handleState={(event: any) => {
          const { name, value } = event.currentTarget;
          if (name === 'title' || name === 'description') {
            setNewAppointment(prev => ({
              ...prev,
              [name]: value,
            }));
          }
        }}
        onClick={async () => {
          try {
            await AppointmentValid.validate({
              description: newAppointment?.description,
              title: newAppointment?.title,
              end: newAppointment?.end,
              start: newAppointment?.start,
              DoctorId: user?.id,
            });
            const newAppoint = await ApiService.post('/Appointment', {
              ...newAppointment,
              id: user?.id,
              DoctorId: user?.id,
            });
            setCurrentEvents((prev: any) => prev.concat(newAppoint.data));
            toast.success('Added successfully');
            setOpen(prev => ({ ...prev, addingPop: false }));
          } catch (error: any) {
            toast.error(error.message);
          }
        }}
      />
      <div
        className="demo-app-main"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'timeGridWeek',
          }}
          initialView="timeGridWeek"
          editable={user?.role === 'DOCTOR'}
          selectable
          selectMirror
          dayMaxEvents
          eventDrop={handle}
          eventSources={[
            {
              events: [...currentEvents],
              color: '#356E6E',
            },
          ]}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};
