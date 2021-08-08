
// const inputDiv = document.createElement('div');
// const inputSpan = document.createElement('span');
// inputDiv.append(inputSpan);

// inputDiv.style.border = "1px solid red";
// inputDiv.style.padding = "10px"
// inputSpan.innerText = "Enter text";

// inputDiv.style.width = "200px";
// inputDiv.style.height = "40px";


// inputDiv.addEventListener("mousemove", function() {
//     inputDiv.style.border = "1px solid black"
// });

// inputDiv.addEventListener("mouseout", function() {
//     inputDiv.style.border = "1px solid red"
// });

// let keyDownHandler = function(e) {
//     const key = e.key;
//     inputSpan.innerText += key;
// };


// let clickHandler = function(e) {
//     console.log("div clicked")
//     inputSpan.innerText = "";

//     document.addEventListener('keydown', keyDownHandler);

//     e.stopPropagation();
// }

// inputDiv.addEventListener('click', clickHandler);

// document.body.addEventListener('click', function () {
//     console.log('body clicked');

//     document.removeEventListener('keydown', keyDownHandler);
//     // wavshalot eventi 
// });

// document.body.append(inputDiv);


// ------------------------------------------------------


/**
 * 
 *  <div> 
 *      <div class="ball position-absolute"></div>
 * </div>
 * 
 * 
 */

const stripeDiv = document.createElement('div');
stripeDiv.style.margin = "40px";
stripeDiv.style.width = "400px";
stripeDiv.style.height = "2px";
stripeDiv.style.background = "black";

const ballDiv = document.createElement('div');
ballDiv.style.width = "20px";
ballDiv.style.height = "20px";
ballDiv.style.borderRadius = "50%";
ballDiv.style.background = "red";
ballDiv.style.position = "absolute";

ballDiv.style.left = "50%";
ballDiv.style.marginTop = "-10px"


const mousemoveHandler = function (e) {
    const x = e.pageX;
    console.log(x);

    const stripeDivCoords = stripeDiv.getBoundingClientRect();
    // console.log(stripeDivCoords);

    const leftBoundX = stripeDivCoords.x;
    const rightBoundX = stripeDivCoords.right;

    if (x < leftBoundX || x > rightBoundX) {
        return;
    }

    ballDiv.style.left = x + 'px'; // 10 + "px" = 10px;
}

function beforeMousemoveHandler(event) {
    mousemoveHandler(event);
}

const clickHandler = function (e) {
    console.log('ball clicked');
    document.addEventListener('mousemove', beforeMousemoveHandler);
}

function beforeClickHandler() {
    clickHandler();
}

ballDiv.addEventListener('mousedown', beforeClickHandler);

function beforeMouseupHandler() {
    console.log('mouse up')
    document.removeEventListener('mousemove', beforeMousemoveHandler);
}


document.addEventListener('mouseup', beforeMouseupHandler)

// დავალება 
// დაყავით მოცემული progress-bar ი დონნებათ
// იყვეს 10 დონე
// ბურთის გადასვლა შეიძლებოდეს მხოლოდ დონიდან-დონეზე 
// დაბლა სადმე ვაჩვენოთ მოცემული დონე ნებისმიერი გადასვლის დროს

function moveBall() {
    // xelovnurad davawirot 
    beforeClickHandler();

    let counter = 0;
    const interval = setInterval(() => {
        const x = Math.floor(Math.random() * 500);
        const y = Math.floor(Math.random() * 500);

        // xelovnurad gavaketot mausis modzraoba 
        beforeMousemoveHandler({ pageX: x, pageY: y });

        if (counter++ > 20) { 
            beforeMouseupHandler();
            clearInterval(interval);
        }
    }, 200);
}

setTimeout(() => {
    moveBall();
    console.log("started");
}, 1000);

stripeDiv.append(ballDiv);
document.body.append(stripeDiv);