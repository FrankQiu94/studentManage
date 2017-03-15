# studentManage  
###What I have learned:
1.  NodeJS
2.  Express structure
3.  MongoDB
4.  ES6
5.  jQuery
6.  Bootstrap
7.  plug-MD5 based on jQuery

```bash
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
...
```

>studentManager
>>dist(Sorry for I have not packaged yet)
>>node_modules
>>>xtpl
>>>xtemplate
>>>mongodb
>>>express-session
>>>express
>>>body-parser
>>src
>>>controllers
>>>>accountController.js
>>>>studentController.js
>>>routers
>>>>accountRouter.js
>>>>studentRouter.js
>>>statics
>>>>css
>>>>>site.css
>>>>js
>>>>lib
>>>>>bootstrap
>>>>>>css
>>>>>>js
>>>>>jquery.min.js
>>>>>md5.js
>>>tool
>>>>databaseManager.js
>>>views
>>>>add.html
>>>>edit.html
>>>>login.html
>>>>parent.html
>>>>register.html
>>>>studentList.html
>>app.js
>>package.json
