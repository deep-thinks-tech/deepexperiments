**This project is a small exercise, where we create a simple web page that has a node backend**
* To use this code, we need to install node and npm
---
**Learnings from the exercise**
- It was the first time I was connecting backend to front end, and wanted to keep the main server.js compact. So created another module file. But referencing that file in server.js was not working. Here is what I did
    - In server.js, use the path of the module and not just the file name. 
        - For instance, **require("./createserver")** and not **require("createserver")**
    - In module file (in my case createserver.js), syntax has to be
        - **module.exports = function(<var>){}