import styles from './layout.module.css';
import React from 'react';
import './layout.css';
import {AppBar,Toolbar,Button} from '@mui/material';
import Link from '@mui/material/Link';
var Layout=(props)=>{
    return <AppBar sx={{display:'flex',flexDirection:'row',width:'100vw', zIndex:'1',overflow:'hidden'}} height='1%' position='sticky'>
        <Toolbar sx={{fontSize:'28px'}}>Touch Market</Toolbar>
        <Toolbar><Link href='/' color='rgb(255,255,255)' underline="none">Main Menu</Link></Toolbar>
        <Toolbar><Link  href='/About' color='rgb(255,255,255)' underline="none">About</Link></Toolbar>
        <Toolbar><Link href='/contract' color='rgb(255,255,255)' underline="none">Contract</Link></Toolbar>
        <Toolbar sx={{flexGrow:'1'}}></Toolbar>
        <Toolbar>
        <Link href='sign'><Button  variant="contained" color='secondary'>Sign Up</Button>
        </Link>
        </Toolbar>
        <Toolbar>
        <Link href='login'>
        <Button variant="contained" color='error'>Log In</Button>
        </Link>
        </Toolbar>
    </AppBar>
}
export default Layout;