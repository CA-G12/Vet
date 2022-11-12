import { Box, Typography, Modal, TextField, Stack } from '@mui/material';
import IOpen from '../../../Interfaces/IOpen';
import style from '../../../helpers/PopStyle';

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

export const EditPopup = ({
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
              Edit Appointment
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
