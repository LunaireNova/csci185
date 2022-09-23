const defaultTheme = ev => {
    // your code here.
    console.log("default theme function triggered.")
    document.querySelector("body").className = ""
    //what do I want to taret?
    //       Body Tag
    //A: Body tag
    // Q: What do I wanna change about the body tag
    // A: Its class (which is done by setting the className property)
};

const oceanTheme = ev => {
   // your code here.
   console.log("Ocean theme function triggered.")
   document.querySelector("body").className = "ocean"
};

const desertTheme = ev => {
   // your code here.
   console.log("Desert theme function triggered.")
   document.querySelector("body").className = "desert"
};

const highContrastTheme = ev => {
    // your code here.
    console.log("High Contrast theme function triggered.")
    document.querySelector("body").className = "high-contrast"
}; 

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/