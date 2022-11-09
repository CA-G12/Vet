import { Box, Typography, Modal, Stack, Badge } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { authContext } from '../../../hooks/useAuth';
import ApiServices from '../../../services/ApiService';
import IAppointment from '../../../Interfaces/IAppointment';
import PendingCard from './PendingCard';
import IOpen from '../../../Interfaces/IOpen';
import style from '../../../helpers/PopStyle';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 3px',
    color: '#356E6E',
    background: '#FDD853',
    fontSize: '10px',
    width: '5px',
  },
}));
const PendingPopup = ({
  open,
  setOpen,
  setAppointment,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<IOpen>>;
  setAppointment: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { user } = useContext(authContext);
  const [pendingAppointment, setPendingAppointment] = useState<IAppointment[]>(
    [],
  );

  useEffect(() => {
    const pending = async () => {
      const { data } = await ApiServices.get(
        `/pending-appointment/${user?.id}`,
      );
      setPendingAppointment(() => data.pending);
    };
    pending();
  }, [user?.id]);

  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" sx={{ width: '95%' }}>
        <StyledBadge badgeContent={pendingAppointment.length}>
          <button
            type="button"
            onClick={() => {
              setOpen(prev => ({ ...prev, pendingPop: true }));
            }}
            style={{
              backgroundColor: '#D53449',
              color: 'white',
              border: 'none',
              height: '40px',
              marginBottom: '5px',
              width: '150px',
              borderRadius: '5px',
            }}
          >
            Pending
          </button>
        </StyledBadge>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(prev => ({ ...prev, pendingPop: false }))}
      >
        <Box sx={{ ...style, width: 400, height: 400 }}>
          <Stack spacing={2}>
            <Box
              display="flex"
              flexDirection="column"
              sx={{ height: '300px', gap: '20px' }}
            >
              <Typography
                color="primary"
                id="modal-modal-title"
                sx={{ textAlign: 'center' }}
                variant="h6"
                component="h2"
              >
                Pending Appointment
              </Typography>
              {pendingAppointment.length === 0 ? (
                <Typography color="#808080">No Pending Appointment</Typography>
              ) : (
                <PendingCard
                  setPendingAppointment={setPendingAppointment}
                  pendingAppointment={pendingAppointment}
                  setAppointment={setAppointment}
                />
              )}
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
export default PendingPopup;
