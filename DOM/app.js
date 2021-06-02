document.addEventListener("DOMContentLoaded", button);
function button() {

    //make button appear when loaded.
    let div1 = document.getElementById('div1')
    let button = document.createElement("button");
    let btnText = document.createTextNode("Click Me!");
    button.appendChild(btnText);
    div1.appendChild(button);

    //when button clicked, display alert with message.

    button.addEventListener("click", function () {
        alert("You clicked me");
    });

    //create button and textbox.
    //when is button clicked, create alert with textbox input.

    document.getElementById('newBtn').addEventListener('click', function () {
        let message = document.getElementById('textbox').value;
        alert(message)
    })


    //make div change to different background color when mouse hovers over it. 
    //return to original color when mouse exits.

    document.getElementById('colorDiv').onmouseover = function () {
        let target = event.target
        target.style.backgroundColor = 'pink';
    };

    document.getElementById('colorDiv').onmouseout = function () {
        let target = event.target
        target.style.backgroundColor = '';
    };

    //Put some text in a paragraph. Make it where when you click on the paragraph, 
    //the color of the text switch to a random color each click

    let item4 = document.getElementById('item4')
    let paragraph = document.createElement('p')
    paragraph.textContent = "This text changes colors when clicked."
    item4.appendChild(paragraph)

    paragraph.addEventListener('click', function () {

        function randomColors() {
            let ranColors = '#' + Math.floor(Math.random() * 16777215).toString(16);
            return ranColors;
        }

        paragraph.style.color = randomColors();
    })

    //add button to empty div. when clicked add span containing name to div

    let button5 = document.createElement("button")
    button5.innerText = 'button5'
    document.body.appendChild(button5)

    button5.addEventListener('click', function () {

        let item5 = document.getElementById('item5')
        let span = document.createElement('span')
        span.textContent = "Sophia"
        item5.appendChild(span)

    })

    //create array of friends. when button clicked, add each name as <li> to <ul>.

    
    let button6 = document.getElementById('button6')
    let friendsLi = ['Jenni', 'Jessica', 'Robby', 'Amelia', 'Matt', 'Phillip', 'Nancy', 'Bob', 'Ethan', 'Dallas']
    let counter = 0
    
    button6.addEventListener('click', function () {
        
        let list = document.getElementById("list")
        let li = document.createElement('li')
        li.innerHTML = friendsLi[counter]
        document.body.appendChild(button6)
        list.appendChild(li)

        counter++
    })

}