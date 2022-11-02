import React from 'react';
import IAppointment from '../Interfaces/IAppointment';

interface IAppointContext {
  appointment: IAppointment[];
  setAppointment: React.Dispatch<React.SetStateAction<IAppointment[]>>;
}

const appointmentCon = React.createContext<IAppointContext>({
  appointment: [
    {
      id: 0,
      DoctorId: 0,
      title: '',
      description: '',
    },
  ],
  setAppointment: () => {},
});
const ProviderAppointment = ({ children }: { children: React.ReactNode }) => {
  const [appointment, setAppointment] = React.useState<IAppointment[]>([
    {
      id: 0,
      DoctorId: 0,
      title: '',
      description: '',
    },
  ]);
  const appointmentValue = React.useMemo(
    () => ({ appointment, setAppointment }),
    [appointment],
  );

  return (
    <appointmentCon.Provider value={appointmentValue}>
      {children}
    </appointmentCon.Provider>
  );
};
export { ProviderAppointment, appointmentCon };
