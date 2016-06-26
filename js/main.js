$(function () {


    //判断浏览器
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return false;
        } else {
            return true;
        }
    }



    var isPc=browserRedirect();
    var en = ['Home', 'Education', 'Skills', 'Experiences', 'Contact'];
    var cn = ['首页', '教育', '技能', '经历',  '联系'];
    var pcBgColor = ['#ba92bc', '#5996bf', '#3c4f74', '#84638c','#676fa7'];
    var mBgColor = ['#81c2d6','#81c2d6','#81c2d6','#81c2d6','#81c2d6'];
    var isEn = window.location.href.indexOf('en.html') >= 0;








    $('#dowebok').fullpage({
        sectionsColor: isPc?pcBgColor:mBgColor,
        navigation: true,
        navigationTooltips: isEn?en:cn,
        resize: true,
        continuousVertical: true


    });
});