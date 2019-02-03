import React from 'react';
import { Register } from "./Register";

export class Main extends React.Component {
    // under the topbar
    render() {
        return (
            <div className='main'>
                <Register/>
            </div>
        );
    }
}