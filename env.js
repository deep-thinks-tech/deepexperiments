//Arrow function does not work
/* const port = (query) =>{
    const portsList = [
        {
            "id" : "rollingquery",
            "value" : 8081
        },
        { "id" : "counter",
          "value" : 8080
        }
    ]
   for (let x of portsList){
    if (query === x.id) {
        return x.value;
    }
   }

   module.exports = { port };
    
}; */

module.exports = function(query) {
    const portsList = [
        {
            "id" : "rollingreviews",
            "value" : 8081
        },
        { "id" : "counter",
          "value" : 8080
        }
    ]
   for (let x of portsList){
    if (query === x.id) {
        return x.value;
    }
   }
}
