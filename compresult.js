let defaultStyle = {
    "color": "#0C2695",
    "font-feature-settings": "'clig' off, 'liga' off",
    "font-size": "1rem",
    "font-style": "normal",
    "font-weight": "700",
    "line-height": "130%",
    "border-radius": "0.25rem 0.25rem 0rem 0rem",
    "border-top": "1px solid #EAEAEA",
    "border-right": "1px solid #EAEAEA",
    "border-left": "1px solid #EAEAEA"
};

let prevClicked = null;




function changeStyle(element) {
    applyStyles(element);
    localStorage.setItem('activeLink', element.classList[0]); 
}

function applyStyles(element) {
    let clickedStyle = window.getComputedStyle(element);

    if (prevClicked !== null) {
        Object.keys(defaultStyle).forEach((key) => {
            prevClicked.style.setProperty(key, clickedStyle[key]); 
        });
    }

    Object.keys(defaultStyle).forEach((key) => {
        element.style.setProperty(key, defaultStyle[key]); 
    });

    prevClicked = element; 
}

// window.onload = function () {
//     prevClicked = document.querySelector('.roll_special');
//         applyStyles(prevClicked);
// };
        prevClicked = document.querySelector('.roll_special');
        applyStyles(prevClicked);

function hideallcontent(eleid){
    const allco=document.querySelectorAll('.rollno');
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
hideallcontent("secompa");
const allcont=document.querySelectorAll(".rollnolist");
allcont.forEach((respon)=>{
    respon.addEventListener('click',(eve)=>{
        eve.preventDefault();
         
        let eleid=respon.getAttribute("id");
        eleid=eleid.slice(0,-1);
        console.log(eleid);
        hideallcontent(eleid);

    })
})