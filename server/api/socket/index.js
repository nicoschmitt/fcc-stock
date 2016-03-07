(function(){
    
    var register = function(io) {
        
        io.on("connection", (socket) => {

            socket.on("stocks", (data) => {
                console.log("Broadcast stock update");
                console.log(data);
                socket.broadcast.emit("stocks", data);
            });

        });
        
    };
    
    module.exports.register = register;
    
}());
