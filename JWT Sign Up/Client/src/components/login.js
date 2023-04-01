import { FormControl } from '@mui/material';
import { TextField, Input, FormHelperText, Button, Grid } from '@mui/material';
import { useRef } from 'react';
import './sing.css';
import { margin } from '@mui/system';
var Signup = () => {
  var t = useRef();
  var p = useRef();

  return (
    <div className='tz'>
      <TextField
        label="Nickname"
        variant="outlined"
        inputRef={t}
      />
      <br />
      <TextField
        label="Password"
        type='password'
        variant="outlined"
        inputRef={p}
      />
      <br />
      <Grid container >
        <Grid item >
          <Button size='medium' variant="contained" color="primary" onClick={()=>{
            var f={nickname:t.current.value,password:p.current.value};
            fetch(
              'http://localhost:7000/login',{
                method:'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                  nickname:t.current.value,
                  password:p.current.value,
                }),
              }
            ).then((res)=>res.json()).then( async (data)=>{console.log(data);
              localStorage.setItem('acckey',JSON.parse(data).Acckey);
              localStorage.setItem('Refresh',JSON.parse(data).Refresh);
          }).catch((err)=>{console.log(err);});
          }}>
            Submit
          </Button>
        </Grid>
        <Grid item sx={{ml:'55.7%'}}>
          <Button size='medium' variant="contained" color="secondary" onClick={() => { t.current.value = ''; p.current.value = ''; }}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Signup;