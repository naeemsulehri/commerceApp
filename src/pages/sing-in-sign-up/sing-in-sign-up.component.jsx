import React from "react";
import "./sing-in-sign-up.style.scss";
import SignIn from "../../components/sing-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInandSignUpPage = () => (
  <div className='sing-in-sign-up'>
    <SignIn />
    <SignUp/>
  </div>
);
export default SignInandSignUpPage;
