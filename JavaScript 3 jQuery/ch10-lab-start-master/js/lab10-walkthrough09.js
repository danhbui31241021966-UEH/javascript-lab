
$(function() {

    $("#consume").click(function() {

        var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url, function(data, status) {

            if (status == "success") {

                $("#results").html("<ul></ul>");

                $.each(data, function(index, value) {

                    var li = $('<li/>').html(value.name);

                    li.appendTo("div#results ul");

                });

            }

        });

    });

});
