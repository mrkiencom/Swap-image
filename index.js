window.onload = function(){
    // var links = document.getElementsByTagName("a");
    // // console.log("link")
    // for( let iteam of links){
    //     let img = new Image();
    //     img.src = iteam.href;
    //     iteam.onclick = function(e){
    //         e.preventDefault();
    //         //document.getElementById("img-show").src = img.src; 
    //         //document.getElementById("caption").innerText = iteam.children[0].alt;
    //     }
    // }
    

        // setInterval(function(){
        //     i++;
        //     document.getElementById("count").innerText = i;
        // },1000);
    var child = document.getElementsByTagName("a");
            i=0;
            var count = setInterval(function(){
                i++;
                content = "Ảnh thứ : " + JSON.stringify(i);
                document.getElementById("img-content").innerText = content;
                document.getElementById("img-show").src = child[i].href;
                if (i===3) i=0; 
            },1000);
        
}
    

