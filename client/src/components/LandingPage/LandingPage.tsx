import { Box } from '@mui/material';
import { ProjectServices } from './ProjectServices/ProjectServices';
import { WelcomeSection } from './WelcomeSection/WelcomeSection';

export const LandingPage = () => (
  <Box>
    <WelcomeSection />
    <ProjectServices />
  </Box>
);
