
function validate() {
    var cnp = document.getElementById('cnpInput').value;
    var day = document.getElementById('dayInput').value;
    var month= document.getElementById('monthInput').value;
    var year = document.getElementById('yearInput').value.toString();
    var validFormat = isNaN(cnp * 1);
    if(cnp.length == 13 && validFormat == false &&
       cnp[1]==year[2] && cnp[2]==year[3] &&
       cnp[3]==month[0] && cnp[4]==month[1] &&
       cnp[5]==day[0] && cnp[6]==day[1]) {
//n-am reusit nicicum sa deschid tema2.html in aceeasi fereastra. as aprecia daca as primi ajutor la problema asta in feedback. multumesc.
           window.open('tema2.html');
    } else {
        alert('The provided CNP is not valid. Click OK to try again.');
    }

}
function validateAtc() {
    confirm ('The provided atCODE is not valid.\n To try again, click OK.\n Otherwise, click CANCEL.\n Bear in mind that detected malintent downgrades SPOT WEIGHT');

}
function displayForm() {
    var onOff = document.getElementById('loginForm');
    if (onOff.style.display=='block') {
        onOff.style.display='none'; 
    }else {
        onOff.style.display='block';
    }
}
 