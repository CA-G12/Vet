import { TabContext, TabList, TabPanel } from '@mui/lab';
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { UserPosts } from '../Actions/UserPosts';
import { Calender } from '../Calender/Calender';

const DoctorTabProfile = ({
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
          <Tab sx={{ color: '#C4C4C4' }} label="Calender" value="1" />
          <Tab sx={{ color: '#C4C4C4' }} label="Posts" value="2" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Calender />
      </TabPanel>

      <TabPanel value="2">
        <UserPosts />
      </TabPanel>
    </TabContext>
  );
};
export default DoctorTabProfile;
