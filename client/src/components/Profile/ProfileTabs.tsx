import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Calender } from './Calender';
import { UserAppointment } from './UserAppointment';
import { authContext } from '../../hooks/useAuth';

export const ProfileTabs = () => {
  const [value, setValue] = useState('1');
  const { user } = useContext(authContext);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TabList onChange={handleChange}>
            <Tab sx={{ color: '#C4C4C4' }} label="Calender" value="1" />
            <Tab sx={{ color: '#C4C4C4' }} label="Posts" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {(user?.role === 'DOCTOR') ? <Calender /> : <UserAppointment />}
        </TabPanel>
        <TabPanel value="2">
          Posts
        </TabPanel>
      </TabContext>
    </Box>
  );
};
