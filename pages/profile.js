import React from 'react';
import profileStyles from "../styles/Profile.module.css";
import { useSession,  signOut } from "next-auth/react"

export default function Profile() {
  const { data: session } = useSession();
  if(session){
    return (
      <div className={ profileStyles.profile }>
        <h1>This is the profile page.</h1>
        <h1>{session.user.name}</h1>
        <h1>{session.user.email}</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
}
