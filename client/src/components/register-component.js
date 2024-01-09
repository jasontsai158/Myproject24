import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useHistory} from "react-router-dom";//
import "./custom-nav.css";
import AuthService from "../services/auth.service";

const RegisterComponent = () => {
    const history = useNavigate ();
    //const history = useHistory();//
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassowrd] = useState("");
    let [message, setMessage] = useState("");
    const handleChangeUsername = (e) =>{
        setUsername(e.target.value);
    };
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value);
    };
    const handleChangePassword= (e) =>{
        setPassowrd(e.target.value);
    };
    const handleChangeRegister= () =>{
        AuthService.register(username, email, password).then(() => {
            window.alert("註冊成功,連結到登入頁面");
                console.log("login before");
                 history("/login");
                console.log("login after");
        }).catch ((error) => {
            console.log("無法轉到login",error);
            setMessage(error.response.data);

        });
    };

    return(
        <div className="row g-3 col-sm-7 ">
            {message && <div className="alert alert-secondary">{message}</div>}
            <label for="username" class="col-sm-3 col-form-label col-form-label-lg">姓名</label>
            <input onChange={handleChangeUsername} type="text" class="form-control form-control-lg" id="username" placeholder="username"></input>
           <div className="row g-3 col-sm-7 ">
            <label for="Email" class="col-sm-3 col-form-label col-form-label-lg">信箱</label>
            <input onChange={handleChangeEmail} type="text" class="form-control form-control-lg" id="Email" placeholder="信箱"></input>
            <div className="row g-3 col-sm-7">
            <label for="password" class="col-sm-3 col-form-label col-form-label-lg">秘碼</label>
            <input onChange={handleChangePassword} type="password" class="form-control form-control-lg" id="password" placeholder="秘碼"></input> 
            <div class="col-12">
            <button onClick={ ()=>{handleChangeRegister(); console.log("has been push"); }} className="btn btn-primary" type="submit">確認送出</button>
            </div>                
            </div>
            </div>
            </div>          
  );
};

export default RegisterComponent;