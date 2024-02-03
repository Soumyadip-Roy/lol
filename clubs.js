var card = null;

function changeStyle(element) {
    applyStyles(element);
    var name = element.innerHTML;
    if(name=='About'){
        hidecontent("but1", element);
    }
    else if(name=='Coordinator'){
        hidecontent("but2", element);
    }
    else if(name=='Activities') {
        hidecontent("but3", element);
    }
}

function applyStyles(element) {
    card = element.closest(".clubcard");
    buttons = card.querySelectorAll("#but12");
    buttons.forEach((button)=>{
        button.style.background = "#FFF";
        button.style.color = "#4C6BF1";
    })
    element.style.background = "#4C6BF1";
    element.style.color = "#FFF";
    prevClicked = element;
}

prevClicked = document.querySelector('.butclub1');
applyStyles(prevClicked);

function hidecontent(eleid, element){
    const allco = card.querySelectorAll('.clubcontent');
    allco.forEach((cont)=>{
        let currid=cont.getAttribute('id');
        if(currid===eleid){
            console.log(currid);
            cont.style.display="block";
        }else{
            cont.style.display='none';
        }
    })
}

function hideallcontent(eleid){
    const allco = document.querySelectorAll('.clubcontent');
    allco.forEach((cont)=>{
        let currid=cont.getAttribute('id');
        if(currid===eleid){
            console.log(currid);
            cont.style.display="block";
        }else{
            cont.style.display='none';
        }
    })
}

hideallcontent("but1");