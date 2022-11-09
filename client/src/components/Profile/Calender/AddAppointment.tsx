import { Box, Typography, Modal, TextField, Stack } from '@mui/material';
import React from 'react';
import PopStyle from '../../../helpers/PopStyle';

const style = {
  width: 350,
  ...PopStyle,
};
const btnAdd = {
  width: '150px',
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

const AddAppointment = ({
  open,
  onClose,
  onClick,
  handleState,
}: {
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  handleState: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}) => (
  <Modal open={open} onClose={onClose}>
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
            name="title"
            onChange={handleState}
            sx={{
              m: 1,
              width: '25ch',
              color: '#356E6E',
            }}
          />
          <TextField
            onChange={handleState}
            name="description"
            id="outlined-required"
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
          <button type="button" onClick={onClick} name="add" style={btnAdd}>
            Add
          </button>
        </Box>
      </Stack>
    </Box>
  </Modal>
);
export default AddAppointment;
