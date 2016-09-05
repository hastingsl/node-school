/* Program prints a list of files in a given directory, filtered by the file extension. First parameter is directory, second parameter is extension to filter by. For instance, if the extension is .html, only html files are printed. */

var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
      if(path.extname(file).substring(1) == process.argv[3])
        console.log(file);
  });
});
