let rnd = Math.floor(Math.random()*13)+1;

let pic = "";
if(rnd<10)
{
    pic = "0"+rnd+".jpg";
}
else
{
    pic = rnd+".jpg";
}
document.getElementById("pic").src = "img/"+rnd+".jpg";
document.getElementById("pic").alt = rnd+".jpg";