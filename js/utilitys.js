function getInputFieldValue(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getTextFieldValue(id){
    const textNumber = parseFloat(document.getElementById(id).innerText);
    return textNumber;
}

// click blog button and go to another page
document.getElementById('blog-button')
    .addEventListener('click', function(){
        window.location.href = "/index.html"
})
document.getElementById('home-btn')
    .addEventListener('click', function(){
        window.location.href = '/home.html'
});