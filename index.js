var express = require("express");
var app = express();
app.use(express.static("public")); //thư mục public nơi chưa file hay bất cứ thứ gì mà khách hàng được phép truy cập khi có repuest
app.set("view engine","ejs");
app.set("views","./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);

//server lắng nghe xem có ai kết nối tới hay không thì ta dùng io.on
io.on("connection",function(socket){
    console.log("Đã có người kết nối:" + socket.id);
    socket.on("disconnect",function(){
        console.log(socket.id + " Đã ngắt kết nối");
    });
});

//tạo routes
app.get("/",function(req,res){
    res.render("trangchu");
})
server.listen(3000);