import { createContext, Dispatch, useReducer } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

const defaultUser = {
  password: "password",
  firstName: "Jim",
  babypoints: 454,
  cartSize: 6,
  wishlistCount: 2,
};

interface User {
  password: string;
  firstName: string;
  babypoints: number;
  cartSize: number;
  wishlistCount: number;
}

interface UserState {
  user?: User;
  errors?: string[];
}

type UserStateAction =
  | { type: "SIGN_OUT" }
  | { type: "SIGN_IN"; password: string };

export const UserContext = createContext<[UserState, Dispatch<UserStateAction>]>([{}, () =>{}]);

function MyApp({ Component, pageProps }: any) {
  const userReducer = useReducer(userService, {});

  return (
    <UserContext.Provider value={userReducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

function userService({ user }: UserState, action: UserStateAction) {
  switch (action.type) {
    case "SIGN_OUT":
      return {};
    case "SIGN_IN": {
      if (user != null) {
        return { user };
      }

      if (action.password !== defaultUser.password) {
        return {
          errors: [
            "Anmeldung fehlgeschlagen: Das angegebene Passwort ist falsch.",
          ],
        };
      }

      return { user: defaultUser };
    }
  }
}

export default MyApp;
