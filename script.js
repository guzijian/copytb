
    window.onscroll = function(){
    const obj = document.getElementsByClassName('rightnav');
    const search = document.getElementsByClassName('search');
    const toscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(toscrollTop >= 156.8){
        search[0].classList.add('searchCha');
    }else{
        search[0].classList.remove('searchCha');
    };

    if(toscrollTop >= 438.8){
        obj[0].style.position = 'fixed';
        obj[0].style.top = '55px';
    }else{
        obj[0].style.position = 'absolute'; 
        obj[0].style.top = '513.8px';
    };
    }
   /*搜索栏 右侧栏*/
   window.onload= function () {
    const location = document.getElementsByClassName('location');
    const dropDownBox = document.getElementsByClassName('drop-down-box')
    location[0].onmouseover=function(){
        dropDownBox[0].style.display = "block";
   };
   location[0].onmouseout=function(){
    dropDownBox[0].style.display = "none";
   };

   const mytb = document.getElementsByClassName('mytb');
   const dropDownTb = document.getElementsByClassName('drop-down-tb');
   mytb[0].onmouseover = function(){
     dropDownTb[0].style.display = "block";
   };
   mytb[0].onmouseout = function(){
     dropDownTb[0].style.display = "none";
   };
}
