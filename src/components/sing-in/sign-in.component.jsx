import React from 'react';
import './sign-in.style.scss';
import FormInput from  '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    const {email , password} = this.state
  
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(error) {
      console.log(error);
      }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });

    console.log(this.state);
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account </h2>
        <span>sign in with your email and pawword</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            label ='email'
            handleChange={this.handleChange}
            required
          />
          
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            label ='password'
            handleChange={this.handleChange}
            required
          />
          <div className='Button'>
          <CustomButton type='submit' > Sign In</CustomButton>
          <CustomButton onClick = {signInWithGoogle} isGoogleSignIn> 
          {' '}
          Sign in With Google {' '}
          </CustomButton>
          
          </div>
          
        </form>
      </div>
    );
  }
}
export default SignIn;
