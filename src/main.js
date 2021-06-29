init();

function init(){
    const map = document.getElementById("list");

    const up = document.getElementById("ArrowUp");
    up.addEventListener("click", function() {
        addUp();
    })

    const left = document.getElementById("ArrowLeft");
    left.addEventListener("click", function() {
        addLeft();
    })

    const right = document.getElementById("ArrowRight");
    right.addEventListener("click", function() {
        addRight();
    })

    const down = document.getElementById("ArrowDown");
    down.addEventListener("click", function() {
        addDown();
    })

    const clear = document.getElementById("Escape");
    clear.addEventListener("click", function() {
        clearAll();
    })
}

var num = 0;

function addUp(){
    if(num>=10) return;
    num++;
    const map = document.getElementById("list");
    
    const item = document.createElement('img');
    item.src = "src/images/up.png";
    item.width = 78;
    item.height = 78;

    map.appendChild(item);

    //<img src="src/images/left.png" width="80" height="80">

    /*
    const block = document.createElement('div');
    const blockText = document.createTextNode("↑");

    block.className = "item";
    block.appendChild(blockText);

    map.appendChild(block);
    */
}

function addLeft(){
    if(num>=10) return;
    num++;
    const map = document.getElementById("list");

    const item = document.createElement('img');
    item.src = "src/images/left.png";
    item.width = 80;
    item.height = 80;

    map.appendChild(item);
    
    /*
    const block = document.createElement('div');
    const blockText = document.createTextNode("←");

    block.className = "item";
    block.appendChild(blockText);

    map.appendChild(block);
    */
}

function addRight(){
    if(num>=10) return;
    num++;
    const map = document.getElementById("list");
    
    const item = document.createElement('img');
    item.src = "src/images/right.png";
    item.width = 80;
    item.height = 80;

    map.appendChild(item);

    /*
    const block = document.createElement('div');
    const blockText = document.createTextNode("→");

    block.className = "item";
    block.appendChild(blockText);

    map.appendChild(block);
    */
}

function addDown(){
    if(num>=10) return;
    num++;
    const map = document.getElementById("list");
    
    const item = document.createElement('img');
    item.src = "src/images/down.png";
    item.width = 80;
    item.height = 80;

    map.appendChild(item);

    /*
    const block = document.createElement('div');
    const blockText = document.createTextNode("↓");

    block.className = "item";
    block.appendChild(blockText);

    map.appendChild(block);
    */
}

function clearAll(){
    num=0;
    const list = document.getElementById("list");
    while(list.hasChildNodes) list.removeChild( list.firstChild );
}

function clearOne(){
    if(num<=0) return;
    num--;
    const list = document.getElementById("list");

    list.removeChild( list.lastChild );
}

window.addEventListener("keydown", e => {
    const keyObj = document.getElementById(e.key);
    if(keyObj) {
        keyObj.classList.add('mytest');
    }

    switch (e.key){
        case "ArrowUp":
            addUp();
            break;
        case "ArrowDown":
            addDown();
            break;
        case "ArrowLeft":
            addLeft();
            break;
        case "ArrowRight":
            addRight();
            break;
        case "Backspace":
            clearOne();
            break;
        case "Escape":
            clearAll();
            break;
    }

});

window.addEventListener("keyup", e => {
    const key = document.getElementById(e.key);
    if (key) {
        key.classList.remove('mytest');
    }
});

function disableScroll() { 
    document.body.classList.add("stop-scrolling"); 
  } 
  
  let stopScroll = disableScroll();