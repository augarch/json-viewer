$(document).ready(function(){

    $("#showJsonButton").click(showJson);

    $("#copyButton").click(copyToClipboard);

    $("#prettyCopyCbx").click(function () {
        alert("The 'pretty copy' checkbox currently does nothing." +
            "  If it worked then it would determine whether the copied text is a plain or formatted string.");
    })

});

function updateJson(jsonStr) {
    console.log("updating json");
    // JSON.stringify needs an object, so convert the string to an object first then back to a formatted string.
    let jsonObj = JSON.parse(jsonStr);
    $("#formattedJson").val(JSON.stringify(jsonObj, null, 2));
}

function showJson() {
    console.log("showing or hiding json");
    $("#jsonDiv").toggle("slow", function() {
        // Update the button text only after the show/hide animation has finished.
        // This also prevents multiple fast clicks from creating a weird state.
        $("#showJsonButton").val($("#jsonDiv").is(":visible") ? "hide" : "show");
    });
}

function copyToClipboard() {
    console.log("copying data to clipboard");
    // Create a temp element, add the text we want, copy it, and delete the temp element
    let jsonStr = $("#formattedJson").val();
    let $copyTxt = $("<input>");
    $("body").append($copyTxt);
    $copyTxt.val(jsonStr).select();
    document.execCommand("copy");
    $copyTxt.remove();
}