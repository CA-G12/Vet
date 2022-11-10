import { TabContext, TabList, TabPanel } from '@mui/lab';
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { UserAppointment } from '../Actions/UserAppointment';
import { UserPosts } from '../Actions/UserPosts';

const UserTabProfile = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
}) => {
  return (
    <TabContext value={value}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <TabList onChange={handleChange}>
          <Tab sx={{ color: '#C4C4C4' }} label="Appointments" value="1" />
          <Tab sx={{ color: '#C4C4C4' }} label="Posts" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <UserAppointment />
      </TabPanel>

      <TabPanel value="2">
        <UserPosts />
      </TabPanel>
    </TabContext>
  );
};
export default UserTabProfile;
