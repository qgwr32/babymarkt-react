import { createContext, useReducer } from 'react';
import Layout from '../components/Layout'

const defaultUser = {
  password: "asdf",
  firstName: "Jim",
  babypoints: 454,
  cartSize: 6,
  wishlistCount: 2,
};

export const UserContext = createContext();

export default function Home() {
  const userReducer = useReducer(userService, {});
  return (
    <UserContext.Provider value={userReducer}>
      <Layout></Layout>
    </UserContext.Provider>
  )
}

function userService({ user }, action) {
  switch (action.type) {
    case "SIGN_OUT":
      return {};
    case "SIGN_IN": {
      if (user != null) {
        return { user };
      }

      if (action.password !== defaultUser.password) {
        return { errors: ["Anmeldung fehlgeschlagen: Das angegebene Passwort ist falsch."] };
      }

      return { user: defaultUser };
    }
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
}