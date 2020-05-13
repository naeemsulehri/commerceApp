import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header.component";
import SignInandSignUpPage from "./pages/sing-in-sign-up/sing-in-sign-up.component";
import {auth , createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();
    this.state = { currentUser: null
    };
  }
  unSubScribeFromAuth = null;

  componentDidMount(){
    this.unSubScribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser:{
                id: snapShot.id, 
                ...snapShot.data()
              }
            });
            
          });
        }
          this.setState({currentUser : userAuth});
          
    });
      }

      componentWillUnmount(){
        this.unSubScribeFromAuth();
      }


  render() {
    
    return (
      <div className="app">
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signIn" component={SignInandSignUpPage} />
          </Switch>
        </Router>
      </div>
    );

  }
  
}

export default App;
