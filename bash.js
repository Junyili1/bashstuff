process.stdout.write('prompt > ');
const pwd = require('./pwd.js')
const fs = require('./ls.js')
const cat = require('./cat.js')

process.stdin.on('data', (data) =>{
  const cmd = data.toString().trim();

  if(cmd == 'pwd'){
    pwd()
  }
  else if(cmd == 'ls'){
    fs()
  }
  else if(cmd == 'cat'){
    cat()
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ')
  }

})
