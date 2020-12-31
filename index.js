function open_tab(event, tab_id){
    let tab_content, btns;

    //hide other tabs and display target tab
    tab_content = document.getElementsByClassName("tab_content");
    for(let i = 0; i < tab_content.length; i++){
        tab_content[i].style.display = "none";
    }
    document.getElementById(tab_id).style.display = "flex";

    btns = document.getElementsByClassName("tab_container");
    btns = btns[0].getElementsByTagName('button');
    for(let i = 0; i <btns.length; i++){
        btns[i].className = "";
       
    }
    event.target.className += " active";
    console.log(event.currentTarget)
    
    
}



//a simple background animation 
//function expression to avoid interference with other files.
!function(){
    var c = document.createElement("canvas"),
    context = c.getContext("2d"),
    attr = { //change canvas properties.
        z: -1,
        color: "100,147,239",
        opacity: 0.2,
        count: 66,
        radius: 2,   //radius of dot
        speed_fac: 0.5 //increase to speed up dot movement
    }
    c.id = "bg_canvas";
    c.style.transitionTime = 0.2 //smooth strokes
    c.style.cssText = "position:fixed;top:0px;leftpx:0;z-index:" + attr.z + ";opacity:" +attr.opacity;
    document.getElementsByTagName("body")[0].appendChild(c);
    
    //get window size 
    get_window_HW();
    window.onresize = get_window_HW;
    function get_window_HW(){
        c.height =  (document.documentElement.clientHeight && window.innerHeight) ? 
        Math.min(document.documentElement.clientHeight, window.innerHeight) : 
        document.documentElement.clientHeight|| window.innerHeight|| document.body.clientHeight;

        c.width = (document.documentElement.clientWidth && window.innerWidth) ?
        Math.min(document.documentElement.clientWidth, window.innerWidth) :
        document.documentElement.clientWidth|| window.innerWidth || document.body.clientWidth;
    };

    //initialize dot objects 
    var random = Math.random,
    yuki_list = [];
    for(let i = 0; i < attr.count; i++){
        var yuki_x = random() * c.width,
        yuki_y = random() * c.height,
        yuki_xa = 2*random()-1,
        yuki_ya = Math.sqrt( 1 - yuki_xa * yuki_xa) * Math.sign(random() - 0.5);

        yuki_list.push({
            x: yuki_x,
            y: yuki_y,
            x_a: yuki_xa * attr.speed_fac,
            y_a: yuki_ya * attr.speed_fac,
            max: 3600 //max distance between mouse yuki and generated yuki
        });
    }
    
    //functions to locate mouse and create mouse object with x, y locations as properties.
    var mouse = {
        x: null,
        y: null,
        x_a: 0,
        y_a: 0,
        max: 8400
    }
    window.onmousemove = get_mouse;
    function get_mouse(i){
        mouse.x = i.clientX;
        mouse.y = i.clientY;
    };
    window.onmouseout = function clear_mouse(){
        mouse.x = null;
        mouse.y = null;
    };

    //for smoother animation
    var animation = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (i) {
        window.setTimeout(i, 1000/100)
    };
    
    function draw(){
        context.clearRect(0,0,c.width,c.height);
        all_yuki = [mouse].concat(yuki_list)
        all_yuki.forEach( i => {
            context.beginPath();
            context.arc(i.x,i.y,attr.radius,0,Math.PI*2);
            context.fill();
            context.fillStyle = 'rgb('+ attr.color + ")";

            all_yuki.forEach(function(j){
                if (i.x != j.x && i.y != j.y){
                    let diff_x = i.x - j.x, diff_y = i.y - j.y, dist = diff_x*diff_x + diff_y*diff_y;
                    if(dist < i.max){//close enough so draw line
                        context.moveTo(i.x,i.y);
                        context.lineTo(j.x,j.y);
                        let l_w_fac = (i.max-dist)/i.max;
                        context.lineWidth =  l_w_fac * attr.radius;
                        context.strokeStyle = "rgba(" + attr.color + "," + (l_w_fac/2 + 0.1) + ")";
                        context.stroke();
                    }
                }
            });
            
            i.x += i.x_a;
            i.y += i.y_a;
            i.x_a = (i.x > c.width || i.x < 0)? -i.x_a : i.x_a;
            i.y_a = (i.y > c.height || i.y < 0)? -i.y_a : i.y_a;

        });
        animation(draw);
    }

    //start canvas animation 
    setTimeout(function () {
        draw();
    }, 100);
}();