
$(function () {

    $('.has-dropdown').on('mouseenter', function () {
        $(this).children('.drop-down').stop().slideDown();
    });
    $('.has-dropdown').on('mouseleave', function () {
        $(this).children('.drop-down').stop().slideUp();
    });
    //固定导航栏
    $(window).load(function () {
        var topHeight=$('.top-bar').height();

        $(window).scroll(function () {
            var top_barS=$(document).scrollTop();
            console.log(top_barS);
            if(top_barS>topHeight){
                $('.top-bar').css({
                    'position':'fixed',
                    'top':'0px',
                    'zIndex':100
                });
                //jq的表示不一样,防止下塌,则加一个padding值
                $('.main').css('paddingTop',topHeight);
            }else{
                $('.top-bar').css({
                    //此处定位为绝对定位则返回到一定位置看不到topbar
                    'position':'absolute',
                    'top':'0px',
                    'zIndex':100

                });
            }
        })
    });
    $(".has-button2").on('click', function () {
        $('#keyformcontainer').toggle();
        $(".top-bar").css({
           // 定位
           'position':'absolute',
            'top':'0px'
        });
    });
    //取消

    $("#quxiao").on('click', function () {
        $('#keyformcontainer').css('display','none');
        $(".top-bar").css({
            //定位是关键
            'position':'absolute',
            'top':'0px!important'
        });
    });
//图片放大,加遮罩层
    $(this).find('#trunk').stop().mouseenter(function () {

        $(this).animate({
            'width': '283px',
            'top': '-15px',
            'left': '-15px',
            'height': '202px',
            'opacity': '0.5',
        });
    });
    $(this).find('#trunk').stop().mouseleave(function () {
        $(this).animate({
            'width':'283px',
            'top':'0px',
            'left':'0px',
            'height':'202px',
            'opacity':'1'
        });
    });

    var licagree=document.getElementById("licagree");
    //触发disabled事件
    licagree.onclick= function () {
        if(licagree.checked==true) {
            document.getElementById("apisubmit").disabled = false;
            document.getElementById("apisubmit").style.backgroundColor = '#69AA35';
        }else{
            document.getElementById("apisubmit").disabled = true;
            document.getElementById("apisubmit").style.backgroundColor = '#ddd';
        }
    }
});
//正则判断
 function checkEmail(str) {
    var
        re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if (re.test(str)) {
        alert("正确");
        document.getElementById('yxkeleyi').style.backgroundColor = "white";
    } else {
        alert("错误");
        document.getElementById('yxkeleyi').style.backgroundColor = "red";
        document.getElementById('yxkeleyi5').style.backgroundColor = "red";
        document.getElementById('yxkeleyi').value = "请输入正确格式";
        document.getElementById('yxkeleyi5').value = "请输入正确格式";
    }
}

