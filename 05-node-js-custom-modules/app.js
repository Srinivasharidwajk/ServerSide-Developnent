const util = require('./util/greetings/message');
const admin = require('./admin/dataOperations');
const fileOpr = require('./operations/fileOperations');

let msg = util.greet();
let reverseString = admin.reverseString(msg);
fileOpr.writeToFile('message.txt', reverseString);

