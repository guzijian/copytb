
    window.onscroll = function(){
 
    let toscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(toscrollTop >= 156.8){
        let name = document.getElementById('name');
        name.style.paddingLeft = '84px';

        let laname = document.getElementsByClassName('laname');
        laname[0].children[0].setAttribute("id",'laname11');

       
        let searchdad = document.getElementById('searchdad');
        searchdad.children[0].setAttribute("id",'searchbb1');
        searchdad.children[1].setAttribute("id",'searchtm1');
        searchdad.children[2].setAttribute("id",'searchdp1');
        searchdad.children[0].setAttribute("class","searchb1");
        searchdad.children[1].setAttribute("class","searcha1");
        searchdad.children[2].setAttribute("class","searcha11");

        let searchbox = document.getElementsByClassName('searchbox');
        searchbox[0].children[0].setAttribute("class",'SearchTabBox1');

        let naviconn = document.getElementsByClassName('naviconn');
        naviconn[0].style.display = "block";

        let sline = document.getElementsByClassName('sline');
        sline[0].style.display = "block";

        let searchhead = document.getElementsByTagName('header');
        searchhead[0].setAttribute("class","searchCha");

        let logoTd = document.getElementsByClassName('logo-td');
        logoTd[0].style.display = "block";

        let logoBd = document.getElementsByClassName('logo-bd');
        logoBd[0].style.display = "none";

        let QR = document.getElementsByClassName("QR");
        QR[0].style.display = "none";

        let hotsfline = document.getElementsByClassName("hotsfline");
        hotsfline[0].style.display = "none";
    }else{

        let name = document.getElementById('name');
        name.style.paddingLeft = '10px';

        let laname = document.getElementsByClassName('laname');
        laname[0].children[0].setAttribute("id",'laname1');

       
        let searchdad = document.getElementById('searchdad');
        searchdad.children[0].setAttribute("id",'searchbb');
        searchdad.children[1].setAttribute("id",'searchtm');
        searchdad.children[2].setAttribute("id",'searchdp');
        if(searchdad.getAttribute("className") ==2){
        searchdad.children[0].setAttribute("class","searcha");
        searchdad.children[1].setAttribute("class","searchb");
        searchdad.children[2].setAttribute("class","searcha");
        }else if(searchdad.getAttribute("className") ==3){
            searchdad.children[0].setAttribute("class","searcha");
            searchdad.children[1].setAttribute("class","searcha");
            searchdad.children[2].setAttribute("class","searchb");
        }else{
            searchdad.children[0].setAttribute("class","searchb");
            searchdad.children[1].setAttribute("class","searcha");
            searchdad.children[2].setAttribute("class","searcha");
        }//店铺等点击状态保存


        let searchbox = document.getElementsByClassName('searchbox');
        searchbox[0].children[0].setAttribute("class",'SearchTabBox');

        let searchhead = document.getElementsByTagName('header');
        searchhead[0].setAttribute("class",'search');

        let logoTd = document.getElementsByClassName('logo-td');
        logoTd[0].style.display = "none";

        let logoBd = document.getElementsByClassName('logo-bd');
        logoBd[0].style.display = "block";

        let QR = document.getElementsByClassName("QR");
        QR[0].style.display = "block";

        let hotsfline = document.getElementsByClassName("hotsfline");
        hotsfline[0].style.display = "block";

        let naviconn = document.getElementsByClassName('naviconn');
        naviconn[0].style.display = "none";

        let sline = document.getElementsByClassName('sline');
        sline[0].style.display = "none";
    };

    
    if(toscrollTop >= 438.8){
        let obj = document.getElementsByClassName('rightnav');
        obj[0].style.position = 'fixed';
        obj[0].style.top = '55px';
    }else{
        let obj = document.getElementsByClassName('rightnav');
        obj[0].style.position = 'absolute'; 
        obj[0].style.top = '513.8px';
    };
    }
   
   /*搜索栏 右侧栏*/

   window.onload= function () {

    
 const qr1 = document.getElementsByClassName("qr1");
 qr1[0].onclick =function(){
    const QR = document.getElementsByClassName("QR");
    QR[0].parentNode.removeChild(QR[0]);
 };//点击关闭二维码


 const name = document.getElementById("name");
 name.focus();
 name.oninput = function(){
    const laname = document.getElementsByClassName("laname");
     if(this.Value !==""||this.value !==null){
         laname[0].style.display = "none";
     }else{
         laname[0].style.display = "block";
     }
 };//搜索栏输入默认文字状态


 const searchbb = document.getElementById("searchbb");
searchbb.onclick = function(){

 const searchbb = document.getElementById("searchbb");
 searchbb.setAttribute("class","searchb");

 const searchtm = document.getElementById("searchtm");
 searchtm.setAttribute("class","searcha");
 
 const searchdp = document.getElementById("searchdp");
 searchdp.setAttribute("class","searcha");

 const laname2 = document.getElementById("laname2");
 laname2.style.display = "block";

 const laname3 = document.getElementById("laname3");
 laname3.style.display = "block";

 const hotsfline = document.getElementsByClassName("hotsfline");
 hotsfline[0].style.display = "block";

 const sbutton = document.getElementsByClassName("sbutton");
 sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";
 let number =1;

 let searchdad = document.getElementById("searchdad");
 searchdad.setAttribute("className",number);
};//点击宝贝

const searchtm = document.getElementById("searchtm");
searchtm.onclick = function(){

 const searchbb = document.getElementById("searchbb");
 searchbb.setAttribute("class","searcha");

 const searchtm = document.getElementById("searchtm");
 searchtm.setAttribute("class","searchb");

 const searchdp = document.getElementById("searchdp");
 searchdp.setAttribute("class","searcha");

 const laname2 = document.getElementById("laname2");
 laname2.style.display = "none";

 const laname3 = document.getElementById("laname3");
 laname3.style.display = "none";

 const hotsfline = document.getElementsByClassName("hotsfline");
 hotsfline[0].style.display = "none";

 const sbutton = document.getElementsByClassName("sbutton");
 sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff5000 0,#ff5000 100%)";
 let number =2;

 let searchdad = document.getElementById("searchdad");
 searchdad.setAttribute("className",number);
};//点击天猫

const searchdp = document.getElementById("searchdp");
searchdp.onclick = function(){

 const searchbb = document.getElementById("searchbb");
 searchbb.setAttribute("class","searcha");

 const searchtm = document.getElementById("searchtm");
 searchtm.setAttribute("class","searcha");

 const searchdp = document.getElementById("searchdp");
 searchdp.setAttribute("class","searchb");

 const laname2 = document.getElementById("laname2");
 laname2.style.display = "none";

 const laname3 = document.getElementById("laname3");
 laname3.style.display = "none";

 const hotsfline = document.getElementsByClassName("hotsfline");
 hotsfline[0].style.display = "block";

 const sbutton = document.getElementsByClassName("sbutton");
 sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";
 let number =3;

 let searchdad = document.getElementById("searchdad");
 searchdad.setAttribute("className",number);
};//点击店铺
/*搜索栏*/


  const location = document.getElementsByClassName('location');
  location[0].onmouseover=function(){
    const dropDownBox = document.getElementsByClassName('drop-down-box');
      dropDownBox[0].style.display = "block";
 };
 location[0].onmouseout=function(){
    const dropDownBox = document.getElementsByClassName('drop-down-box');
  dropDownBox[0].style.display = "none";
 };

 const mytb = document.getElementsByClassName('mytb');
 mytb[0].onmouseover = function(){
    const dropDownTb = document.getElementsByClassName('drop-down-tb');
   dropDownTb[0].style.display = "block";
 };
 mytb[0].onmouseout = function(){
    const dropDownTb = document.getElementsByClassName('drop-down-tb');
   dropDownTb[0].style.display = "none";
 };

 const myfav = document.getElementsByClassName('myfav');
 myfav[0].onmouseover = function(){
    const listCate = document.getElementsByClassName('list-cate');
  listCate[0].style.display = "block";
 };
 myfav[0].onmouseout = function(){
    const listCate = document.getElementsByClassName('list-cate');
  listCate[0].style.display = "none";
 };
 
 const qianniu = document.getElementsByClassName('qianniu');
 qianniu[0].onmouseover = function(){
    const listQn = document.getElementsByClassName('list-qn');
  listQn[0].style.display = "block";
 };
 qianniu[0].onmouseout = function(){
    const listQn = document.getElementsByClassName('list-qn');
  listQn[0].style.display = "none";
 };

 const service = document.getElementsByClassName('service');
 service[0].onmouseover = function(){
    const listSer = document.getElementsByClassName('list-ser');
  listSer[0].style.display = "block";
 };
 service[0].onmouseout = function(){
    const listSer = document.getElementsByClassName('list-ser');
  listSer[0].style.display = "none";
 };

 const webnav = document.getElementsByClassName('webnav');
 webnav[0].onmouseover = function(){
    const webnav1 = document.getElementsByClassName('webnav1');
  webnav1[0].style.display = "block";
 };
 webnav[0].onmouseout = function(){
    const webnav1 = document.getElementsByClassName('webnav1');
  webnav1[0].style.display = "none";
 };
//导航栏浮动下拉菜单

let searchdad = document.getElementById('searchdad');
searchdad.children[0].onmouseover = function(){
    searchdad.children[1].style.display = "block";
    searchdad.children[2].style.display = "block";
 };
 searchdad.children[0].onmouseout = function(){
    searchdad.children[1].style.display = "none";
    searchdad.children[2].style.display = "none";
 };

}

// localstorage      sessionstorage  页面传值
// window对象  自定义对象   元素内自定义属性   
// 好的 code 高耦合低内聚   模块化一下