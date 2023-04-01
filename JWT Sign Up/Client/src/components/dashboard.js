import './dashboard.css';
import { Button } from '@mui/material';
var Gg=(props)=>{
    return(
        <div>
        <div>Dashboard</div>
        <p>Admin list</p>
        <ul>
            <li>Ted</li>
            <li>Alex</li>
            <li>Johann</li>
        </ul>
        <Button variant="contained" onClick={()=>{localStorage.setItem('acckey',undefined);localStorage.setItem('Refresh',undefined);
    props.ff(0);}} color="primary">Sign Out</Button>
        </div>
    )
}
export default Gg;