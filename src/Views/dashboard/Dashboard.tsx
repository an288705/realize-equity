import React, { useContext } from 'react';
import { UserContext } from '../../controllers/contexts';
import Navbar from './Navbar';
import AccountChart from './AccountChart';

export default function DashBoard() {
    const user = useContext(UserContext);

    return (
        <>
          <Navbar />
          <>Logged In: {user.email}</>
          <AccountChart />
        </>
      );
}
