import { createContext } from 'react';
import Layout from '../components/Layout'

const user = {
  firstName: "Jim",
  babypoints: 454,
  cartSize: 6,
  wishlistCount: 2
};

export const UserContext = createContext();

export default function Home() {
  return (
    <UserContext.Provider value={user}>
      <Layout></Layout>
    </UserContext.Provider>
  )
}