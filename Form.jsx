import { useState } from "react";

const Form = ({action}) => {
    const [myInput, setMyInput] = useState({});
    const [myInput2, setMyInput2] = useState({});

    const handleChange = (e) => {
        setMyInput(e.target.value);
    };
    const handleChange2 = (e) => {
        setMyInput2(e.target.value);
    };

    const generateList = (e) => {
        e.preventDefault();
        action(myInput);
    }

    return(
        <>
        <form onSubmit={generateList}>
            <label>Item: 
                <input type="text" name="myInput" value={myInput} onChange={handleChange}/>
            </label>
            <button type="submit">Add</button>
            <br></br>

            <label>Item: 
                <input type="text" name="myInput" value={myInput2} onChange={handleChange2}/>
            </label>
            <button type="submit">Add</button>



        </form>
        
        
        
        </>
    )










}



export default Form;