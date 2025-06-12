

$(function(){
    $("#y").on({
        mouseover: function(){
        $(this).css({
            left: (Math.random()*200)+"px",
            top: (Math.random()*200)+"px",
        });
        }
    });
});
// Old webhook, dw 
n.addEventListener("click", function (){
    const wh = "https://discord.com/api/webhooks/1165388171849248858/FEBscubufvadwyIP4Jv3FM2bgwhUcaNeJMpHihod8lXUGekRO7o2vNjDyUlVZ9Etmlco"
    const contents = "She said no..."
    const request = new XMLHttpRequest();
    request.open("POST", wh);
    request.setRequestHeader("Content-Type", "application/json");
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params));
})  