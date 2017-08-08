# Network-Access-Status
Network online offline status ,whether internet accessible or not.
true for network accessible ,false for can't accesssible.

First Step : Import package 
  import * as networkAccessStatus from 'network_access_status'

Second Step :
  Create instance for it.
  networkAccessStatus.check();
 
 Final Step : We get online status from below(window) event form
   e.detail is either true or false.
   true nothing but network accessible.
   false means network not accessible.

   window.addEventListener('networkStatusChanged',(e:any)=>{         
          console.log(e.detail);
   },false)
