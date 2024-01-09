import React,{ useState, useEffect} from "react";
import "./custom-nav.css";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
    let{currentUser, setCurrentUser } = props;
    //const history = useHistory();//
    const navigate = useNavigate();
    let [email ,setEmail] = useState ();
    let [password, setPassword] = useState();
    let[message, setMessage] = useState();
 
        const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword =(e) => {
        setPassword(e.target.value);
    };
    const handleChangeLogin = ( ) => {
 
            console.log("before轉");
        AuthService.login (email,password). then ((response) => {
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            window.alert("登入成功");
            setCurrentUser(AuthService.getCurrentUser());
            navigate("/profile");      
        }).catch((error)=>{
            setMessage(error.response.data);
            console.log(error.response);
        });
};

    return (

            <div className="row  g-3 col-xxl-7 col-sm-7 col-md-7">
            {message && <div className = "alert alert-secondary" >{message} </div> }
            <label htmlFor="email" className="col-sm-3 col-form-label col-form-label-lg">信箱</label>
            <input onChange= {handleChangeEmail} type="text" className="form-control form-control-lg" id="email" placeholder="信箱"></input>
            <div className="row g-3 col-sm-7">
            <label htmlFor="password" className="col-sm-3 col-form-label col-form-label-lg">秘碼</label>
            <input onChange={handleChangePassword} type="password" className="form-control form-control-lg" id="password" placeholder="秘碼"></input>     
            <div className="col-12">
            <button onClick= {handleChangeLogin} className="btn btn-primary" type="submit">確認送出</button>
                </div>               
            </div>
            </div>      

                
 );
};

export default LoginComponent;