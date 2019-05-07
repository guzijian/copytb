
    window.onscroll = function(){
    const name = document.getElementById('name');
    const laname1 = document.getElementById('laname1');
    const laname11 = document.getElementById('laname11');
    const searchdad = document.getElementById('searchdad');
    const SearchTabBox = document.getElementsByClassName('SearchTabBox');
    const SearchTabBox1 = document.getElementsByClassName('SearchTabBox1');
    const searchbb = document.getElementById('searchbb');
    const searchbb1 = document.getElementById('searchbb1');
    const searchtm = document.getElementById('searchtm');
    const searchtm1 = document.getElementById('searchtm1');
    const searchdp = document.getElementById('searchdp');
    const searchdp1 = document.getElementById('searchdp1');
    const sline = document.getElementsByClassName('sline');
    const naviconn = document.getElementsByClassName('naviconn');
    const QR = document.getElementsByClassName("QR");
    const hotsfline = document.getElementsByClassName("hotsfline");
    const obj = document.getElementsByClassName('rightnav');
    const search = document.getElementsByClassName('search');
    const searchCha = document.getElementsByClassName('searchCha');
    const logoTd = document.getElementsByClassName('logo-td');
    const logoBd = document.getElementsByClassName('logo-bd');
    const toscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(toscrollTop >= 156.8){
        name.style.paddingLeft = '84px';
        laname1.setAttribute("id",'laname11');
        searchbb.setAttribute("id",'searchbb1');
        searchtm.setAttribute("id",'searchtm1');
        searchdp.setAttribute("id",'searchdp1');
        searchdad.children[0].classList.add("searchb1");
        searchdad.children[1].classList.add("searcha1");
        searchdad.children[2].classList.add("searcha11");
        SearchTabBox[0].setAttribute("class",'SearchTabBox1');
        naviconn[0].style.display = "block";
        sline[0].style.display = "block";
        search[0].setAttribute("class","searchCha");
        logoTd[0].style.display = "block";
        logoBd[0].style.display = "none";
        QR[0].style.display = "none";
        hotsfline[0].style.display = "none";
    }else{
        name.style.paddingLeft = '10px';
        laname11.setAttribute("id",'laname1');
        searchbb1.setAttribute("id",'searchbb');
        searchtm1.setAttribute("id",'searchtm');
        searchdp1.setAttribute("id",'searchdp');
        searchdad.children[0].classList.remove("searchb1");
        searchdad.children[1].classList.remove("searcha1");
        searchdad.children[2].classList.remove("searcha11");
        SearchTabBox1[0].setAttribute("class",'SearchTabBox');
        searchCha[0].setAttribute("class",'search');
        logoTd[0].style.display = "none";
        logoBd[0].style.display = "block";
        QR[0].style.display = "block";
        hotsfline[0].style.display = "block";
        naviconn[0].style.display = "none";
        sline[0].style.display = "none";
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

    
 const qr1 = document.getElementsByClassName("qr1");
 const QR = document.getElementsByClassName("QR");
 qr1[0].onclick =function(){
    QR[0].parentNode.removeChild(QR[0]);
 };
 const name = document.getElementById("name");
 const laname = document.getElementsByClassName("laname");
 const hotsfline = document.getElementsByClassName("hotsfline");
 name.focus();
 name.oninput = function(){
     if(this.Value !==""||this.value !==null){
         laname[0].style.display = "none";
     }else{
         laname[0].style.display = "block";
     }
 };

 const searchbb = document.getElementById("searchbb");
 const searchtm = document.getElementById("searchtm");
 const searchdp = document.getElementById("searchdp");

 const laname2 = document.getElementById("laname2");
 const laname3 = document.getElementById("laname3");
 const sbutton = document.getElementsByClassName("sbutton");
searchbb.onclick = function(){
 searchbb.setAttribute("class","searchb");
 searchtm.setAttribute("class","searcha");
 searchdp.setAttribute("class","searcha");
 laname2.style.display = "block";
 laname3.style.display = "block";
 hotsfline[0].style.display = "block";
 sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";
};
searchtm.onclick = function(){
 searchbb.setAttribute("class","searcha");
 searchtm.setAttribute("class","searchb");
 searchdp.setAttribute("class","searcha");
 laname2.style.display = "none";
 laname3.style.display = "none";
 hotsfline[0].style.display = "none";
 sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff5000 0,#ff5000 100%)";
};
searchdp.onclick = function(){
 searchbb.setAttribute("class","searcha");
 searchtm.setAttribute("class","searcha");
 searchdp.setAttribute("class","searchb");
 laname2.style.display = "none";
 laname3.style.display = "none";
 hotsfline[0].style.display = "block";
 sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";
};

/*搜索栏*/

  const location = document.getElementsByClassName('location');
  const dropDownBox = document.getElementsByClassName('drop-down-box');
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
 const searchbb1 = document.getElementById('searchbb1');
 const searchtm1 = document.getElementById('searchtm1');
 const searchdp1 = document.getElementById('searchdp1');
 searchbb1.onmouseover = function(){
     searchtm1.style.display = "block";
     searchdp1.style.display = "block";
 };
 searchbb1.onmouseout = function(){
     searchtm1.style.display = "none";
     searchdp1.style.display = "none";
 };/*下拉菜单*/

}
