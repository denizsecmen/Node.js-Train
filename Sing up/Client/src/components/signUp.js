import React from "react";
import './sing.css';
import { useRef } from "react";
import { InputLabel,TextField, Input, FormHelperText, Button, Grid,FormControl} from '@mui/material';
var SingUp=()=>{
    var t=useRef();
    var p=useRef();
    var z=useRef();
    var m=useRef();
    return <div id='main'>
        <div id='sign' style={{marginLeft:'40%',marginTop:'8%'}}>
            <TextField        
            label="Nickname"
        variant="outlined"
        inputRef={t}></TextField>
        <br/>
        <br/>
        <TextField        
            label="Password"
        variant="outlined"
        type="password"
        inputRef={p}></TextField>
        <br/>
        <br/>
        <TextField        
            label="Password again"
        variant="outlined"
        type="password"
        inputRef={z}></TextField>
        <br/>
        <br/>
        <TextField        
            label="email"
        variant="outlined"
        type="email"
        inputRef={m}></TextField>
        <br/>
        <br/>
          <Grid container >
      <Grid>
        <Button size='medium' sx={{mr:'48px'}} variant="contained" onClick={()=>{t.current.value='';p.current.value='';z.current.value='';m.current.value=''}} color="secondary">Reset</Button>
        </Grid>
        <Grid item >
          <Button size='medium' variant="contained" onClick={()=>{
            fetch('http://localhost:3333/signup',{
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({nickname:t.current.value,password:p.current.value,passworda:z.current.value,email:m.current.value})
            }).then((res)=>res.json()).then((data)=>{alert(data.err);console.log(data.err);}).catch((err)=>{console.log(err.message)});
          }} color="primary">Sign Up</Button>
        </Grid>
    </Grid>
        </div>

    </div>

}
export default SingUp;