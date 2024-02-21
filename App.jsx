import { useState } from 'react'

import './App.css'
import Form from './components/Form'
// import List from './components/List'

function App() {
  const [someText, setSomeText] = useState();
  const [shoppingList, setShoppingList] = useState({});

  const generateList = (listItems) =>{
    setShoppingList(listItems);
  }
  return (
    <>
     
        <div className='card'>
      
        <h1>Shopping List</h1>
        <Form action = {generateList}/>
        <p>{someText}</p>
        </div>
       
        
        
       
     
   </>  
   
  )
}

export default App
