import React, { useContext } from 'react';
import { UserContext } from '../controllers/contexts';

export default function DashBoard() {
    const user = useContext(UserContext);

    return (
        <>Logged In: {user.email}</>
      );
}
