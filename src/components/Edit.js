import * as React from 'react';
import '../App.css'
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
export default function Edit({title,onEditSubmit}){
    const [text,setText]=useState(title.newElement);
    const handleEditSubmit=(e)=>{
       e.preventDefault();
       onEditSubmit(title.id,text);
    }
    return<div>
        <Box sx={{ pt:2,mx:"auto"}}>
         <form className='editForm' onSubmit={handleEditSubmit} >
          <TextField
           fullWidth
          name="name"
          id="fullWidth"
          type="text" value={text} onChange={e=>setText(e.target.value)} label="Type here.." multiline variant="standard" />
           <Button sx={{ maxHeight:40}} color="primary" type="submit" variant="contained">Save</Button>
           </form>
  </Box>
    </div>;
}
