(function(){
    
    var express = require('express');
    var router = express.Router();
    
    var getConfig = function(req, res) {
      res.json({ 
          
      });
    };
    
    router.get('/*', getConfig);
    
    module.exports = router;
    
}());
