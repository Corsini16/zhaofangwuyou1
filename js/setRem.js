function setRem() {
    var uiWidth = 375;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;

    // 设备的宽 最大是600px
    clientWidth = clientWidth > 600 ? 600 : clientWidth;
    var html = document.querySelector('html');

    clientWidth = clientWidth < 230 ? 230 : clientWidth;
    // console.log(clientWidth);
    html.style.fontSize = (clientWidth / uiWidth) * 10 + 'px';


    var toubu = document.querySelector(".toubu")
    var toubu_my = toubu.children[1]
    toubu_my.onclick = function () {
        window.open("./index_login.html", '_self');
    }

  
    var toubu_shouye = toubu.children[0]
      toubu_shouye.onclick = function () {
         window.open("./index.html", '_self');
      }
}
window.onload = setRem;
window.onresize = setRem;


