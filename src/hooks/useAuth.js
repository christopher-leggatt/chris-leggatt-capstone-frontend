import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../state/authSlice';
import jwtDecode from 'jwt-decode';
import React from 'react';

const useAuth = () => {
    const token = useSelector(selectCurrentToken);
    let isAdmin = false;
    let isMember = false;
    let status = "default";

    if (token) {
        const decoded = jwtDecode(token);
        const{ username, roles } = decoded.memberInfo;

        isAdmin = roles.includes('Admin');
        isMember = roles.include('member');

        if (isAdmin) status = 'Admin';
        if (isMember) status = 'member';

        return { username, roles, status, isAdmin, isMember };
    }
  return { username: '', roles: [], isAdmin, isMember, status };
}

export default useAuth;
