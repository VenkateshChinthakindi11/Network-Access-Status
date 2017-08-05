/*
* Network Access Status v2.0.0
*Copyright 2017
*Authors: Venkatesh Chinthakindi.
*All Rights Reserved.
*use ,reproduction, distribution, and modification of this code is subject to the terms and conditions of the MIT license
*
*/
module.exports=(function(){
    return{
        startWorker: function() {
            var newEvent;
            var w;
            var status = null;
            if (typeof (Worker) !== "undefined") {
                if (typeof (w) == "undefined") {
                    var blob = new Blob([
                    `var networkaccessstatus=(function(){
                        var i=0;
                        var interval=4000;
                        status=undefined;
                            return{
                                startpro:function(){
                                    setInterval(()=>{networkaccessstatus.callback()},interval);
                                },
                                S4:function(){
                                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
                                },
                                callback:function(){
                                    i = i + 1;
                                    try{
                                    this.img = new Image();
                                        this.img.onload = function() {                                           
                                            if(status!="true")
                                            {
                                                status=true;
                                                newEvent = new CustomEvent('networkstatusChanged', { detail:true});
                                                window.dispatchEvent(newEvent); 
                                            }                     
                                        };
                                        this.img.onerror = function() {                                            
                                            if(status!="false")
                                            {
                                                status=false;
                                                newEvent = new CustomEvent('networkstatusChanged', { detail: fasle });
                                                window.dispatchEvent(newEvent); 
                                            }
                                        };
                                        try{                                           
                                            guid = (networkaccessstatus.S4() + networkaccessstatus.S4() + "-" + 
                                            networkaccessstatus.S4() + "-4" + 
                                            networkaccessstatus.S4().substr(0,3) + "-" + networkaccessstatus.S4()
                                            + "-" + networkaccessstatus.S4() + 
                                            networkaccessstatus.S4() + networkaccessstatus.S4()).toLowerCase();                                            
                                            this.img.src = "https://www.google.co.in/images/branding/product/ico/googleg_lodp.ico?ID="+guid;                    
                                        }
                                        catch(error){                                           
                                        }
                                    }catch(error){
                                        
                                    }
                                }
                            }
                        })(networkaccessstatus||{})
                        networkaccessstatus.startpro();
                        `]);
                    var blobURL = window.URL.createObjectURL(blob);                   
                    w = new Worker(blobURL);                    
                }                     
             };
            }
        }   
});