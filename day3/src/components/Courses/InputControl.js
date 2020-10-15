import React, {useState} from "react"

const InputControl = (props) => {
    const {addHandler, resetHandler} = props
    const [title, setTitle] = useState('');

    const handleInputChange = (event) => {
        setTitle(event.target.value)
    };

    const handleAdd = () => {
        addHandler(title)
        setTitle('');
    }

    const handleReset = () => {
        resetHandler()
    }

    return (
        <div>
            <input type='text' value={title} onChange={handleInputChange} placeholder={"Please insert course name"}/>
            <button onClick={handleAdd}>Add course</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
};

export default InputControl
