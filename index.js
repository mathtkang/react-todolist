$(function () {
    $("#create").on("submit", function (event){
        event.preventDefault();
        var value = $(this).find("input").val();

        $("#todo-list").append(
            '<li>' +
                '<span>' + value + '</span>' +
                '<button type="button">완료</button>' +
                '<button type="button">삭제</button>' +
            '</li>'
        );

        $(this).trigger("reset");
    });

    $("body").on("click", ".complete", function(){
        $(this).parent("li").addClass("completed");
    });

    $("body").on("click", ".remove", function(){
        $(this).parent("li").remove();
    });
});