import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./style.scss"; 
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState(true); 
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  
    return (
        <>
    <div className="header_wrap fwidth">

        <div className="container">

            <div className="row">

                    <div className="col-md-4 col-sm-12">
                        <div className="logo">
                            <Link to="/"><img className="fwidth" src={require('./img/logo.png').default}/></Link>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-12 menuArea">
                        <div  className="menuWrap align-middle">
                            <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            {/* 
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Service</Link></li>
                            <li><Link to="/">Concerns</Link></li>
                            <li><Link to="/">Event</Link></li>
                            <li><Link to="/">Contact</Link></li>
                             */}
                            </ul>
                            <Link to="/booking-list" className="loginBtn">Login</Link>
                        </div>
                        <div className="mobileMenu">
                            <Button
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                className="btnMenu"
                                >
                                {mobileMenu && <MenuIcon/>}
                                {!mobileMenu && <CloseIcon/>}
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClickAway={handleClose}><Link to="/">Home</Link></MenuItem>
                                        <MenuItem onClickAway={handleClose}><Link to="/booking-list">Login</Link></MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                            </Popper>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    );
};

export default Header;