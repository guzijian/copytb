
    window.onscroll = function(){
    const obj = document.getElementsByClassName('rightnav');
    const toscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(toscrollTop >= 438.8){
        obj[0].style.position = 'fixed';
        obj[0].style.top = '75px';
    }else{
        obj[0].style.position = 'absolute'; 
        obj[0].style.top = '513.8px';
    }
    }
   /*右侧栏*/
   
