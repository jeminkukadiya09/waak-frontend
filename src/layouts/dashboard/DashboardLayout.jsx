import { useState } from 'react';
import DashboardAppPage from '../../pages/DashboardAppPage';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
//
import Header from './header';
import Nav from './nav';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout({mytheme, switchTheme}) {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} mytheme={mytheme} switchTheme={switchTheme}/>

      <Nav openNav={open} onCloseNav={() => setOpen(false)} mytheme={mytheme} switchTheme={switchTheme} />

      <Main style={{backgroundColor:`${mytheme === 'light' ? "" : "#1e1e1e" }`}}>
      <DashboardAppPage mytheme={mytheme} switchTheme={switchTheme} />

        {/* <Outlet /> */}
      </Main>
    </StyledRoot>
  );
}
