


var data;
const xhr = new XMLHttpRequest();
xhr.open( 'GET', './are.wav'); 
xhr.onload = () => {
    data = xhr.response;
}
xhr.onerror = () => {
    window.alert("an error occurred");
}
xhr.send();