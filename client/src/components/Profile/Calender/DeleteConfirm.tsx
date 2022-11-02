import { Box, Typography, Modal, TextField, Stack } from '@mui/material';
import IOpen from '../../../Interfaces/IOpen';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  outLine: 'none',
  borderRadius: '2%',
  boxShadow: 24,
  p: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const btnAdd = {
  width: '100px',
  padding: '2px',
  margin: '0 auto',
  display: 'block',
  fontSize: '20px',
  color: 'white',
  height: '40px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: 'rgb(45, 155, 155)',
};

export const ResponsiveDialog = ({
  edit,
  remove,
  open,
  setOpen,
  appointment,
  setAppointment,
}: {
  edit: () => void;
  remove: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<IOpen>>;
  setAppointment: (value: any) => void;
  appointment: { title: string; description: string };
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.currentTarget;
    setAppointment((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(prev => ({ ...prev, deletePop: false }));
      }}
    >
      <Box sx={style}>
        <Stack spacing={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{ height: '300px', gap: '20px' }}
          >
            <Typography
              color="primary"
              id="modal-modal-title"
              sx={{ textAlign: 'center' }}
              variant="h6"
              component="h2"
            >
              Add new Appointment
            </Typography>
            <TextField
              label="Title"
              size="small"
              fullWidth
              id="outlined-start-adornment"
              type="text"
              value={appointment.title}
              name="title"
              onChange={handleChange}
              sx={{
                m: 1,
                width: '25ch',
                color: '#356E6E',
              }}
            />
            <TextField
              onChange={handleChange}
              name="description"
              id="outlined-required"
              value={appointment.description}
              label="Description"
              variant="outlined"
              size="small"
              multiline
              maxRows={4}
              fullWidth
              sx={{
                m: 1,
                width: '25ch',
                color: '#356E6E',
              }}
            />
            <Box display="flex" justifyContent="space-between">
              <button type="button" onClick={edit} name="add" style={btnAdd}>
                {' '}
                Edit
              </button>
              <button
                type="button"
                onClick={remove}
                name="add"
                style={{ ...btnAdd, backgroundColor: '#D53449' }}
              >
                {' '}
                Remove
              </button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};
