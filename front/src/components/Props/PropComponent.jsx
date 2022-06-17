// import { useState } from "react";

// I can be told what to display using props
export const PropComponent = (props) => {
    // Instead of choosing via state
    // const [name, setname] = useState(' ');
    // const [age, setAge] = useState(0);
    // const [bio, setBio] = useState(' ');
    
    return(
        <>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            {props.children}
        </>
    );
}