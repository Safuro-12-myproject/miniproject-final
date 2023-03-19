const util = require('util');
var jwt = require("jsonwebtoken");
const multer = require("multer");
//var md5 = require("md5");
const path = require('path');
const Product = require("./libs/Product");

const app = express();
const post = 8080;

const bodyParser = require('body-parser');

const cors = require("cors");
