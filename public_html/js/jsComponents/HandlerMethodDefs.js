/*
 * Contains definition of ALL event handlers.
 */

/**
 * method to handle the logic click
 * @param {Event} event
 * @returns {}
 */
function buttonClickHandler(event) {
    console.log("click called on"+event.target.value);
    
    switch(event.target.value) {
        case "Log In":
            console.log("Login clicked.");
            break;
        case "Register Now !":
            console.log("Register Now Clicked");
            break;
        default:
            console.log("other buttons");
    }
    
    
}

