import React from 'react';
import { render} from 'react-dom';
import DropAndUpload from '../../src';
const App = () => (
    <DropAndUpload  getFiles={getFiles}/>
);

const getFiles = (files) =>{
    console.log(files)
}

render(<App />, document.getElementById("root"));