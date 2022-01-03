function loop(){
    let count = 0;
    let timer = setInterval(function(){
        count= count +1
        document.getElementById("count").innerHTML = count;
    }, 1000);
}