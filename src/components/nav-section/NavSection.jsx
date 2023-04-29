import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import {
  Box,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import {AiOutlineDown} from 'react-icons/ai';
import {IoIosArrowUp} from 'react-icons/io';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { useState } from "react";

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
  mytheme: PropTypes.string,
  switchTheme: PropTypes.Function,
};

export default function NavSection({
  data = [],
  mytheme,
  switchTheme,
  ...other
}) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem
          mytheme={mytheme} switchTheme={switchTheme}
            key={item.title}
            item={item}
            // style={{ color: `${mytheme === "light" ? "#000" : "#fff"}` }}
          />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  mytheme: PropTypes.string,
  switchTheme: PropTypes.Function,
};

function NavItem({ item, mytheme, switchTheme }) {
  const { title, path, icon, info, isOption, option } = item;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {!isOption ? (
        <StyledNavItem
          component={RouterLink}
          to={path}
          sx={{
            "&.active": {
              color: "text.primary",
              bgcolor: "action.selected",
              fontWeight: "fontWeightBold",
            },
          }}
          style={{ color: `${mytheme === "light" ? "#000" : "#fff"}` }}
        >
          <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

          <ListItemText disableTypography primary={title} />

          {info && info}
        </StyledNavItem>
      ) : (
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon style={{ minWidth: "unset" }} className="list__Items">
              <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
              {/* <InboxIcon /> */}
            </ListItemIcon>
            <ListItemText
              primary={title}
              style={{ color: `${mytheme === "light" ? "#000" : "#fff"}` }}
            />
            {open ? <AiOutlineDown color = {`${mytheme === "light" ? "" : "#fff"}`} /> : <IoIosArrowUp color = {`${mytheme === "light" ? "" : "#fff"}`} />}
          </ListItemButton>
          {option.map((item, index) => {
            return (
              <>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon style={{ minWidth: "unset" }}>
                        <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
                        {/* <StarBorder /> */}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            );
          })}
        </>
      )}
    </>
  );
}
