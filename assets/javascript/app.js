alert("hello");

var newDiv = $("<div>");

newDiv.text("Whats up");

$("#empty-div").append(newDiv);




    // j

    // jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
    // $("#empty-div").append(newDiv);

    // // If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.
    // newDiv.attr("class", "fancy");