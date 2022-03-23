canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseevent="empty";
var lastposition_x,lastposition_y;

colour="brown";
widthofline=2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
colour=document.getElementById("colour").value;
console.log(colour);
widthofline=document.getElementById("widthofline").value;

mouseevent="mousedown";


}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    currentposition_x=e.clientX-canvas.offsetLeft;
    currentposition_y=e.clientY-canvas.offsetTop;

    if(mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=widthofline;
        console.log("last position of x and y cordinates");
        console.log("x= "+lastposition_x+"and y= "+lastposition_y);
        ctx.moveTo(lastposition_x,lastposition_y);

        console.log("current position of x and y cordinates");
        console.log("x= "+currentposition_x+"and y= "+currentposition_y);

        ctx.lineTo(currentposition_x,currentposition_y);
        ctx.stroke();

    }
    lastposition_x=currentposition_x;
    lastposition_y=currentposition_y;


}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
    
}

function clearcanvas()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
