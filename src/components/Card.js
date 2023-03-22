import Edit from "./Edit";
import {useState} from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tilt from 'react-parallax-tilt';
import '../App.css';

export default function Carde({element,onDelete,state,onEdit}){
    const [edit,setEdit]=useState(false)
    const handleClick=()=>{
        onDelete(element.id);
    }
    const handleEdit=()=>{
        setEdit(!edit)
    }
    const handleEditSubmit=(id,newTitle)=>{
        setEdit(false);
        onEdit(id,newTitle)
    }
    let content=<CardContent sx={{ flexGrow: 1, mx:"auto" }}>
        <Typography gutterBottom variant="h6" component="h2">
        {element.newElement}
        </Typography>
        
    <Typography className="td">
       <Typography>Time: {state.curTime}</Typography>
       <Typography>Date: {state.curDay}</Typography>
    </Typography></CardContent>

    if(edit){
        content=<Edit onEditSubmit={handleEditSubmit} title={element}/>
    }
    return<>
     <Tilt>
     <Card className="cardbox" sx={{ pt:4, maxWidth: 345}}>
     <CardMedia
        sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        title="moment pic"
        alt="notes"
        image={`https://picsum.photos/seed/${element.id}/300/200`}
      /> 
      <CardContent>
        {content}
      </CardContent>
      <CardActions>
        <Button variant="contained" startIcon={<EditIcon />} onClick={handleEdit}>Edit</Button>
        <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleClick}>Delete</Button>
      </CardActions>
     </Card>
     </Tilt>
    {/* <div className="card">
        <img alt="notes" src={`https://picsum.photos/seed/${element.id}/300/200`}/>
        <div>{content}</div>
        <button onClick={handleEdit}>EDIT</button>
        <button onClick={handleClick}>DELETE</button>
</div> */}
</>
}