$(document).ready(function () {

    //控制btn的样式
    function btnsHeight(ind) {
        if (ind < 0) {
            ind = -ind;
        }

        var d = ind / 600;

        if (d === 0) {
            d = 3;
        }
        if (d === 4) {
            d = 1;
        }

        //改变颜色
        $("#" + d)[0].style.color = "pink";

        for (let i = 0; i < $(".btns button:not('#" + d + "')").length; i++) {
            $(".btns button:not('#" + d + "')")[i].style.color = "black";
        }


    }

    //向右
    $("#right").click(function () {
        var st = $(".wrap")[0].style.left;
        var ind = parseInt(st.split('p')[0]);
        if (ind < -1800) {

            $(".wrap").animate({ left: "-1200px" }, "fast");
            ind = -1200;
        } else {
            $(".wrap").animate({ left: "-=600px" }, "fast");
            ind -= 600;
        }

        btnsHeight(ind);

    })
    //向左
    $("#left").click(function () {
        var st = $(".wrap")[0].style.left;
        var ind = parseInt(st.split('p')[0]);

        if (ind > -600) {

            $(".wrap").animate({ left: "-1200px" }, "fast");
            ind = -1200;
        } else {
            $(".wrap").animate({ left: "+=600px" }, "fast");
            ind += 600;
        }

        btnsHeight(ind);

    })
    //切换按钮
    $(".btns button").click(function (e) {

        var loc = -600 * $(this)[0].id + "px";

        //按钮颜色改变 
        $(this)[0].style.color = "pink";

        for (let i = 0; i < $(".btns button").length; i++) {
            if ($(".btns button")[i] != $(this)[0]) {
                $(".btns button")[i].style.color = "black";
            }
        }

        //移动滑块
        $(".wrap").animate({ left: loc }, "fast");

    })







})
