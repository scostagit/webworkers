var worker = new Worker("../js/worker.js");

worker.addEventListener("message",function(e){   
    var message = e.data;
    console.log("[Message from Worker]:" + message);

    var replay = setTimeout(function(){       
        worker.postMessage("MARCO!"); 
    },3000);
});


worker.postMessage("MARCO!");   

setTimeout(function(){
    console.log("Termiante worker");
    worker.terminate();
},10000);


