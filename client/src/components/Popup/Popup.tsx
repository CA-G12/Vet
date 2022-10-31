import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography, Modal } from '@mui/material';

import LabTabs from './Tabs';

import 'react-toastify/dist/ReactToastify.css';

const style = {
  zIndex: '99999',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: '2%',
  boxShadow: 24,
  p: 1,
};
const theme = createTheme({
  palette: {
    primary: {
      light: '#66cccc',
      main: '#2D9B9B',
      dark: '#006c6d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6a74',
      main: '#d53449',
      dark: '#9e0022',
      contrastText: '#fff',
    },
  },
});
type Propss = {
  open: any;
  setOpen: any;
};
const PopUp = (propss: Propss) => {
  const { open, setOpen } = propss;
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          sx={{ zIndex: '99999' }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img src="./pawsLogo.png" alt="logo" width="40px" height="40px" />
              <section className="tabs">
                <LabTabs open={setOpen} />
              </section>
            </Typography>
          </Box>
        </Modal>
      </div>
    </ThemeProvider>
  );
};
export default PopUp;
