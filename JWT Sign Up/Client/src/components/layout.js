import './layout.css';
import { Button } from '@mui/material';
import { height } from '@mui/system';
var Layout=(props)=>{

    return <div className='layout'>
              <Button size='medium' variant="contained" color="primary" onClick={()=>props.ffds("1")} sx={{width:80,height:30,fontSize:11,mt:0.4,ml:5}} >
            Sign Up
          </Button>
          <Button size='medium' variant="contained" color="primary" onClick={()=>{props.ffds('0')}} sx={{width:80,height:30,fontSize:11,ml:10,mt:0.4}} >
           Log In
          </Button>
          <Button size='medium' variant="contained" color="primary" onClick={()=>{console.log(localStorage.getItem('acckey').length);
          if(localStorage.getItem('acckey').length==9){
           alert('Key not found'); 
          }else{            
            fetch('http://localhost:7000/auth',{
            method:'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              acckey:localStorage.getItem('acckey'),
            })
          }).then((data)=>{props.ffds('2')}).catch((err)=>{alert('Cannot Validate Key!')})}}} sx={{width:80,height:30,fontSize:11,ml:10,mt:0.4}} >
           Dashboard
          </Button>
    </div>
}
export default Layout;