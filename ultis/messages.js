const moment = require('moment');

function formateMessage(usernamae,text){
    return {
      usernamae,
      text,
      time : moment().format('h:mm:a')
    }
}

module.exports = formateMessage ;