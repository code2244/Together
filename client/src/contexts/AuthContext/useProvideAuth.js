import { useState, useEffect } from "react";
import DataService from "services/dataService";

// Everything related to the user context will be inside of here: (CRUD)
// Allow us to check and modify any methods/functions in one place.
const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  console.log(user)

  // Check if there is already a user session
  useEffect(() => {
    // If so, save user's information to the context
    DataService.getCurrentUser().then((response) => {
      setUser(response.data);
    });
  }, []);

  const logout = () => {
    DataService.logout();
    setUser(null);
  };

  // To conditional render a component depending on if user's authenticated
  const isAuthenticated = () => {
    return !!user;
  };

  // Check if a user is logging in for the first time.
  const needsToBeWelcome = (user) => user.needsToBeWelcome;

  return {
    user,
    logout,
    isAuthenticated,
    needsToBeWelcome
  };
};

export default useProvideAuth;
