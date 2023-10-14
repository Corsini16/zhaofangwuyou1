function login() {
    var phone1 = document.querySelector(".phone1")
    var phone2 = document.querySelector(".phone2")
    var psd = document.querySelector(".psd");
    // 发送验证码
    var facode = document.querySelector("#facode")
    var code = document.querySelector(".code")
    var login1 = document.querySelector(".login1")
    var login2 = document.querySelector(".login2")

    var num;
    var regnumber = /^1[345789][0-9]{9}$/;
    var regpwd = /^(?=.*[a-zA-Z])(?=.*\d).+$/
    facode.onclick = () => {
        var time=60;
        num = (Math.random() * 9).toFixed(0) + (Math.random() * 9).toFixed(0) + (Math.random() * 9).toFixed(0) + (Math.random() * 9).toFixed(0)
        facode.disabled=true;
        alert('验证码：' + num)
        var timer=setInterval(function(){
            time--;
            facode.innerHTML=time+' 秒';
            if(time==0){
                clearInterval(timer);
                time=60;
                facode.disabled=false;
                facode.innerHTML='发送验证码'
            }
        },1000)
        return num;
    }

    login1.onclick = function () {
        var phone = regnumber.test(phone1.value)
        var password = regpwd.test(psd.value)
        var number = getCookie('phone')
        var password_ = getCookie('password')
        if (phone && password) {
            if (phone1.value == number) {
                if (psd.value == password_) {
                    window.open('../my.html', '_self')
                } else {
                    alert('两次密码输入不一样')
                }
            } else {
                alert('手机号未注册\n请先注册！')
            }
        } else {
            alert('手机号或密码错误！\n请重新输入')
            phone1.value = '';
            psd.value = ''
        }
    }


 
    login2.onclick = function () {
        var phone = regnumber.test(phone2.value)
        var vreify = num == code.value
        var number = getCookie('phone')
        if (phone && vreify) {
            if (phone2.value == number) {
                window.open('../my.html', '_self')
            } else {
                alert('手机号未注册\n请先注册！')
            }
        } else {
            alert('手机号或验证码或密码错误！\n请重新输入')
            phone2.value = '';
            code.value = ''
        }
    }
    


}
window.addEventListener('load', login, false)


