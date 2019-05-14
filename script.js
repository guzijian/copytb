
    window.onscroll = function(){
 
    let toscrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(toscrollTop);
    if(toscrollTop >= 156.8){
        let name = document.getElementById('name');
        name.style.paddingLeft = '34px';

        let laname = document.getElementsByClassName('laname');
        laname[0].children[0].setAttribute("id",'laname11');

       
        let searchdad = document.getElementById('searchdad');
        searchdad.children[1].style.display = "none";
    searchdad.children[2].style.display = "none";
searchdad.onmouseover = function(){
    searchdad.children[1].style.display = "block";
    let sline = document.getElementsByClassName("sline");
    sline[1].style.display = "block";
    searchdad.children[2].style.display = "block";
 };
 searchdad.onmouseout = function(){
    searchdad.children[1].style.display = "none";
    searchdad.children[2].style.display = "none";
 };
        
        searchdad.children[0].setAttribute("class","searchb1 searchbb1");
        searchdad.children[1].setAttribute("class","searcha1 searchtm1");
        searchdad.children[2].setAttribute("class","searcha1 searchdp1");
        
        let searchbox = document.getElementsByClassName('searchbox');
        searchbox[0].children[0].setAttribute("class",'SearchTabBox1');
       
        let naviconn = document.getElementsByClassName('naviconn');
        naviconn[0].style.display = "block";


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
        
        let laname3 = document.getElementById("laname3");
        laname3.style.paddingLeft = "260px";
 
        const bb = document.getElementById("bb");
        bb.onclick = function(){

          bb.children[0].style.display = "block";
          tm.children[0].style.display = "none";
          dp.children[0].style.display = "none";

          bb.children[1].style.display = "none";
         
         const laname2 = document.getElementById("laname2");
         laname2.style.display = "block";
        
         const laname3 = document.getElementById("laname3");
         laname3.style.display = "block";
        
         const sbutton = document.getElementsByClassName("sbutton");
         sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";

         let number =1;
        
         let searchdad = document.getElementById("searchdad");
         searchdad.setAttribute("className",number);
         

         searchdad.insertBefore(bb,searchdad.children[0]);
         searchdad.children[0].setAttribute("class","searchb1 searchbb1");
        searchdad.children[1].setAttribute("class","searcha1 searchtm1");
        searchdad.children[2].setAttribute("class","searcha1 searchdp1");
        const searchbb1 = document.getElementsByClassName("searchbb1");
         const searchdp1 = document.getElementsByClassName("searchdp1");
         searchbb1[0].children[1].style.display = "none";
          searchdp1[0].children[1].style.display = "none";
        };//点击宝贝
        

        const tm = document.getElementById("tm");
        tm.onclick = function(){
          bb.style.display = "block";

          tm.children[0].style.display = "block";
          bb.children[0].style.display = "none";
          dp.children[0].style.display = "none";
         
          tm.children[1].style.display = "none";
          
          const laname2 = document.getElementById("laname2");
          laname2.style.display = "none";
         
          const laname3 = document.getElementById("laname3");
          laname3.style.display = "none";
         
          const sbutton = document.getElementsByClassName("sbutton");
          sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff5000 0,#ff5000 100%)";
 
         let number =2;
        
         let searchdad = document.getElementById("searchdad");
         searchdad.setAttribute("className",number);
         

         searchdad.insertBefore(tm,searchdad.children[0]);
         searchdad.children[0].setAttribute("class","searchb1 searchbb1");
         searchdad.children[1].setAttribute("class","searcha1 searchtm1");
         searchdad.children[2].setAttribute("class","searcha1 searchdp1");
         const searchbb1 = document.getElementsByClassName("searchbb1");
         const searchdp1 = document.getElementsByClassName("searchdp1");
         searchbb1[0].children[1].style.display = "none";
          searchdp1[0].children[1].style.display = "none";
        };//点击天猫
        

        const dp = document.getElementById("dp");
        dp.onclick = function(){
        
         dp.children[0].style.display = "block";
         tm.children[0].style.display = "none";
         bb.children[0].style.display = "none";
          
         dp.children[1].style.display = "none";
        
          const laname2 = document.getElementById("laname2");
          laname2.style.display = "none";
         
          const laname3 = document.getElementById("laname3");
          laname3.style.display = "none";
         
          const sbutton = document.getElementsByClassName("sbutton");
          sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";

         let number =3;
        
         let searchdad = document.getElementById("searchdad");
         searchdad.setAttribute("className",number);

        
         searchdad.insertBefore(dp,searchdad.children[0]);
         searchdad.children[0].setAttribute("class","searchb1 searchbb1");
        searchdad.children[1].setAttribute("class","searcha1 searchtm1");
        searchdad.children[2].setAttribute("class","searcha1 searchdp1");
        const searchbb1 = document.getElementsByClassName("searchbb1");
         const searchdp1 = document.getElementsByClassName("searchdp1");
         searchbb1[0].children[1].style.display = "none";
          searchdp1[0].children[1].style.display = "none";
        };//点击店铺

    }else{

        
        let name = document.getElementById('name');
        name.style.paddingLeft = '10px';

        let laname = document.getElementsByClassName('laname');
        laname[0].children[0].setAttribute("id",'laname1');

       
        let searchdad = document.getElementById('searchdad');
        searchdad.onmouseover = null;
        searchdad.onmouseout = null;
        searchdad.children[1].style.display = "block";
    searchdad.children[2].style.display = "block";

    const bb = document.getElementById("bb");
    const tm = document.getElementById("tm");
    const dp = document.getElementById("dp");
        if(searchdad.getAttribute("className") ==2){
        bb.setAttribute("class","searcha");
        tm.setAttribute("class","searchb");
        dp.setAttribute("class","searcha");
        }else if(searchdad.getAttribute("className") ==3){
            bb.setAttribute("class","searcha");
            tm.setAttribute("class","searcha");
            dp.setAttribute("class","searchb");
        }else{
            bb.setAttribute("class","searchb");
            tm.setAttribute("class","searcha");
            dp.setAttribute("class","searcha");
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


        let laname3 = document.getElementById("laname3");
        laname3.style.paddingLeft = "275px";

        
        bb.onclick = function(){
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
         bb.setAttribute("class","searchb");
        
         
         tm.setAttribute("class","searcha");
         
         
         dp.setAttribute("class","searcha");
        };//点击宝贝
        

        
        tm.onclick = function(){

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

         bb.setAttribute("class","searcha");
        
         
         tm.setAttribute("class","searchb");
         
         
         dp.setAttribute("class","searcha");
        };//点击天猫
        

        
        dp.onclick = function(){
        
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

         bb.setAttribute("class","searcha");
        
         
         tm.setAttribute("class","searcha");
         
         
         dp.setAttribute("class","searchb");
        };//点击店铺
    };

    
    if(toscrollTop >= 438.8){
        let obj = document.getElementsByClassName('rightnav');
        obj[0].style.position = 'fixed';
        obj[0].style.top = '55px';

        let fixedtool7 = document.getElementsByClassName("fixedtool-7");
        fixedtool7[0].style.display = "block";
    }else{
        let obj = document.getElementsByClassName('rightnav');
        obj[0].style.position = 'absolute'; 
        obj[0].style.top = '513.8px';

        let fixedtool7 = document.getElementsByClassName("fixedtool-7");
        fixedtool7[0].style.display = "none";
    };

    }
   
   /*搜索栏 右侧栏*/

   window.onload= function () {

    const bb = document.getElementById("bb");
    bb.onclick = function(){
      const laname2 = document.getElementById("laname2");
      laname2.style.display = "block";
     
      const laname3 = document.getElementById("laname3");
      laname3.style.display = "block";
     
      const hotsfline = document.getElementsByClassName("hotsfline");
      hotsfline[0].style.display = "block";
     
      const sbutton = document.getElementsByClassName("sbutton");
      sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";
    
     const searchbb = document.getElementsByClassName("searchbb");
     searchbb[0].setAttribute("class","searchb searchbb");
    
     const searchtm = document.getElementsByClassName("searchtm");
     searchtm[0].setAttribute("class","searcha searchtm");
     
     const searchdp = document.getElementsByClassName("searchdp");
     searchdp[0].setAttribute("class","searcha searchdp");
    
     
     let number =1;
    
     let searchdad = document.getElementById("searchdad");
     searchdad.setAttribute("className",number);
    };//点击宝贝
    

    const tm = document.getElementById("tm");
    tm.onclick = function(){

      const laname2 = document.getElementById("laname2");
      laname2.style.display = "none";
     
      const laname3 = document.getElementById("laname3");
      laname3.style.display = "none";
     
      const hotsfline = document.getElementsByClassName("hotsfline");
      hotsfline[0].style.display = "none";
     
      const sbutton = document.getElementsByClassName("sbutton");
      sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff5000 0,#ff5000 100%)";
    
     const searchbb = document.getElementsByClassName("searchbb");
     searchbb[0].setAttribute("class","searcha searchbb");
    
     const searchtm = document.getElementsByClassName("searchtm");
     searchtm[0].setAttribute("class","searchb searchtm");
    
     const searchdp = document.getElementsByClassName("searchdp");
     searchdp[0].setAttribute("class","searcha searchdp");
    
    
     let number =2;
     
     searchdad.setAttribute("className",number);
    };//点击天猫
    

    const dp = document.getElementById("dp");
    dp.onclick = function(){
    
      const laname2 = document.getElementById("laname2");
     laname2.style.display = "none";
    
     const laname3 = document.getElementById("laname3");
     laname3.style.display = "none";
    
     const hotsfline = document.getElementsByClassName("hotsfline");
     hotsfline[0].style.display = "block";
    
     const sbutton = document.getElementsByClassName("sbutton");
     sbutton[0].style.backgroundImage = "linear-gradient(to right,#ff9000 0,#ff5000 100%)";
    
     const searchbb = document.getElementsByClassName("searchbb");
     searchbb[0].setAttribute("class","searcha searchbb");
    
     const searchtm = document.getElementsByClassName("searchtm");
     searchtm[0].setAttribute("class","searcha searchtm");
    
     const searchdp = document.getElementsByClassName("searchdp");
     searchdp[0].setAttribute("class","searchb searchdp");
    
    
     let number =3;
    
     let searchdad = document.getElementById("searchdad");
     searchdad.setAttribute("className",number);
    };//点击店铺
    
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

 let timer = null;
function animations(scrollTop){
  let osTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(scrollTop < osTop){
    let ispeed = Math.floor(osTop-osTop / 10);
    window.scrollTo(scrollTop,ispeed);
    if(scrollTop >= ispeed){
      window.scrollTo(scrollTop,scrollTop);
      clearInterval(timer);
    };
  }else if(scrollTop > osTop){
    let ispeed = Math.floor(osTop+osTop / 10);
    window.scrollTo(scrollTop,ispeed);
    if(scrollTop <= ispeed){
      window.scrollTo(scrollTop,scrollTop);
      clearInterval(timer);
    };
  };
  
};
const fixedtool1 = document.getElementsByClassName("fixedtool-1");
fixedtool1[0].onclick = function(){
 timer = setInterval(function(){animations(640)},30);
};
const fixedtool3 =document.getElementsByClassName("fixedtool-3");
fixedtool3[0].onclick = function(){
  timer = setInterval(function(){animations(2220)},30);
};
const fixedtool4 =document.getElementsByClassName("fixedtool-4");
fixedtool4[0].onclick = function(){
  timer = setInterval(function(){animations(2540)},30);
};
const fixedtool5 =document.getElementsByClassName("fixedtool-5");
fixedtool5[0].onclick = function(){
  timer = setInterval(function(){animations(3320)},30);
};
const fixedtool6 =document.getElementsByClassName("fixedtool-6");
fixedtool6[0].onclick = function(){
  timer = setInterval(function(){animations(4555)},30);
};
const fixedtool7 =document.getElementsByClassName("fixedtool-7");
fixedtool7[0].onclick = function(){

  let timer = null;
  clearInterval(timer);
  timer = setInterval(function(){
    //获取滚动条距离顶部高度
    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
    let ispeed = Math.floor(osTop-osTop / 7);
    window.scrollTo(0,ispeed);
    //到达顶部，清除定时器
    if (ispeed == 0) {
      
    clearInterval(timer);
    };
    },30);
};
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


}

// localstorage      sessionstorage  页面传值
// window对象  自定义对象   元素内自定义属性   
// 好的 code 高耦合低内聚   模块化一下