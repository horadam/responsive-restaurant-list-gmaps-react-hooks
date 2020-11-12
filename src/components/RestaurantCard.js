import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import DrawerModal from './DrawerModal';

const drawerWidth = '80%';
const useStyles = makeStyles((theme) => ({
  drawer: {
          width: drawerWidth,
              flexShrink: 0,
            },
    toolbar : theme.mixins.toolbar,

     content : {
     flexGrow: 1,
    padding: theme.spacing(3),
     marginLeft: 300,
 }
}));

const RestaurantCard = (props) => {

const classes = useStyles();
const [ state, setDrawer ] = useState(false);
const handleDrawer = () => {
    setDrawer(!state);
};

    return (
        <div 
            className='restaurantCard'
            style={{backgroundImage : `url(${props.img})`}}>

            <IconButton
                color='inherit'
                aria-label = 'open drawer'
                edge = 'start'
                onClick  = {handleDrawer}
            >  
                <MenuIcon />
            </IconButton>
            <Drawer
                classes={{
                    paper: classes.drawer,
                }}
                open={state}
                onClose = {handleDrawer}
            >
                <DrawerModal {...props}/>
            </Drawer>         

                <div className='restaurantCardText'>
                    <p className='name'>{props.name}</p>
                    <p className='category'>{props.category}</p>
                </div>
        </div>
    )
}

export default RestaurantCard;