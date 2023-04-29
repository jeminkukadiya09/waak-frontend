import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import {BsFillSunFill, BsMoon} from 'react-icons/bs'
// utils
import { bgBlur } from '../../../utility/Styles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import './style.css';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav,  mytheme, switchTheme}) {
  return (
    <StyledRoot style={{
      backgroundColor: `${
        mytheme === "light" ? "#ffffff" : "#1e1e1e"
      }`,
    }}>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <div style={{marginRight:"10px"}}>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            style={{ transition: "all 200ms" }}
            onChange={switchTheme}
            checked={mytheme === "dark" ? true : false}
          />
          <label htmlFor="checkbox" className="label">
            {/* <i className="fas fa-moon fa-sm"></i> */}
            <BsMoon size={12} />
            <BsFillSunFill color='yellow' size={12} />
            {/* <i className="fas fa-sun fa-sm"></i> */}
            <div className="ball" />
          </label>
        </div>
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
        
      </StyledToolbar>
    </StyledRoot>
  );
}
