import React, { useEffect, useContext, useState } from 'react';
import FullCalendar, { EventClickArg } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import AddAppointment from './AddAppointment';
import { authContext } from '../../../hooks/useAuth';
import ApiService from '../../../services/ApiService';
import { EditPopup } from './DeleteEdit';
import IAppointment from '../../../Interfaces/IAppointment';
import PendingPopup from './PendingAppointments';
import IOpen from '../../../Interfaces/IOpen';
import AppointmentValid from '../../../Validation/Appointment';

export const Calender = () => {
  const { user, setOpen } = useContext(authContext);
  const params = useParams();
  const [newAppointment, setNewAppointment] = useState<IAppointment>();
  const [info, setInfo] = useState<any>();
  const [currentEvents, setCurrentEvents] = React.useState<any>([]);
  const [delAppointment, setDelAppointment] = useState({
    title: '',
    description: '',
  });
  const [openPop, setOpenPop] = useState<IOpen>({
    deletePop: false,
    pendingPop: false,
    addingPop: false,
  });

  useEffect(() => {
    const events = async () => {
      const { data } = await ApiService.get(`/Appointment/${params?.id}`);
      setCurrentEvents(data.docAppointment);
    };
    events();
  }, [params?.id]);

  const handleDateSelect = async (selectInfo: any) => {
    if (user) setOpenPop(prev => ({ ...prev, addingPop: true }));
    else {
      setOpen(true);
    }
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    setNewAppointment(prev => ({
      ...prev,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    }));
  };
  const handleDrop = async (eventDropInfo: any) => {
    try {
      const { data } = await ApiService.put('/dragAppointment', {
        start: eventDropInfo.event.startStr,
        end: new Date(eventDropInfo.event.end),
        id: eventDropInfo.event.id,
      });
      setCurrentEvents((prev: any) => {
        return prev.map((ele: any) => {
          if (ele.id === data.newTime.id) {
            return { ...ele, ...data.newTime };
          }
          return ele;
        });
      });
      toast.success('Change successfully');
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
  };
  const handleEventClick = async (clickInfo: EventClickArg) => {
    setOpenPop(prev => ({ ...prev, deletePop: true }));
    setDelAppointment({
      title: clickInfo.event.title,
      description: clickInfo.event.extendedProps.description,
    });
    setInfo(clickInfo);
  };
  const edit = async () => {
    try {
      await AppointmentValid.validate({
        ...delAppointment,
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
      toast.success('Edited successfully');
      setOpenPop(prev => ({ ...prev, deletePop: false }));
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const remove = async () => {
    try {
      await ApiService.destroy(`/Appointment/${info.event.id}`);
      setOpenPop(prev => ({ ...prev, deletePop: false }));
      setCurrentEvents((prev: any) => {
        return prev.filter((ele: any) => ele.id !== Number(info.event.id));
      });
      toast.success('Deleted successfully');
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const addApp = async () => {
    try {
      await AppointmentValid.validate({
        ...newAppointment,
        DoctorId: params.id,
      });
      const { data } = await ApiService.post('/Appointment', {
        appointment: { ...newAppointment, DoctorId: params.id },
      });
      if (data.appointment.status === 'ACCEPTED') {
        setCurrentEvents((prev: any) => prev.concat(data.appointment));
      }
      toast.success(data.msg);
      setOpenPop(prev => ({ ...prev, addingPop: false }));
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
  };
  return (
    <div className="demo-app">
      {user?.id === Number(params.id) && (
        <>
          <PendingPopup
            open={openPop.pendingPop}
            setOpen={setOpenPop}
            setAppointment={setCurrentEvents}
          />

          <EditPopup
            setOpen={setOpenPop}
            setAppointment={setDelAppointment}
            edit={edit}
            remove={remove}
            open={openPop.deletePop}
            appointment={delAppointment}
          />
        </>
      )}
      <AddAppointment
        open={openPop.addingPop}
        onClose={() => {
          setOpenPop(prev => ({ ...prev, addingPop: false }));
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
        onClick={addApp}
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
          editable={user?.id === Number(params.id)}
          selectable
          selectMirror
          dayMaxEvents
          eventDrop={handleDrop}
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
