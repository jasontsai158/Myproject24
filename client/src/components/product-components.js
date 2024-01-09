import React from "react";
import picture_1 from "./圖片/Pexels/bird.jpg";
//import picture_2 from "./圖片/pexels-pixabay-4.jpg";
import picture_3 from "./圖片/pexels-alexander-dummer-2.jpg";
import picture_4 from "./圖片/pexels-pixabay-5.jpg";
const ProductComponents = () => {
    return (

        <div container>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            <div class="col">
                <div class="card h-100">
                <img src="http://picsum.photos/200/100?random=10"class="card-img-top w-100" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">A 產品</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src="http://picsum.photos/300/200?random=10" class="card-img-top w-100" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">B 產品</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src={picture_3} class="card-img-top w-100" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">C 產品</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src={picture_4} class="card-img w-100" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">D 產品</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
                <div class="col">
                <div class="card h-100">
                <img src={picture_1} class="card-img w-100" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">E 產品</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
        </div>
        </div>
        
    
     );
};
export default ProductComponents;