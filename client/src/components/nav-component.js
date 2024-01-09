import React ,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./custom-nav.css";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
    let{currentUser  , setCurrentUser }= props;
    return(
        <div >
            <nav class="navbar sticky-top navbar-light bg-light navbar_media">
                <div class="container-fluid">
                    <a class="navbar-brand fs-1" >杰昇科技</a>
                    <a class="navbar-brand fs-4 " href="#">繁体 | 英文</a>              
                </div>
                </nav>    
            <div>
            <nav className="navbar navbar-expand mb-3 border-bottom shadow-lg p-3 mb-5 rounded bg-info bg-gradient">
            <div className="container-fluid navbar-bg ">
              <div className="collapse navbar-collapse " id="navbarNav">              
              <ul className="navbar-nav fs-1 mb-lg-0 mx-auto" >
                <li className="nav-item " >
                    <Link className="nav-link active navbar-space" to="/" >
                        主頁
                    </Link>
                    </li>               
                        <li className="nav-item " >
                            <Link className="nav-link navbar-space" to="/about" >
                            關於我們
                            </Link>
                        </li>
                        <li className="nav-item " >
                            <Link className="nav-link navbar-space  " to="/Product" >
                            產品
                            </Link>
                        </li>
                        <li className="nav-item " >
                            <Link className="nav-link navbar-space" to="/contact">
                            連絡我們
                            </Link>
                        </li>
                    
                        {!currentUser && 
                            (<li className="nav-item" >
                            <Link className="nav-link navbar-space" to="/login" >
                            登入
                            </Link>
                        </li>              
                            )}
                     
                         { !currentUser && (
                            <li className="nav-item " >
                            <Link className="nav-link navbar-space" to="/register">
                            註冊
                            </Link>
                        </li>
                            )}   
                        {currentUser && 
                            (<li className="nav-item " >
                            <Link className="nav-link navbar-space" to="/profile">
                            個資
                            </Link>
                        </li>
                            )}      
                                               
                    </ul>
               </div>
            </div>
            </nav>
            </div>           
        </div> 
    );
}; 
 
export default NavComponent;