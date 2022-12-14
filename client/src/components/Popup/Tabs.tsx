import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SignUp from '../SignUp/SignUpForm';
import SignIn from '../SignIn/SignInForm';
import { authContext } from '../../hooks/useAuth';
import './style.css';

const LabTabs = () => {
  const { value, setValue } = React.useContext(authContext);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TabList onChange={handleChange} className="TabActive">
            <Tab sx={{ color: '#C4C4C4' }} label="Sign-up" value="1" />
            <Tab sx={{ color: '#C4C4C4' }} label="Sign-in" value="2" />
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
