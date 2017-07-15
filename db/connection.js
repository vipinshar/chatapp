
let mongoose = require('mongoose');
let constant = require('../config/appConfig');

global.db = global.db ? global.db : mongoose.connect(constant.CONST.mongo_url, {
    useMongoClient: true,
});;

let conn = mongoose.connection;

conn.on('error', console.error.bind('connection error'));

conn.once('open', function () { console.log('Connected') });

conn.on('disconnected', function () { console.log('Disconnect') });
