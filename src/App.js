import {useEffect} from 'react';
import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import {useState} from 'react'
import Input from './components/Input';
import Cards from './components/Cards';
import PacmanLoader from "react-spinners/PacmanLoader";
 // eslint-disable-next-line
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,Grid,ToolBar,Container} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const getLocalItems=()=>{
  let elements=localStorage.getItem('elements');
  console.log(elements)

  if(elements){
    return JSON.parse(localStorage.getItem('elements'));
  }else{
    return [];
  }
}
function App(){
  const[loader,setLoader]=useState(false);
  useEffect(()=>{
    setLoader(true);
    setTimeout(() => {
       setLoader(false);
    }, 3000);
  },[])
  const [elements,setElements]=useState(getLocalItems());
  
  const addElement=(newElement)=>{
    const updateElements=[...elements,{
      id:~~(Math.random()*999),newElement
    }];
    setElements(updateElements);
  }
  const deleteElements=(id)=>{
    const updateElements=elements.filter((element)=>{
      return element.id!==id;
    })
    console.log("delete function is called")
    setElements(updateElements);
  }
  const editElements=(id,newElement)=>{
    const updateElements=elements.map((element)=>{
       if(element.id===id){
        return {...element,newElement}
       }
       return element;
    });
    setElements(updateElements);
  }
  useEffect(()=>{
    localStorage.setItem('elements',JSON.stringify(elements))
   },[elements])

  
  return (<div className='popup'>
    {loader ?
    <PacmanLoader
    // sx={{ display: 'flex', margin: 'auto'}}
    className='loader'
    color={'#36d7b7'}
    loading={loader}
    size={40}
    aria-label="Loading Spinner"
    data-testid="loader"
    />: 
      <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container   maxWidth="sm">
        <Typography  align="center"
              color="text.primary"
              gutterBottom sx={{ pt:4}} display="flex" justifyContent="center" alignItems="center" variant="h4">Reading List</Typography>
        <Input onSubmit={addElement}/>
        <Cards  editElements={editElements} elementey={elements} onDelete={deleteElements}/>
      </Container>
      </ThemeProvider>
      }
      
      </div>
      
  );
}

export default App;
