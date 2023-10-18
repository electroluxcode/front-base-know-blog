var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');

const multer = require('multer')

var app = express();




const bodyParser = require('body-parser');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//跨域
app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
  res.header("Access-Control-Allow-Headers", "content-type,Token,X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("Access-Control-Max-Age", "3600");
  console.log("经过")
  next();
})
app.use(bodyParser.text());
//get 接受参数测试
app.get('/api/get', function(req, res) {
  // 直接返回对象
  // console.log(req.query);
  // res.json()返回json数据（自动处理）并结束响应
  res.send({
    code:200,
    msg:"get_success",
    data:req.body
  });
});


app.post('/api/post', function(req, res) {
  // json 的才有效

  res.send({
    code:200,
    msg:"post_success",
    data:req.body
  });
});

app.get("/sse", function(req, res) {
  // json 的才有效
  res.setHeader('Content-Type', 'text/event-stream')
  // res.setHeader('Transfer-Encoding', 'chunked')
  res.setHeader(  'Access-Control-Allow-Origin', '*')
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader("Connection", "keep-alive")
  // res.send({
  //   code:200,
  //   msg:"sse"
  // });
  const interval = setInterval(() => {
    res.write('data: Data chunk\n\n');
  }, 1000);

  // 5秒后停止输出
  setTimeout(() => {
    if (res.writableEnded) {
   
    } else {
      clearInterval(interval);
      res.write('data: Data end\n\n');
    }
  }, 5000);
})


app.listen('8088', () => {
  console.log('8088');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;
