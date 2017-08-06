/*
* Network Access Status v2.1.0
*Copyright 2017
*Authors: Venkatesh Chinthakindi.
*All Rights Reserved.
*use ,reproduction, distribution, and modification of this code is subject to the terms and conditions of the MIT license
*
*/
debugger;
var networkAccessStatus=(function(){
    return{
        check: function() {            
            var newEvent;
            var w;
            var status = null;            
            if (typeof (Worker) !== "undefined") {
                if (typeof (w) == "undefined") {
                    var blob=new Blob([
                    `var startNetworkCheck=(function(){ 
                        var interval=3000;
                       return{
                           checkNetwork:function(){
                            try{  
                                setInterval(()=>{startNetworkCheck.callback()},interval);                             
                            }
                            catch(error){
                                console.log('inner file console catch'+error)                                           
                            }
                         },
                        callback:function(){                            
                             guid = (startNetworkCheck.S4() + startNetworkCheck.S4() + "-" + 
                             startNetworkCheck.S4() + "-4" + 
                             startNetworkCheck.S4().substr(0,3) + "-" + startNetworkCheck.S4()
                             + "-" + startNetworkCheck.S4() + 
                             startNetworkCheck.S4() + startNetworkCheck.S4()).toLowerCase();
                            self.postMessage("https://www.google.co.in/images/branding/product/ico/googleg_lodp.ico?ID="+guid);
                        },
                        S4:function(){
                            return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
                        }
                        }
                        })((startNetworkCheck||{}))
                        startNetworkCheck.checkNetwork();`])
                    var blobURL = window.URL.createObjectURL(blob);
                    w = new Worker(blobURL);                    
                }
                var img=new Image();
                w.onmessage = function(event) {
                    img.src=event.data;
                    img.onload = function() {                         
                         if(status!=true)
                         {
                             status=true;
                             newEvent = new CustomEvent('networkStatusChanged', { detail:true});
                             window.dispatchEvent(newEvent); 
                         }                     
                     };
                     img.onerror = function() {                         
                         if(status!=false)
                         {
                             status=false;
                             newEvent = new CustomEvent('networkStatusChanged', { detail: false });
                             window.dispatchEvent(newEvent); 
                         }
                     };
                    
                };                     
             };
            }
        }   
})((networkAccessStatus||{}));
module.exports=networkAccessStatus;