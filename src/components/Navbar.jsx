/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Avatar } from "@mantine/core";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {auth} from "../config/firebase"

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  text-align: center;

  .logo{
    padding: 1rem;
    margin: 0 auto;
    width: 25%;
  }

  .profile {
    position: absolute;
    left: 0;
    top: 0;
    align-items: right;
  }
`;

const Navbar = ({ isAuth, setIsAuth, profile, setProfile }) => {

  const handleAuthentication = async () => {
    console.log("Authenticating user")

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      // Set to state
      setIsAuth(true);
      setProfile(user.providerData[0]);
    } catch (err) {
      console.error(err);
    }

  }

  const handleLogOut = async () => {
    console.log("Logging out user")

    try {
      await signOut(auth);

      // Set to state
      setIsAuth(false);
      setProfile({});
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <StyledNav>
      {/* <h1>#modern todolist</h1> */}
      <div className="logo">
        <img src="/logo.svg" alt="logo"/>
      </div>
      <div className="profile">
        <Avatar onClick={isAuth ? handleLogOut : handleAuthentication} radius="md" src={profile.photoURL} />
      </div>
    </StyledNav>
  );
};

export default Navbar;
