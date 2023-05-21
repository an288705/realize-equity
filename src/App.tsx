import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Views/Home';
import SignIn from './Views/SignIn';
import SignUp from './Views/SignUp';
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/premium-themes/onepirate/">
        <Route index element={<Home/>}/>
        <Route path="/premium-themes/onepirate/sign-in/" element={<SignIn/>}/>
        <Route path="/premium-themes/onepirate/sign-up/" element={<SignUp/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
