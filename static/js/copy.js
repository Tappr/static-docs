function copyToClip(txt) {
    txt = document.createTextNode(txt);
    var m = document;
    var w = window;
    var b = m.body;
    b.appendChild(txt);
    if (b.createTextRange) {
        var d = b.createTextRange();
        d.moveToElementText(txt);
        d.select();
        m.execCommand('copy');
    } else {
        var d = m.createRange();
        var g = w.getSelection;
        d.selectNodeContents(txt);
        g().removeAllRanges();
        g().addRange(d);
        m.execCommand('copy');
        g().removeAllRanges();
    }
    txt.remove();
} 

function copyCallbackToClipboard(name) {
    var callback = document.getElementsByClassName('callback-' + name)[0];
    var url = callback.getElementsByClassName('url')[0].innerText;
    var params = Array.from(callback.getElementsByClassName("param-value")).map(e => e.innerText + e.getElementsByTagName('input')[0].value);
    var text = url + params.join('');
    copyToClip(text);
}

