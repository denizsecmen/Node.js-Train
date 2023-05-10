import './dashboard.css';
import React from 'react';
import { Button,Box,Input} from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material/styles/createTypography';
var Dashboard=()=>{
    var item=useRef();
    var price=useRef();
    var amount=useRef();
    var image=useRef();
    async function Check(){
        var t= await fetch('http://localhost:3333/dashboard',{
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({sign:localStorage.getItem('signup')})
        }).then((data)=>{console.log(data.status);if(data.status==200){ return true;}else{return false;}})
        if(!t){
          window.location='/';
        }
        return t;
      }
    useEffect(()=>{
        Check();
    });
    var [t,p]=useState(1);
    var [open,copen]=useState(false);
    return <div className='app'>
      {t && <>
        <div>Welcome  {localStorage.getItem('Nickname')}!</div>
        <Box sx={{display:'flex',ml:'0px'}}>
        <Button sx={{mt:'20px'}} variant="contained" onClick={()=>{
            localStorage.removeItem('Nickname');
            localStorage.removeItem('signup');
            localStorage.removeItem('refresh');
            window.location='/';
        }}>Log Out</Button>
        <Box sx={{flexGrow:'1'}}></Box>
        <Button sx={{mt:'20px'}} variant="contained" color='secondary' onClick={()=>{}}>Send Data</Button>
        </Box>
        <div className='ta'></div>
        <div className='tt'>
          <Button variant="contained" onClick={()=>{copen(true);}} color='primary'>Add Item</Button>
          <Box sx={{flexGrow:1}}></Box>
          <Button variant="contained" color='secondary'>Remove Item</Button>
        </div>
        <Modal
  open={open}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
  style={{display:'flex',width:'100vw',height:'100vh'}}
  >
  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center',bgcolor:'white',width: '400px',height:'550px',position:'relative',left:'40%',top:'10%',borderRadius:'5px'}}>
    <Box sx={{width:'90%',display:'flex',flexDirection:'row',justifyContent:'right',fontSize:'32px',cursor:'pointer'}}><Box sx={{}} onClick={()=>{copen(false)}}>X</Box></Box>
    <Box sx={{width:'90%',display:'flex',flexDirection:'row',justifyContent:'center',fontSize:'32px',cursor:'pointer'}}><img style={{width:'200px',height:'200px'}} src={require('./image/i.png')}/></Box>
    <input ref={image} type='file' accept="image/png, image/jpeg" />
    <TextField inputRef={item} id="outlined-basic" sx={{width:'90%'}} label="Item name" variant="outlined" />
    <TextField inputRef={price} id="outlined-basic" sx={{width:'90%'}} label="Price($)" variant="outlined" />
    <TextField inputRef={amount} id="outlined-basic" sx={{width:'90%'}} label="Amount" variant="outlined" />
    <Box sx={{width:'90%',height:'40px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Button sx={{width:'30%'}} onClick={async()=>{
      if(!isNaN(price.current.value)&&!isNaN(amount.current.value)){
        const formData = new FormData();
        formData.append('item',item.current.value);
        formData.append('price',price.current.value);
        formData.append('amount',amount.current.value);
        formData.append('file',image.current.files[0]);
        await fetch('http://localhost:3333/item', {
            method: 'POST',
            body:formData
     }).then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong');
  }
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
    }
    else
    {
      alert('Please enter valid number!!');
    }
    }} variant="contained">Add Item</Button>
    <Button sx={{width:'30%'}} onClick={()=>{
      image.current.value=null;
      item.current.value='';
      price.current.value='';
      amount.current.value='';
      }} color="secondary" variant="contained">Reset</Button>
    </Box>
  </Box>
</Modal>
        </>
        }
    </div>
}
export default Dashboard;