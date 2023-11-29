import React from "react";
import Task from "../components/Task";
import LogoutButton from '../components/LogoutButton'; // Import the LogoutButton component
import Details from '../components/Details'
import { useAuth } from '../contexts/AuthContext';


const User = () => {

  const { username, isAuthenticated  } = useAuth();

  return (
    <div className="grid grid-cols-2">
      <div>
      <h2>Welcome, {username || 'Guest'}!</h2>
        <Task status="Completed" name="Mirac Fidanci" />
        <Task status="In Progress" name="Fikri Öksum" />
        <Task status="Not Started" name="Gabriel Montemayor" />
        {isAuthenticated && <LogoutButton />}
      </div>
      <div>
        <Details />
      </div>
    </div>
  );
};

export default User;
