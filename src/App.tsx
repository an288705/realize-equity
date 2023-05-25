import React from 'react';
import { UserModel } from './models/UserModel';
import { UserContext } from './controllers/contexts';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import DashBoard from './views/Dashboard';
import './App.css';

function App() {
  const user = new UserModel();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/premium-themes/onepirate/">
        <Route index element={<Home/>}/>
        <Route path="/premium-themes/onepirate/sign-in/" element={<SignIn/>}/>
        <Route path="/premium-themes/onepirate/sign-up/" element={<SignUp/>}/>
        <Route path="/premium-themes/onepirate/dashboard/" element={<DashBoard/>}/>
      </Route>
    )
  );

  return (
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
