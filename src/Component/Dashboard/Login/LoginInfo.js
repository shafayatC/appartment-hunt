import React, { useContext } from 'react';
import { ManageContext } from '../../../App';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import fire from '../../../Fire';

const LoginInfo = ({title}) => {
    const [user, setUser] = useContext(ManageContext); 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const signOut=()=>{
        fire.auth().signOut().then(function() {
            setUser(''); 
            console.log("singout sucssfully")
            // Sign-out successful.
          }).catch(function(error) {
            console.log(error)
          });

          handleClose(); 
     }

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
        <div className="fwidth heading_adv">
            <h2 class="dashHeading_2">{title}</h2>
            <div className="userInfo" onClick={handleClick}>
                <img src={user.photo}/>
                <h4>{user.name}</h4>
            </div> 
        </div>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
        <MenuItem onClick={signOut}>Logout</MenuItem>
        </Menu>
</>
    );
};

export default LoginInfo;