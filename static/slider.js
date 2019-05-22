
// 拿到一行排列的所有内容项
var wrap = document.getElementById("wrap");
//当前项显示，是一个数组
var span = document.getElementsByTagName("span")
//向左
function slideLeft() {
    //如果到最左，触发循环
    if (wrap.style.left == '0px') {
        wrap.style.left = '-1000px'
        //每点击一次，向左移动一个item单项
    } else {
        var newLeft = parseInt(wrap.style.left) + 500;
        wrap.style.left = newLeft + 'px';


    }
    //通过位置，得到当前是哪一项
    var index = getCurrentIndex(wrap.style.left);
    //对当前项变色
    span[index - 1].style.color = 'pink';
    //非当前项褪色
    for (let i = 0; i < span.length; i++) {
        if (i != index - 1) {
            span[i].style.color = 'black';
        }
    }


}

//向右，与向左原理相似。不同在最右时触发循环
function slideRight() {
    if (wrap.style.left == '-2000px') {
        wrap.style.left = '-1000px';

    } else {
        var newRight = parseInt(wrap.style.left) - 500;
        wrap.style.left = newRight + 'px';


    }

    var index = getCurrentIndex(wrap.style.left);

    span[index - 1].style.color = 'pink';

    for (let i = 0; i < span.length; i++) {
        if (i != index - 1) {
            span[i].style.color = 'black';
        }
    }

}
//拿到当前项
function getCurrentIndex(left) {
    var nowIndex = parseInt(left.split('p')[0]) / 500;
    //循环原理
    if (nowIndex == -4) {
        nowIndex = 1
    }
    if (nowIndex == 0) {
        nowIndex = 3;
    }

    if (nowIndex < 0) {
        nowIndex = -nowIndex;
    }
    return nowIndex;

}
//定时器，4s定时切换
setInterval(() => {
    slideLeft()
}, 4000)




