import React, { useState } from 'react';

export default function Accordion(props) {
    const [isCollapsed, setIscollapse] =  useState(false);

    return(
        <div className="accordion">
           <h3 onClick={()=> { setIscollapse(!isCollapsed)}}>Header</h3>
            { isCollapsed && <p>{props}</p>}
        </div>
    )
}