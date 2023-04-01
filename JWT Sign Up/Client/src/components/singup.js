import { TextField, Input, FormHelperText, Button, Grid } from '@mui/material';
import CastleIcon from '@mui/icons-material/Castle';
import { useRef } from 'react';
var Login=()=>{
    var t = useRef();
    var p = useRef();
    var h=useRef();
    var g=useRef();
    return (
      <div className='tz'>
        <TextField
          label="Nickname"
          variant="outlined"
          inputRef={t}
        />
        <br />
        <TextField
          label="Email"
          variant="outlined"
          inputRef={p}
        />
        <br />
        <TextField 
        label="Password"
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        inputRef={h}>
        </TextField>
        <br/>
        <TextField 
        label="Password Again"
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        inputRef={g}>
        </TextField>
        <br/>
        <Grid container >
          <Grid item >
            <Button size='medium' variant="contained" color="primary" onClick={()=>{if(g.current.value!=h.current.value){alert('Passwords are not same!')}else
            {
              if(p.current.value.includes('@'))
              {
              fetch('http://localhost:7000/sign',{
                method:'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                  nickname:t.current.value,
                  email:p.current.value,
                  password:g.current.value,
                })
              }).catch((err)=>{console.log(err);alert('Error Happend!!')})
            }
            else
            {
              alert('Incorrect email type!!')
            }
            }}}>
              Submit
            </Button>
          </Grid>
          <Grid item sx={{ml:'55.65%'}}>
            <Button size='medium' variant="contained" color="secondary" onClick={() => { t.current.value = ''; p.current.value = '';g.current.value='';h.current.value=''}}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    )
}
export default Login;