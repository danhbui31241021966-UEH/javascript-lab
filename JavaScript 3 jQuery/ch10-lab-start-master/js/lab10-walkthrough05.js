
$(function () {
    // create a new DOM element
    var img = $('<img src="images/art/thumbs/13030.jpg" >');

    // add the new element after the panel
    var panel = $('.panel');
    panel.after(img);
});
