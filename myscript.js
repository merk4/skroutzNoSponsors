
var spanContent = Array.prototype.slice.call(document.getElementsByClassName('label-text'), 0);
for (var i = 0; i < spanContent.length; ++i) {
   spanContent[i].parentElement.parentElement.parentElement.remove();
}
