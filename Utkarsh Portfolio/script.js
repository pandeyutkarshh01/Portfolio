var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";

}
function closemenu(){
    sidemenu.style.right = "-200px";

}



const form = document.getElementById('contactForm');
const url = 'https://script.google.com/macros/library/d/1swPms3vCz_0F9-ORsn4ch7uCqXrfayl-LLjKkzV1aQ6WbGR_G0YTWhil/1'; // Replace with your Google Apps Script web app URL

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully');
        form.reset(); // Optional: Reset form after submission
    })
    .catch(error => {
        alert('Error submitting form');
    });
});