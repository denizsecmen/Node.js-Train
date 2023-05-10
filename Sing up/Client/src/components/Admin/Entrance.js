import './entrance.css';
import React from 'react';
import { useRef } from 'react';
function Entrance(){
 var t=useRef();
 var p=useRef();
 return <div className='app'>
    <form>
        <div><h4>Admin Panel</h4></div>
        <div><input type='text' ref={t} placeholder='Nickname'></input></div>
        <div><input type='password' ref={p} placeholder='Password'></input></div>
        <div id='buttons'>
            <button className='login'  onClick={(e)=>{e.preventDefault();fetch('http://localhost:3333/admin',{
                method:'post',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({Nickname:t.current.value,Password:p.current.value})
            }).then((data)=>data.json())}}>Log In</button>
            <button onClick={(e)=>{e.preventDefault();t.current.value='';p.current.value=''}}>Delete</button>
        </div>
    </form>
    </div>
}
export default Entrance;