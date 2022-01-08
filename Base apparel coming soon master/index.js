/*document.getElementById('send-button').onclick = */ 

function mailCheck(inputText) {
    var mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.match(mailForm)) {
        return true;
    } else {
    document.getElementById('invalid-mail-error').style.display = 'block';
    }
}