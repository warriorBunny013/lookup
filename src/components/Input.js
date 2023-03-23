import {useState} from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import { FormControl } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeContext, ThemeProvider } from '@emotion/react';
const Input=({onSubmit})=>{
    const [text,setText]=useState('');
    const handleSubmit=(event)=>{
     event.preventDefault();
     onSubmit(text);
     setText('');
    }
    return <Box sx={{ py:2, mx:'auto', width: 200}}>
         
           <form  onSubmit={handleSubmit} >
            <TextField
            sx={{}}
            name="name"
           
            autoComplete='off'
            type="text" value={text} onChange={e=>setText(e.target.value)} id="outlined-basic" label="Type here.." variant="outlined" />
            {/* <input value={text} onChange={e=>setText(e.target.value)}/> */}
             <Button fullWidth color="primary" type="submit" variant="contained">Add</Button>
             {/* <button>Submit</button> */}
             </form>
    </Box>
}
export default Input;