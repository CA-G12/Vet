import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Typography, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import IAppointment from '../../../Interfaces/IAppointment';
import Username from '../../UserInfo';
import ApiServices from '../../../services/ApiService';

const PendingCard = ({
  pendingAppointment,
  setAppointment,
  setPendingAppointment,
}: {
  pendingAppointment: IAppointment[];
  setPendingAppointment: React.Dispatch<React.SetStateAction<IAppointment[]>>;
  setAppointment: React.Dispatch<React.SetStateAction<any>>;
}) => (
  <>
    {pendingAppointment.map(ele => (
      <Box key={ele.id}>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Username user={ele.User} />
          <Box>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={async () => {
                try {
                  const { data } = await ApiServices.put(
                    '/pending-appointment',
                    {
                      id: ele.id,
                      DoctorId: ele.DoctorId,
                      status: 'ACCEPTED',
                    },
                  );
                  const app = {
                    id: data.id,
                    start: data.start,
                    title: data.title,
                  };
                  setPendingAppointment(prev =>
                    prev.filter((eleApp: any) => data.id !== eleApp.id),
                  );
                  setAppointment((prev: any) => prev.concat(app));

                  toast.success('Added Successful');
                } catch (error: any) {
                  toast.error(error.msg);
                }
              }}
            >
              <CheckIcon
                fontSize="small"
                sx={{
                  backgroundColor: 'green',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  color: 'white',
                }}
              />
            </IconButton>
            <IconButton
              onClick={async () => {
                try {
                  await ApiServices.put('/pending-appointment', {
                    id: ele.id,
                    DoctorId: ele.DoctorId,
                    status: 'REJECTED',
                  });
                  setPendingAppointment(prev =>
                    prev.filter((eleApp: any) => eleApp.id !== ele.id),
                  );
                  toast.success('Removed Successful');
                } catch (error: any) {
                  toast.error(error.msg);
                }
              }}
              aria-label="delete"
              size="small"
            >
              <ClearIcon
                fontSize="small"
                sx={{
                  backgroundColor: '#D53449',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  color: 'white',
                }}
              />
            </IconButton>
          </Box>
        </Stack>
        <Typography>{ele.title}</Typography>
        {/* <Typography>{ele.end}</Typography>
        <Typography>{ele.start}</Typography> */}

        <Typography>{ele.description}</Typography>
      </Box>
    ))}
  </>
);
export default PendingCard;
