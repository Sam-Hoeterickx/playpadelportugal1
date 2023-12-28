const form = document.querySelector('form');
const name = document.getElementById("contact-form-name");
const lastname = document.getElementById("contact-form-lastname");
const email = document.getElementById("contact-form-email");
const phone = document.getElementById("contact-form-phone");
const date = document.getElementById("contact-form-date");
const persons = document.getElementById("contact-form-persons");
const club = document.getElementById("contact-form-club");
const p50 = document.getElementById("contact-form-p50");
const p100 = document.getElementById("contact-form-p100");
const p200 = document.getElementById("contact-form-p200");
const p300 = document.getElementById("contact-form-p300");
const p400 = document.getElementById("contact-form-p400");
const p500 = document.getElementById("contact-form-p500");
const message = document.getElementById("contact-form-message");

function sendEmail() {
    const bodyMessage = `Naam: ${name.value} <br> Achternaam: ${lastname.value} <br> email: ${email.value} <br> GSM: ${phone.value} <br> Datum Verblijf: ${date.value} <br>
     Aantal personen: ${persons.value} <br> Lidmaatschap club: ${club.value} <br> Padelniveau's: <br> p50 ${p50 .value} <br> p100 ${p100 .value} <br> P200 ${p200 .value} <br> p300 ${p300 .value} <br> p400 ${p400 .value} <br> p500 ${p500 .value}
     <br> Bericht: ${message.value}`;

    Email.send({
        SecureToken : "1bc5dd90-0af0-411a-ab4d-37e7114f268d",
        To : 'playpadelportugal1@gmail.com',
        From : "playpadelportugal1@gmail.com",
        Subject : "Booking PlayPadelPortugal",
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});