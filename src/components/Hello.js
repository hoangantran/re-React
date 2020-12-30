import React, { useState, useEffect } from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Alert, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import PropTypes from 'prop-types';

export default function Hello(){
    const [name, setName] = useState('');
    const inputElement = React.createRef();


    function changeName(e) {
        setName(e.target.value);
    }

    useEffect(() => {
        inputElement.current.focus();
    });
    
    
    return(
        <div className="hello-header">
            <Alert color="primary">
                Nice to meet you {name}
            </Alert>
            <input ref={inputElement} type="email" name="email" id="exampleEmail" placeholder="Write your name . . ." onChange={changeName}/>
            <br></br>
            
        </div>
    )
}

// Hello.PropTypes = {
//     name : PropTypes.string
// }