import { useSession, signIn, signOut } from "next-auth/react"
import userStyles from "../styles/login-btn.module.css";

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className={userStyles.user_nav}>
        <a href="/profile">
          <img src={session.user.image} className={userStyles.user_picture} />
        </a>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}