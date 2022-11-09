import { useEffect, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridColumns, GridActionsCellItem } from '@mui/x-data-grid';
import ApiServices from '../../../services/ApiService';
import IAppointment from '../../../Interfaces/IAppointment';

export const UserAppointment = () => {
  const [userAppointment, setUserAppointment] = useState<IAppointment[]>([]);

  const deleteAppoin = async (id: number) => {
    const { data } = await ApiServices.destroy(`/Appointment/${id}`);
    if (data.done)
      setUserAppointment(prev => {
        return prev.filter(ele => ele.id !== id);
      });
  };
  useEffect(() => {
    const getUserAppoin = async () => {
      const { data } = await ApiServices.get(`/Appointment`);
      setUserAppointment(data.userAppointment);
    };
    getUserAppoin();
  }, []);

  const columns = useMemo<GridColumns<IAppointment>>(
    () => [
      { field: 'title', headerName: 'Title', width: 130 },
      { field: 'description', headerName: 'Description', width: 150 },
      {
        field: 'status',
        headerName: 'Status',
        width: 130,
      },
      {
        field: 'start',
        headerName: 'Start',
        width: 160,
      },
      {
        field: '',
        headerName: 'Doctor Name',
        valueGetter: appin => appin.row.User,
        width: 160,
      },
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteAppoin(params.id)}
          />,
        ],
      },
    ],
    [],
  );
  return (
    <Box display="flex" justifyContent="center">
      <Box
        sx={{
          height: 350,
          width: '50%',
        }}
      >
        <DataGrid
          rows={userAppointment}
          columns={columns}
          sx={{ overflowX: 'none' }}
        />
      </Box>
    </Box>
  );
};
