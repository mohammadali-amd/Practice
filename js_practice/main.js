    //1- Use the getElementById method to find the <p> element, and change its text to "Hello".
    document.getElementById("demo").innerHTML= "Hello";

    //2- Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
    document.getElementsByTagName("p")[0].innerHTML= "Hello";

    //3- Change the text of the first element that has the class name "test".
    document.getElementsByClassName("test")[0].innerHTML= "Hello";

    //4- Use HTML DOM to change the value of the image's src attribute.
    document.getElementById("image").src= "pic_mountain.jpg";

    //5- Use HTML DOM to change the value of the input field.
    document.getElementById("myText").value= "Have a nice day!";

    //6- Change the text color of the <p> element to "red".
    document.getElementById("demo").style.color= "red";

    //7- Change the font size of the p element to 40 pixels.
    document.getElementById("demo").style.fontSize= "40px";

    //8- Use the CSS display property to hide the p element.
    document.getElementById("demo").style.display= "none";

    //9- Use the eventListener to assign an onclick event to the <button> element.
    document.getElementById("demo").addEventListener("click", myFunction);
    