//Javascript file --Jacob Donaldson


$("#btnsend").click(function () {
    alert("From: " + $("#name").val()  +
        "\nEmail: " + $("#email").val()  +
        "\nQuestions: " + $("#questions").val());

    $("#picanderson").fadeOut("slow");
})