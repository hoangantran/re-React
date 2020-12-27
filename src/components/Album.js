import './Style.css';
//import classNames from 'classnames/bind';
import React, { useState } from 'react';
function Album(props) {
    const [className, setClass] = useState('list');

    return (
    <table>
        <thead>
            <tr>
                <td>Image 1</td>
                <td>Image 2</td>
                <td>Image 3</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <a href="#" onClick={() => setClass(className + ' small')}>
                        <img src={props.url} className={className} width="200"/>
                    </a>
                </td>
                <td>
                    <a href="#" onClick={() => setClass(className + ' small')}>
                        <img src={props.url} className={className} width="200"/>
                    </a>
                </td>
                <td>
                    <a href="#" onClick={() => setClass(className + ' small')}>
                        <img src={props.url} className={className} width="200"/>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
  );
}

export default Album;