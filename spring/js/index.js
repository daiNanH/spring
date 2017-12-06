window.onload = function(){
    /*幻灯片*/
    function pic(){
        var pic = document.getElementsByClassName("pic")[0];
        var wrap = document.getElementById("wrap");
        var li = wrap.getElementsByTagName("li");
        var btn = document.getElementById("btn");
        var span = btn.getElementsByTagName("span");
        var timer = null;
        var index = 0;
        /*定义函数*/
        function main(){
            timer=setInterval(function(){
                for (var i = 0; i < li.length; i++){
                    li[i].className="";
                    span[i].className = "";
                    }
                index++;
                if( index >= li.length){
                    index = 0;
                    }
                li[index].className="active";
                span[index].className = "active";
            },2000);
            }
        /*执行函数*/
        main();
        pic.onmouseover = function(){
            clearInterval(timer);
            }
        pic.onmouseout = function(){
            main();
            }
            for (j = 0; j < span.length; j++){

                span[j].onclick=function(){
                    for (var i = 0; i < li.length; i++){
                    li[i].className="";
                    span[i].className = "";
                    }
                    this.className="active";
                    var a=this.getAttribute("index");
                    li[a].className="active";
                   index = a;
                }
            }
        }
    pic();
    }


