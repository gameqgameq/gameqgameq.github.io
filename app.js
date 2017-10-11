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
var MongoClient = require('mongodb').MongoClient,
    test = require('assert');
// Connection url
var url = 'mongodb://localhost:27017';
// Connect using MongoClient
MongoClient.connect(url, function(err, db) {

    // var col = db.collection('hw1');
    if (err) {
        console.log("fail");
    } else {
        console.log("success!!");
    }

});