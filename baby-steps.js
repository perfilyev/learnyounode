console.log(process.argv.splice(2).reduce((p,c) => p+(+c), 0))