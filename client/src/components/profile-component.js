import React from "react";
import { useNavigate} from "react-router-dom";
//import { useHistory} from "react-router-dom";//
import AuthService from "../services/auth.service";


const ProfileComponent =(props) => {
  let {currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  //const history = useHistory();//
  const handleChangeLogout = () => {
    AuthService.logout();
    window.alert("成功登出");
    console.log(currentUser);
    setCurrentUser(null);
    navigate("/login");
  };
  return (
    <div className="card" style={{width: "20rem"}}>
      { ! currentUser && (<div>請先登入再能看到個資哦!!</div>)}
      { currentUser && (
        <div className="card-body">
        <h5 className="card-title">個人資訊</h5>
        <h6 className="card-subtitle mb-2 text-muted">
         {currentUser.user.username}
      </h6>
    <p className="card-text">
      Token: {currentUser.token}
    </p>
    <p className="card-text">
      ID: {currentUser.user._id}
    </p>
    <p className="card-text">
      email: {currentUser.user.email}
    </p>
  <div className="col-12">
  <button onClick= {handleChangeLogout} className="btn btn-primary" type="submit">登出</button>
  </div> 
  </div>
      )}
  </div>
)};
export default ProfileComponent;
