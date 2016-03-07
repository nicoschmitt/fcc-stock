(function(){
    
    var register = function(io) {
        io.on("connection", () => {
           console.log("New connection.");
        });
 
        io.on("disconnect", () => {
            console.log("End of connection.");
        });
    };
    
    module.exports.register = register;
    
}());
