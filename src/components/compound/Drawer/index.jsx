import React, { useState } from 'react';
import { Drawer, Box, IconButton } from '@mui/material';
import { List, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { ShoppingCart, FavoriteBorder, CompareArrows, Storefront } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Logo from '../Logo'
import { makeStyles } from '@mui/styles';
import { Home, Contacts, Info } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.scss'
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#aeccc56b !important',
    }
})
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -5,
        top: 2,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        background: '#088178',
        color: 'white'
    },
}));
const MuiDrawer = () => {
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const classes = useStyles()
    const appData = useSelector(state => state.appData.value)
    const appDataArr = [appData.cart.length === 0 ? '0' : appData.cart.length , appData.wishlist.length === 0 ? '0' : appData.wishlist.length ,appData.compare.length === 0 ? '0' : appData.compare.length]
    const arrIcon = [<Home />, <Storefront />, <Contacts />, <Info />, <ShoppingCart />, <FavoriteBorder />, <CompareArrows />]
    const arrlinks = ['/', 'shop', 'contact', 'about', 'shopping-cart', 'wishlist', 'compare']
    return (
        <>
            {
                location.pathname === `/login` || location.pathname === `/register` ?
                    <></> :
                    <div className={styles.container}>
                        <Logo />
                        <IconButton className={classes.btn} size='large' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                            <Box p={2} width='250px' textAlign='center' role='presentation'>
                                <Logo />
                                <List sx={{ marginTop: '20px' }}>
                                    {['Home', 'Products', 'Contact Us', 'About Us'].map((text, index) => (
                                        <NavLink to={arrlinks[index]} className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.inactive}`)}>
                                            <ListItem button key={text}>
                                                <ListItemIcon>
                                                    {arrIcon[index]}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        </NavLink>
                                    ))}
                                </List>
                                <Divider />
                                <List>
                                    {['Shopping Cart', 'WishList', 'Compare'].map((text, index) => (
                                        <NavLink to={arrlinks[index + 4]} className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.inactive}`)}>
                                            <ListItem button key={text}>
                                                <ListItemIcon>
                                                    <StyledBadge badgeContent={appDataArr[index]} >
                                                        {arrIcon[index + 4]}
                                                    </StyledBadge>
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        </NavLink>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </div>
            }
        </>
    );
}
export default MuiDrawer