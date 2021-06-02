$(document).ready(function () {

    //make button appear when page loaded.
    //when clicked display alert box with message

    let btnSubmit = $('#btnSubmit')

    btnSubmit.on('click', function (event) {
        alert("You clicked me!")
    })

    //make button and text box.
    //when clicked, display alert with messaged typed in text box.

    let newBtn = $('#newBtn')
    let textBox = $('#textBox')

    newBtn.on('click', function (event) {

        let textValue = $('#textBox').val()
        alert(textValue)
    })

    //make div change to different background color when mouse over.
    //the div should change back to original color when the mouse exits the div.

    let colorDiv = $('#colorDiv')

    $(colorDiv).hover(function () {

        $(this).css("background-color", "pink");
    }, function () {
        $(this).css("background-color", "");

    });

    //put some text in a paragraph.
    //when you click on the paragraph, the color of the text switch to random color each click.
    let p = $("<p id='p'>This text changes colors when clicked<p>")
    $("body").append(p)
    // $("p").attr("id", "p").add("<span>This text changes colors when clicked</span>").appendTo("body");

    p.click(function () {

        function randomColorsGen () {
            
            let ranColors = '#' + Math.floor(Math.random() * 16777215).toString(16);
            return ranColors;
        }
        
        p.css("color", randomColorsGen);

    })

})

