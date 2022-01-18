function mailCheck(inputText) {
    var mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.match(mailForm)) {
        document.getElementById('email-form').style.borderColor = '';
        document.getElementById('invalid-mail-error').style.display = 'none';
        document.getElementById('error-icon').style.display = 'none';
    } else {
        document.getElementById('email-form').style.borderColor = '#e99190';
        document.getElementById('invalid-mail-error').style.display = 'block';
        document.getElementById('error-icon').style.display = 'block';
    }
}