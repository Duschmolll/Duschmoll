$(document).ready(function () {

    $.get("category.php", function (data) {

        $(".categories-block").html(data);

    }).fail(function () {
        console.error("ça marche pas c'est pété")

    }).always(function () {
        console.log("Chargement terminé.")
    });


});

