process.stdout.write('prompt > ');
const pwd = require('./pwd.js')
const fs = require('./ls.js')
const cat = require('./cat.js')
const curl = require('request')

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim().split(' ');

  if(cmd[0] == 'pwd'){
    pwd()
  }
  else if(cmd[0] == 'ls'){
    fs()
  }
  else if(cmd[0] == 'cat'){
    cat(cmd[1])
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
  }

})

