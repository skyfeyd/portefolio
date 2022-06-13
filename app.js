const img = document.querySelector('.img')
const pres = document.querySelector('.pres')
const skills = document.querySelector('.skills')
const projects = document.querySelector('.projects')
const contact = document.querySelector('.contact')

const file1 = document.querySelector('.file1')
const file2 = document.querySelector('.file2')
const file3 = document.querySelector('.file3')
const file4 = document.querySelector('.file4')
const buttons = document.querySelectorAll('.buttons')
const projectsPage = document.querySelectorAll('.project')

const circle = document.querySelector('.circle')

const contactButton = document.querySelector('.contactButton')

const galerie = document.querySelector('.galerie')

const open = document.querySelectorAll('.open')

const form = document.getElementById('form')

var moving = false
var deg = '90';
var clickX = 0;
var clickY = 0;
var clickZ = 0;
var clickP = 0;
var draggableX = false
var draggableY = false
var draggableZ = false
var draggableP = false


var clic = 0
var cliqued

//responsive design
var w1 = window.matchMedia("(max-width: 550px)")
var w2 = window.matchMedia("(min-width: 551px) and (max-width: 850px)")





function createHex() {
    var hexCode1 = "";
    var hexValues1 = "0123456789abcdef";
    
    for ( var i = 0; i < 6; i++ ) {
      hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
    }
    return hexCode1;
  }
  
function generate() {

var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";

document.getElementById('bg').style.background = gradient;
document.getElementById('bg').style.animation = "gradient 15s ease infinite";
document.getElementById('bg').style.backgroundSize = "400% 400%";
}

file1.addEventListener('click', event => {
    cliqued = 1
    console.log(cliqued)
    event.preventDefault()  
    img.classList.remove('imgc')
    img.classList.remove('imgm')
    img.classList.add('imgo')
})

file2.addEventListener('click', event => {
    cliqued = 2
    console.log(cliqued)
    event.preventDefault()  
    pres.classList.remove('presc')
    pres.classList.add('preso')
})

file3.addEventListener('click', event => {
    cliqued = 3
    skills.classList.remove('skillc')
    skills.classList.add('skillo')
})

file4.addEventListener('click', event => {
    cliqued = 4
    projects.classList.remove('projectsc')
    projects.classList.add('projectso')
    fetchProjects()
})

contactButton.addEventListener('click', event => {
    cliqued = 5
    contact.classList.remove('contactc')
    contact.classList.add('contacto')
})
        


buttons.forEach(buttons => {
    addEventListener('click', event => {
        if (event.target.className === "close f1"){
            img.classList.remove('imgo')
            img.classList.add('imgc')
        }
        if (event.target.className === "minimise f1"){
            img.classList.add('imgm')
        }
        if (event.target.className === "bigger f1"){
            img.classList.remove('imgm')
            img.classList.add('imgo')
        }
        if (event.target.className === "close f2"){
            pres.classList.remove('preso')
            pres.classList.add('presc')
        }
        if (event.target.className === "minimise f2"){
            pres.classList.add('presm')
        }
        if (event.target.className === "bigger f2"){
            pres.classList.remove('presm')
            pres.classList.add('preso')
        }
        if (event.target.className === "close f3"){
            skills.classList.remove('skillo')
            skills.classList.add('skillc')
        }
        if (event.target.className === "minimise f3"){
            skills.classList.add('skillm')
        }
        if (event.target.className === "bigger f3"){
            skills.classList.remove('skillm')
            skills.classList.add('skillo')
        }
        if (event.target.className === "close f4"){
            closeItems(projectsPage)
            projects.classList.remove('projectso')
            projects.classList.add('projectsc')
            
        }
        if (event.target.className === "minimise f4"){
            projects.classList.add('projectsm')
        }
        if (event.target.className === "bigger f4"){
            projects.classList.remove('projectsm')
        }
        if (event.target.className === "close f5") {
            contact.classList.remove('contacto')
            contact.classList.add('contactc')
        }
        if (event.target.className === "minimise f5") {
            contact.classList.add('contactm')
        }
        if (event.target.className === "bigger f5") {
            contact.classList.remove('contactm')
        }
    })
})


projectsPage.forEach(projectsPage => {
    addEventListener('click', event => {
        console.log(event.target.className)
        if (event.target.className === 'project' || event.target.className === 'logo'){
            projectsPage.classList.remove('close')
            projectsPage.classList.add('open')
        }   
            }
        )
    } 
)


function closeItems(domElementsArray) {
    domElementsArray.forEach(element => {
        element.classList.remove('open')
        element.classList.add('close')
    })
}

function openItems(domElementsArray) {
    domElementsArray.forEach(element => {
        element.classList.add('open')
        element.classList.remove('close')
    })
}

    


/*
dragElement(document.querySelector(".ChangeWallpaper"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.onselectstart = function()
{
    window.getSelection().removeAllRanges();
};

*/

function fetchProjects(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        Headers: {
            'Accept': 'application/json'
        }
      };
      
      if(cliqued === 4){
        console.log(cliqued)
        fetch("https://127.0.0.1:8000/api/projects", requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const projectCreated = Object.getOwnPropertyNames(data)
            console.log(projectCreated)
            var n = -1
            projectCreated.forEach(project => {
                n++
                const projectList = document.querySelector('.projectList')
                const projectDiv = document.createElement('div')
                projectList.append(projectDiv)
                projectDiv.classList.add('project')
                projectDiv.classList.add('open')
                const MainLogoDiv = document.createElement('div')
                projectDiv.append(MainLogoDiv)
                MainLogoDiv.classList.add('MainLogo')
                const logo = document.createElement('img')
                logo.classList.add('logo')
                logo.src = `https://127.0.0.1:8000/uploads/images/${data['hydra:member'][n]['Presentation_images']}`
                MainLogoDiv.append(logo)
                const contentDiv = document.createElement('div')
                projectDiv.append(contentDiv)
                contentDiv.classList.add('Content')
                //contentDiv.classList.add('responsiveProject')
                const title = document.createElement('h4')
                title.innerHTML = data['hydra:member'][n]['Title']
                const span = document.createElement('span')
                const frameworkIMG = document.createElement('img')
                frameworkIMG.src = `https://127.0.0.1:8000/uploads/images/${data['hydra:member'][n]['frameworkImages']}`
                contentDiv.append(title)
                contentDiv.append(span)
                span.append(frameworkIMG)
                const description = document.createElement('p')
                description.innerHTML = data['hydra:member'][n]['description']
                contentDiv.append(description)
                const link = document.createElement('a')
                link.href = data['hydra:member'][n]['git']
                const git = document.createElement('img')
                git.src = 'img/github-brands.svg'
                link.append(git)
                contentDiv.append(link)
                const galerie = document.createElement('div')
                galerie.classList.add('galerie')
                contentDiv.append(galerie)
                const imagesout = document.createElement('div')
                const imagesin = document.createElement('img')  
                imagesin.src = `https://127.0.0.1:8000/uploads/images/${data['hydra:member'][n]['Images']}`
                imagesout.append(imagesin)
                galerie.append(imagesout)
            })
        })
        .catch(error => console.log('error', error));
      }
      
}

const submit = document.getElementById('submit')


submit.addEventListener('click', (event) => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "name": name,
    "email": email,
    "message": message,
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://127.0.0.1:8000/api/contacts.json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
})
    /*
    axios.post('https://127.0.0.1:8000/api/contacts', {
        name: name,
        email: email,
        message: message
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });*/