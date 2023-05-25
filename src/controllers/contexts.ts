import { createContext } from 'react';
import { UserModel } from '../models/UserModel';

export const UserContext = createContext(new UserModel());