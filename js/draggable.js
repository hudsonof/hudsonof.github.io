$(function () {
    $("#safari")
        .draggable({
            containment: "body",
            scroll: false,
            handle: ".toolbar"
        })
        .resizable({
            minWidth: 400,
            minHeight: 300
        });
});