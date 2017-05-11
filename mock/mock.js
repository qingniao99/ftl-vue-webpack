var express = require('express');
const bodyParser = require('body-parser')
const app = express()
const port = 8081
const router = require('./router')

// api mock
// url请求解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


// 静态资源
//app.use(express.static('dist'))

app.use(router)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
