import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const cookies = useMemo(() => new Cookies(), []);

  useEffect(() => {
    const jwt = cookies.get('jwt');
    if (jwt) {
      // If a JWT cookie is present, decode it to get user information.
      const decodedUser = jwtDecode(jwt);
      setUser(decodedUser);
    }
  }, [cookies]);

  const Login = (jwt) => {
    // Create an instance of universal-cookie
    // Decode the JWT
    const decodedJWT = jwtDecode(jwt);

    // Store the JWT in a cookie
    cookies.set('jwt', jwt, {
      path: '/',
      expires: new Date(decodedJWT.exp * 1000),
    });

    // Update the user state
    setUser(decodedJWT);

    // You can access JWT claims in the decodedJWT object
    console.log('Decoded JWT:', decodedJWT);
  };

  const logout = () => {
    // Remove the JWT cookie.
    cookies.remove('jwt', { path: '/' });

    // Set the user state to null.
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logout, Login }}>
      {children}
    </UserContext.Provider>
  );
};
