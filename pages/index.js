import { createContext, useState } from 'react'
import Layout from '../components/Layout'

export const UserContext = createContext();

export default function Home() {
  const user = {
    firstName: "Jack",
    babypoints: 2134,
    cartSize: 6,
    wishlistCount: 2
  };

  return (
    <UserContext.Provider value={user}>
      <Layout></Layout>
    </UserContext.Provider>
  )
}
