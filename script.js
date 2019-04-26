
    window.onscroll = function(){
    const obj = document.getElementsByClassName('rightnav');
    const search = document.getElementsByClassName('search');
    const logoTd = document.getElementsByClassName('logo-td');
    const logoBd = document.getElementsByClassName('logo-bd');
    const toscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(toscrollTop >= 156.8){
        search[0].classList.add('searchCha');
        logoTd[0].style.display = "block";
        logoBd[0].style.display = "none";
    }else{
        search[0].classList.remove('searchCha');
        logoTd[0].style.display = "none";
        logoBd[0].style.display = "block";
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
    const searchbb = document.getElementById("searchbb");
    const searchtm = document.getElementById("searchtm");
    const searchdp = document.getElementById("searchdp");
   searchbb.onclick = function(){
    searchbb.setAttribute("class","searchb");
    searchtm.setAttribute("class","searcha");
    searchdp.setAttribute("class","searcha");
   };
   searchtm.onclick = function(){
    searchbb.setAttribute("class","searcha");
    searchtm.setAttribute("class","searchb");
    searchdp.setAttribute("class","searcha");
   };
   searchdp.onclick = function(){
    searchbb.setAttribute("class","searcha");
    searchtm.setAttribute("class","searcha");
    searchdp.setAttribute("class","searchb");
   };/*搜索栏*/

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
   
   const qianniu = document.getElementsByClassName('qianniu');
   const listQn = document.getElementsByClassName('list-qn');
   qianniu[0].onmouseover = function(){
    listQn[0].style.display = "block";
   };
   qianniu[0].onmouseout = function(){
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
