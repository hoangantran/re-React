import React, { useState } from 'react';

export default function Hello(){
    const [name, setName] = useState('');
    function changeName(e) {
        setName(e.target.value);
    }
    return(
        <div>
            <p>Hello, {name}</p>
            <input type="text" placeholder="Nhập tên của bạn..." onChange={changeName}/>
        </div>
    )
}