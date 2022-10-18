import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SignUp from '../SignUp/SignUpForm';
import SignIn from '../SignIn/SignInForm';

const LabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#356E6E' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" className="TabActive">
            <Tab label="Sign-up" value="1" sx={{ color: '#C4C4C4' }} />
            <Tab label="Sign-in" value="2" sx={{ color: '#C4C4C4' }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <SignUp />
        </TabPanel>
        <TabPanel value="2">
          <SignIn />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default LabTabs;
