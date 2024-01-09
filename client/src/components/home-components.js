import React from "react";
import "./custom-nav.css";
//import picture from "./picture.jpg";

const HomeComponent = () => {
    return (     
            <main> 
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner mb-3 ">
                <div class="carousel-item active  ">
                <img src="http://picsum.photos/200/100?random=10" class="d-block mx-auto pic-set" />
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="fs-4">2023會場照片</h5>
                    <p className="fs-5">展示我們的工控產品.</p>
                </div>
                </div>
                <div class="carousel-item ">
                <img src="http://picsum.photos/200/100?random=10" class="d-block mx-auto pic-set" />
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="fs-4">2024會場照片</h5>
                    <p className="fs-5">美國矽谷展示我們的AI產品.</p>
                </div>
                </div>
                <div class="carousel-item ">
                <img src="http://picsum.photos/200/100?random=10" class="d-block mx-auto pic-set" />
                <div class="carousel-caption d-none d-md-block">
                    <h5 className="fs-4">公司照片</h5>
                    <p className="fs-5">合作伙伴大約10位.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
                {/*
                <div className="container">
                    <div class="card bg-dark text-white card-jason" >
                    <img src={picture} class="card-img card-img-jason" ></img>
                    <div class="card-img-overlay">
                        <h5 class="card-title"></h5>
                        <p class="card-text fs-1 "> Server Computer Experts.</p>
                            </div>
                        </div> 
                    </div>     
                        */}       
                <div className="container-sm footer" >
                    <h4>
                        杰昇科技Copyright © 2023 Jason Technology Corp All rights reserved
                    </h4>
                </div>            
            </main>       
    );
};
export default HomeComponent;
    