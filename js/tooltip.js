/*! jQuery UI - Tooltip Behavior */


$(document).ready(function() {
    $("a, abbr, q").tooltip({
        show: { duration: 100 },
        hide: { duration: 100 },
        position: {
            my: "center bottom-15",
            at: "center top",
            using: function(position, feedback) {
                $(this).css(position);
                $("<div>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this);
            }
        }
    });
});
