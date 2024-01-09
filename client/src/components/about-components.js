import React from "react";
import "./custom-nav.css";
import picture from "./picture.jpg"
const AboutComponents =() =>{
    return (
        <div class="container">
            <div class="row">        
                    <div class="col-12 text-md-start fw-bolder " >
                          <p class="fs-1">杰昇科技簡介 </p>
                    </div>
            </div>
            <div class="card bg-dark text-white">
                <img src={picture} class="card-img-about-jason" />
                <div class="card-img-overlay ">
                <ul class="list-unstyled fs-4">
                    <li>杰昇科技是一家專注於伺服器電腦領域的公司。我們擁有豐富的經驗和專業知識，致力於提供高品質的伺服器電腦解決方案和服務。</li>
                    <li>我們的專長在於：:
                        <ul>
                        <li>1.伺服器設計與製造：我們具有優秀的工程團隊，能夠設計和製造高性能、高可靠性的伺服器產品，以滿足客戶不同的需求。</li>
                        <li>2.伺服器應用與優化：我們深入了解各種應用場景下的伺服器需求，能夠提供最適合客戶應用的伺服器配置和優化建議。</li>
                        <li>3.伺服器管理與維護：我們提供全方位的伺服器管理和維護服務，包括硬體故障排除、軟體更新和性能優化等，確保伺服器始終運行在最佳狀態。</li>
                        <li>4.伺服器安全性：我們重視客戶資料的安全性，採取各種措施保護伺服器免受潛在的安全風險。</li>
                        </ul>
                    </li>
                    <li>我們致力於提供客戶卓越的伺服器產品和服務，助力客戶實現業務增長和效率提升。無論您需要小型企業伺服器、數據中心伺服器還是其他定制化的解決方案，杰昇科技都能滿足您的需求並提供專業支援。我們期待與您合作，共同開創更加美好的未來.</li>
                    </ul>
                    </div>
                </div>
            </div>        
    );
};
export default  AboutComponents;