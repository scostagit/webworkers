this.addEventListener("message",function(e){
    var message  = e.data;
     console.log("[Message received from MAIN]:" + message);

     postMessage("POLO!");

    setTimeout(function(){  
        postMessage("POLO!");
    }, 3000);

});


