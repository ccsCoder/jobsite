var events = new EventHandlers();
//Entry point of the app
$(document).ready(function() {
    
    eventHandlers();
});

function eventHandlers() {
    //for all buttons
    events.attachEvent($(":button"),"click",buttonClickHandler);
}

