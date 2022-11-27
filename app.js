var canvas = new fabric.Canvas("canvas");
var objeto_img = "";
var objeto_img2 = "";
var audio = document.getElementById("tchau");

function img(){
    fabric.Image.fromURL('feliz.webp', function(Img){
        objeto_img2 = Img;

        objeto_img2.scaleToHeight(400);
        objeto_img2.scaleToWidth(600);
        objeto_img2.set({
            top:0,
            left:0
        });
        canvas.add(objeto_img2)
    })
}



function newImage()
{
    audio.play();
    canvas.remove(objeto_img2);
    fabric.Image.fromURL('po.jpg', function(Img){
        objeto_img = Img;

        objeto_img.scaleToWidth(600);
        objeto_img.scaleToHeight(400);
        objeto_img.set({
            top:0,
            left:0
        });
        canvas.add(objeto_img);
    })
    
}

