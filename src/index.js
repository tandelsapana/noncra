import ReactDOM from 'react-dom';
import React from 'react';


const App = () => {
    return (
        <>
        <h1> Hello from App component</h1>
        </>
     );
}
 
let rootNode = ReactDOM.createRoot(document.getElementById('root'));
rootNode.render(<App/>);
