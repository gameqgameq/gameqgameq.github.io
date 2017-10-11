// require("jsdom/lib/old-api").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     var $ = require("jquery")(window);
//     $.getJSON("https://raw.githubusercontent.com/gameqgameq/gameqgameq.github.io/master/data.json", function(data) {
//         for (var i = 0; i < data.length; i++) {
//             var item = data[i];
//             var during = item.time.split("~")
//             var hour1 = Number(during[0].split(":")[0]);
//             var hour2 = Number(during[1].split(":")[0]);
//             if (hour2 < hour1 || hour2 - hour1 >= 4) console.log("index" + i + "error")
//             else if (hour1 == hour2) {
//                 var min1 = Number(during[0].split(":")[1]);
//                 var min2 = Number(during[1].split(":")[1]);
//                 if (min2 < min1) console.log("index" + i + "error")
//             }
//         }
//     });
// });
// var MongoClient = require('mongodb').MongoClient,
//     test = require('assert');
// // Connection url
// var url = 'mongodb://localhost:27017';
// // Connect using MongoClient
// MongoClient.connect(url, function(err, db) {

//     // var col = db.collection('hw1');
//     if (err) {
//         console.log("fail");
//     } else {
//         console.log("success!!");
//     }

// });
// var http = require('http');

// //create a server object:
// http.createServer(function(req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(process.env.PORT); //the server object listens on port 8080
// 載入 http 的模組
var http = require('http');
// 引用 File System 模組
var fs = require('fs');

// 設定 port 預設為 1337，若系統環境有設定則以系統環境設定為主
var port = process.env.PORT || 1337;

var url = require('url');
var path = require('path');

var file_content;

var webPath = 'public';

var server = http.createServer(function(req, res) {
    // req 是 request 本地端請求的訊息
    // res 是 response 主機回傳到本地端的訊息

    // 解析使用者要求的路徑名稱
    let url_path = url.parse(req.url);
    console.log('path:' + url_path);
    let pathname = url_path.pathname;
    console.log('pathname:' + pathname);

    // 判斷pathname是否為預設路徑
    if (pathname === "/" || pathname === "/index.htm") {
        pathname = 'index.html';
    }

    // __dirname 是程式的路徑
    // webPath 是公開的資料夾
    // pathname 是使用者要求的路徑名稱
    var filePath = path.join(__dirname, webPath, pathname);
    console.log('filePath:' + filePath);


    // 讀取檔案
    fs.readFile(filePath, 'utf8', function(err, content) {
        if (err) {
            console.log('Failed to read');
            // 若檔案讀取錯誤，回傳 404
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404. 找不到檔案!!</h1>')
            res.end();
            return;
        }
        // 將檔案內容傳給瀏覽器
        //res.writeHead(200, { 'Content-Type': 'text/' });
        res.write(content);
        res.end();
    })
});

// 啟動並等待連接
server.listen(port);
console.log('Server running at http://127.0.0.1:' + port);