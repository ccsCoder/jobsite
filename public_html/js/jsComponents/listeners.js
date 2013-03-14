/**
 * 
 * Class that is used to attach/detach events.
 */
function EventHandlers() {
    
}

EventHandlers.prototype.attachEvent = function(element,eventName,handler) {
    $(element).unbind(eventName);
    $(element).bind(eventName,handler);
};

EventHandlers.prototype.removeEvent = function(element,eventName) {
    $(element).unbind(eventName);
};




