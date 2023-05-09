import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet/greet';
import Person from './components/Person/Person';
import PersonList from './components/PersonList/PersonList';
import Status from './components/Status/Status';
import Heading from './components/Heading/Heading';
import Oscar from './components/Oscar/Oscar';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import LoggedIn from './components/LoggedIn/LoggedIn';
import User from './components/LoggedIn/User';
import Counter from './components/counter/counter';
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box';
import Home from './components/Home/Home';
import { OpenAPI } from './flexcub-api';
import MultipleSelect from './components/MultipleSelect/MutipleSelect';


function App() {
  OpenAPI.BASE=process.env.REACT_APP_API_URL as string;

const personName ={
  first: 'Bruce',
  last : 'Lee'
}
const persons =[{
  first: 'Bruce',
  last : 'wayne'
},
{
  first: 'prince',
  last : 'clark'
},
{
  first: 'mark',
  last : 'gabb'
}]

  return (
    <div >
{/* <Greet name="naveen" messageCount={56}></Greet>
<Person name={personName}></Person>
<PersonList names={persons}></PersonList>
<Status status='error'></Status>
<Oscar>
<Heading>placeholder data</Heading>
</Oscar>
<Button handleClick={()=>{
  console.log('Button Clicked');
}}></Button>
<Input value='' handleChange={(event)=>{console.log(event)}}></Input> */}
{/* <User></User> */}
{/* <Counter></Counter> */}
{/* <ThemeContextProvider>
  <Box></Box>
</ThemeContextProvider> */}
{/* <UserContextProvider>
  <User/>
</UserContextProvider> */}
{/* <MutableRef></MutableRef> */}
{/* <Counter></Counter>
<ThemeContextProvider>
  <Box></Box>
</ThemeContextProvider> */}
{/* 
<Home></Home> */}
<MultipleSelect></MultipleSelect>
    </div>
  );
}

export default App;
