// @mui
import {
  Badge,
  IconButton,
} from '@mui/material';
// components
import Iconify from '../../../components/iconify';


export default function NotificationsPopover() {
  const totalUnRead = "2";

  return (
    <>
      <IconButton color={open ? 'primary' : 'default'}  sx={{ width: 40, height: 40 }}>
        <Badge badgeContent={totalUnRead} color="error">
          <Iconify icon="eva:bell-fill" />
        </Badge>
      </IconButton>
    </>
  );
}
