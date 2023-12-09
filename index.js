document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.querySelector('.btn');
    var popup = document.getElementById('popup');
    var okButton = popup.querySelector('button');

    submitButton.addEventListener('click', function () {
        // Show the popup
        popup.style.display = 'block';
    });

    okButton.addEventListener('click', function () {
        // Hide the popup
        popup.style.display = 'none';
    });
});