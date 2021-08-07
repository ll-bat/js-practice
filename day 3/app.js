// access elements 

// const divs = document.querySelectorAll('div');
// console.log(divs);

// const raimeClassiDiv = document.querySelector('.raime-classi');
// console.log(raimeClassiDiv);

// const helloSpan = document.querySelector('#hello');
// console.log(helloSpan);

// const divChildP = document.querySelector('div p');
// console.log(divChildP);

// const withMultipleAttributes = document.querySelector('span.spani.spani-2#hello');
// console.log(withMultipleAttributes);


// change styles 
// ბექგრაუნდი ყველა დივს გავუხადოთ მწვანე 
// console.log('----------------------------------');
// divs.forEach(function (div) {

    // <div style="border: 2px solid black"></div>


    // div.setAttribute("class", "alkfjdals kfdskfj ");
    // div.setAttribute("name", "[rame name] ");
    // div.setAttribute("data-params", "1");

    // div.className += " raime aali classi"

    // div.classList.add('rame-axali');

    // function removeClass(attribute, toRemoveClassName) {
    //     // attribute.classList.remove(cls)
    //     const className = attribute.className;

    //     const classNames = className.split(" ");
    //     const newList = classNames.filter(function (existingClassName) {
    //         return existingClassName !== toRemoveClassName;
    //     });

    //     const newClassname = newList.join(" ");
    //     attribute.className = newClassname;

    //     console.log(attribute.className);
    // }

    // removeClass(div, "rame-axali")

    // const className = div.className;

    // div.style.background = "green";
    // div.style.border = "2px solid black"
    // div.style.borderColor = "red";

    // davsetot ramodenime stili ertdroulad 
    // const objOfAttributes = {
    //     background: "red",
    //     color: "cyan",
    //     fontWeight: "bold",
    //     fontSize: "20px",
    // }


   

    // const timeout = setTimeout(function(){
        // for (let key in objOfAttributes) {
        //     const value = objOfAttributes[key];
        //     div.style[key] = value;
        // }
        // console.log("in settimout")
    // }, 1000);

    // clearTimeout(timeout);

    // const interval = setInterval(function() {
    //     console.log("in settimout")
    // }, 1000);

    // clearInterval(interval);


    // console.log("after settimeout")

// })


// create elements 

// const newDiv = document.createElement('div');
// newDiv.className = "axali-divi";
// newDiv.setAttribute('id', 'raime');
// newDiv.style.color = "red";
// console.log(newDiv);

// const newSpan = document.createElement('span');
// newSpan.innerText = "axali spani";

/**
 * <div>
 *  <span> </span>
 * </div>
 */

// newDiv.append(newSpan);

// document.body.append(newDiv);



// const div = document.querySelector('div');
// const innerHTML = div.innerText;

// console.log('html', div.innerHTML);
// console.log('text', div.innerText);


// const p = document.querySelector('#marto-p');
// p.innerText = div.innerText;

// // delete elements 
// const vigacasDiv = document.querySelector('.vigaca');
// console.log(vigacasDiv);
// vigacasDiv.remove();


// amoige monacemi
// monacemi.remove();

// sheqmnei 
// ragaca = document.createElement('p');
// ragaca.remove();

// events 
// window.onload = function(e) {
    // console.log('window is loaded')
// }

///////////////////////////////

// const loadHandler = function(e) {
    // console.log('load handler')
// }

// window.addEventListener('load', loadHandler)
// window.removeEventListener('load', loadHandler)

// window.addEventListener('load', function(e) {
    // console.log('mesame eventi');
// })


// <button> Click me </button
// const button = document.createElement('button');
// button.innerText = "Click me";

// button.addEventListener('click', e => {
//     console.log(e);
// })

// document.body.append(button);


// const usernameSelector = document.createElement('input');
// const passwordSelector = document.createElement('input');

// usernameSelector.addEventListener('input', function(e) {
//     console.log(this.value);
// });

// const clickMeButton = document.createElement('button');
// clickMeButton.innerText = "Click Me";

// [usernameSelector, passwordSelector, clickMeButton].forEach(selector => {
//     document.body.append(selector)
// });

// clickMeButton.addEventListener('click', e => {
//     const username = usernameSelector.value;
//     const password = passwordSelector.value;
//     console.log(username, password);
//     usernameSelector.value = "";
//     passwordSelector.value = "";
// })

// js animaiton - ball moving 

