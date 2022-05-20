import React from 'react';
import MyContextProvider from './contexts/MyContext';
import Dashboard from './components/Dashboard';
function App() { return (<MyContextProvider><Dashboard/></MyContextProvider>);}
export default App;


