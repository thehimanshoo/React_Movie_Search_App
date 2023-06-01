import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./root/navbar/Navbar";
import Register from "./user/Register";
import Login from "./user/Login";
//import Alert from "./root/util/Alert";
import * as userAction from '../src/redux/user/user.actions'
import * as userUtil from '../src/util/userUtil'
import {useDispatch} from "react-redux";
import PrivateRoute from "./util/PrivateRoute";
import Home2 from "./root/home/Home2";
import Home from "./root/home/Home";


 let App = () => {

    let dispatch = useDispatch();
     useEffect(() => {
         if (userUtil.getToken()){
             dispatch(userAction.getUserInfo())
         }
     },[])
     return (
         <React.Fragment>
             <Router>
                 <Navbar/>
                 {/* <Alert/> */}
                 <Routes>
                     
                 <Route exact path="/" element={<Home/>}/>
                     <Route  path="/home2"
                            element={ <PrivateRoute>
                                         <Home2/>
                                        </PrivateRoute>}/>
                    
                     <Route exact path="/user/register" element={<Register/>}/>
                     <Route exact path="/user/login" element={<Login/>}/>
                    
                 </Routes>


             </Router>




         </ React.Fragment>
     );



 }
export default App;
