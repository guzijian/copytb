
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

   const myfav = document.getElementsByClassName('myfav');
   const listCate = document.getElementsByClassName('list-cate');
   myfav[0].onmouseover = function(){
    listCate[0].style.display = "block";
   };
   myfav[0].onmouseout = function(){
    listCate[0].style.display = "none";
   };
   
   const qinniu = document.getElementsByClassName('qinniu');
   const listQn = document.getElementsByClassName('list-qn');
   qinniu[0].onmouseover = function(){
    listQn[0].style.display = "block";
   };
   qinniu[0].onmouseout = function(){
    listQn[0].style.display = "none";
   };

   const service = document.getElementsByClassName('service');
   const listSer = document.getElementsByClassName('list-ser');
   service[0].onmouseover = function(){
    listSer[0].style.display = "block";
   };
   service[0].onmouseout = function(){
    listSer[0].style.display = "none";
   };

   const webnav = document.getElementsByClassName('webnav');
   const webnav1 = document.getElementsByClassName('webnav1');
   webnav[0].onmouseover = function(){
    webnav1[0].style.display = "block";
   };
   webnav[0].onmouseout = function(){
    webnav1[0].style.display = "none";
   };
}
