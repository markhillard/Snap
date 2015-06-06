/*! 2015 ~ Mark Hillard | (mark@)markhillard.com */
/*! Contact Form Behaviors */


$(document).ready(function () {
    $("button[type='submit']").click(function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // email validation variables (regex)
        var filter = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        var error = false;
        // variables for input field values
        var name = $("input[type='text']").val();
        var address = $("input[type='email']").val();
        var message = $("textarea").val();
        // if email is invalid... *
        if (!filter.test(address)) {
            // * show invalid message and hide others
            $(".invalid").show().delay(2000).fadeOut(300);
            $(".success, .error, .reset").hide();
            // * focus on email field
            $("input[type='email']").focus();
            // * set error status
            error = true;
        // if email is valid... *
        } else {
            // * variable for "mail.mf" file
            var formURL = $("form").attr("action");
            // * post data to "mail.mf" file
            var postData = "name=" + name + '&email=' + address + '&message=' + message;
            // * ajax form submission handler
            $.ajax({
                type: "POST",
                url: formURL,
                data: postData,
                success: function (data, responseText) {
                    // reset original field values
                    $("input[type='text']").val("Name");
                    $("input[type='email']").val("Email Address");
                    $("textarea").val("Comments / Questions?");
                    // show success message and hide others
                    $(".success").show().delay(2000).fadeOut(300);
                    $(".invalid, .error, .reset").hide();
                },
                error: function (errorThrown) {
                    // show error message and hide others
                    $(".error").show().delay(2000).fadeOut(300);
                    $(".invalid, .success, .reset").hide();
                    // log error message in console
                    console.log(errorThrown);
                }
            });
        }
    });
    // clear default input field values and return on blur event
    $('input, textarea').focus(function () {
        if (!$(this).data("default")) {
            $(this).data("default", $(this).val());
        }
        if ($(this).val() !== "" && $(this).val() === $(this).data("default")) {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() === "") {
            $(this).val($(this).data("default"));
        }
    });
    // force lowercase email address on change event
    $("input[type='email']").change(function () {
        $(this).val($(this).val().toLowerCase());
    });
    // show reset message and hide others
    $("button[type='reset']").click(function () {
        $(".reset").show().delay(2000).fadeOut(300);
        $(".invalid, .success, .error").hide();
    });
});
