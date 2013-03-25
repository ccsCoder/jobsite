/*
 * Contains definition of ALL event handlers.
 */

/**
 * 
 * @param {type} functionName
 * @param {type} context
 * @returns {unresolved}
 */
function executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
}

/**
 * method to handle the logic click
 * @param {Event} event
 * @returns {}
 */
function buttonClickHandler(event) {
    //console.debug(event);
    //console.log(event.target.attributes.id.nodeValue);
    executeFunctionByName(event.target.attributes.id.nodeValue,window,arguments);
}

function logIn(event) {
    console.log("Log In Handler Called");
    $('#loginPopup').jqm({modal: true});
    $("#loginPopup").jqmShow();
}

function registerNow(event) {
    console.log("Register Now Event Called");
}
