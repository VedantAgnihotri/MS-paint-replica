canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

mouse_event = 'empty';

var last_position_y; 
var last_position_x;

color = "red";
width = 2;

canvas.addEventListener('mousedown',mousedown);

function mousedown(e){
    mouse_event = 'mousedown';
}

canvas.addEventListener('mouseup',mouseup);

function mouseup(e){
    mouse_event = 'mouseup';
}

canvas.addEventListener('mouseleave',mouseleave);

function mouseleave(e){
    mouse_event = 'mouseleave';
}

canvas.addEventListener('mousemove',mousemove);

function mousemove(e){
   currentX = e.clientX-canvas.offsetLeft;
   currentY = e.clientY-canvas.offsetTop;

   if (mouse_event == 'mousedown'){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;

       console.log('last postion of x and y = ');
       console.log('x= '+last_position_x+'y= '+last_position_y);
       ctx.moveTo(last_position_x,last_position_y);

       console.log('current postion of x and y = ');
       console.log('x= '+currentX+'y= '+currentY);
       ctx.lineTo(currentX,currentY);
       ctx.stroke();
   }

   last_position_y = currentY;
   last_position_x = currentX;
}