import Grid from '@mui/material/Grid';
import Card from "./Card";
// import Container from '@mui/material/Container';
const Cards=({elementey,onDelete,editElements})=>{
    
    const today=new Date();
    const state={
        curDay:today.getDate() +'-'+(today.getMonth()+1)+'-'+(today.getFullYear()),
        curTime:today.getHours()+":"+today.getMinutes()+":"+today.getSeconds(),
    }
    // eslint-disable-next-line 
    const renderedElements=elementey.map((element)=>{
        if(element.newElement!=='')
           return<Grid spacing={4}>
             <Grid item>
             <Card  key={element.id} onEdit={editElements} onDelete={onDelete} state={state} element={element}/>
             </Grid>
             </Grid>
    });

    return<div className='container'>{renderedElements}</div>
}
export default Cards;