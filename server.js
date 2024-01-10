const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 8080;

// connect to Render--->1234567890
//const port = process.env.PORT;
// connect to DB
mongoose
    .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connect to Mongo Altas");
    })
    .catch((e) => {
        console.log(e);
    });

  // Middlewares
  app.use(express.json());//當應用程式收到一個請求時，如果該請求的 Content-Type 是 "application/json"，這表示該請求的主體內容是 JSON 格式的資料。express.json() 中介軟體會解析這個 JSON 資料並將其轉換成 JavaScript 物件，然後將這個 JavaScript 物件加入到請求物件 (req) 的 body 屬性中。這樣在後續的路由處理器中，你就可以透過 req.body 存取這個解析後的 JSON 資料//
  app.use(express.urlencoded( { extended: true }));//如果該請求的 Content-Type 是 "application/x-www-form-urlencoded"，這表示該請求的主體內容是以 URL 編碼格式編碼的資料，類似於表單提交的格式。express.urlencoded() 中介軟體會解析這個 URL 編碼格式的資料並將其轉換成 JavaScript 物件，然後將這個 JavaScript 物件加入到請求物件 (req) 的 body 屬性中。這樣在後續的路由處理器中，你就可以透過 req.body 存取這個解析後的表單資料。extended 是一個布林值選項，它指定在解析表單數據時使用哪種解析器。當 extended 被設置為 true 時，urlencoded 使用 qs 庫來解析表單數據，並支持更多的數據類型和複雜的對象。當 extended 被設置為 false 時，urlencoded 使用 querystring 庫來解析表單數據，但在這種情況下，對於一些複雜的數據結構可能無法正確處理。//
  //一般建議將 extended 設置為 true，這樣可以支持更多的數據類型，並且能夠處理較複雜的表單數據。在新版的 Express 中，express.urlencoded() 默認使用 extended: true，因此通常你不需要額外指定這個選項，除非你想明確指定使用 false。例如：//  
  app.use(cors());
  app.use(expree.static(path.join(_dirname, "client", "build", )));
  
  app.use("/api/user", authRoute);
  app.use("/api/courses", passport.authenticate("jwt", { session: false }), courseRoute);//這段程式碼是用於設定 Express 應用程式的中介軟體和路由處理器。它先使用 Passport.js 驗證 JWT 的身份，如果驗證通過，再將請求轉發給處理 "/api/courses" 路徑的路由處理器 courseRoute。這樣可以確保只有通過身份驗證的使用者才能訪問這個路徑，實現了對特定 API 的安全保護。//
  
  // URL/
   if(process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
    app.get("*", (req, res) => {
      res.sendFile(path.join(_dirname, "client","build", "index.html"));
    });
   }
 app.listen(port, () => {
   console.log("Server running on port 8080.");
  //app.listen(process.env.PORT || 8080, () => {
    //console.log(`Server running on port ${process.env.PORT || 8080}`);
    //app.listen(process.env.PORT , () => {
    //console.log(`Server running on port ${process.env.PORT }`);
  });