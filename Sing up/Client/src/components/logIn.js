import React from "react";
import './body.css';
import './login.css';
import { Navigate } from 'react-router-dom';
import { useRef,useNavigate } from "react";
import { InputLabel,TextField, Input, FormHelperText, Button, Grid,FormControl} from '@mui/material';
var LogIn=()=>{
    var t=useRef();
    var p=useRef();
    return (<div id='Main'>
        <div id='login'>
        <TextField
        label="Nickname"
        variant="outlined"
        inputRef={t}
      />
      <br />
      <br/>
      <TextField
        label="Password"
        type='password'
        variant="outlined"
        inputRef={p}
      />
      <br />
      <br />
      <Grid container >
      <Grid>
        <Button size='medium' sx={{mr:'60px'}} variant="contained" onClick={()=>{t.current.value='';p.current.value=''}} color="secondary">Reset</Button>
        </Grid>
        <Grid item >
          <Button size='medium' onClick={()=>{
            fetch('http://localhost:3333/login',{
              method:'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({Nickname:t.current.value,Password:p.current.value})
            }).then((data)=>data.json()).then((resu)=>{console.log(resu);localStorage.setItem('signup',resu.signup);
            localStorage.setItem('refresh',resu.refresh1);
            localStorage.setItem('Nickname',resu.nickname);
            if(resu.signup)
            {
            window.location='/dashboard';
            }
          }
            ).catch((err)=>{console.log(err.message)})
          }} variant="contained" color="primary">Log In</Button>
        </Grid>
    </Grid>
        </div>
    </div>)

}
export default LogIn;