$(document).ready(function() {
    $('#test-form').on('submit', function(e) {
        // Prevent form submission
        e.preventDefault();

        // // Get the form instance
        var $form = $(e.target);

        // // Get the BootstrapValidator instance
        var bv = $form.data($('#test-form'));

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbxN1TxEjpS6x8Ahi2P3PdYMl1YIFrESBZUyD27E8ZXyeOc6NjI/exec';
        var redirectUrl = 'success-page.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));

        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
            alert("Đăng kí thành công!!!!!!!!!!!!!!");
        });

    });

});