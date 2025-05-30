let form = document.getElementById("fm");

form.addEventListener("submit",function(event) {
    event.preventDefault();

const result = document.getElementById("output");
const genderInput = document.querySelector('input[name="choose_gender"]:checked');
const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const bday = document.getElementById("birthdate");
const bdayValue = bday.value;

if (!bdayValue) {
    result.innerText = "ENTER A VALID BIRTHDATE";
    return;
}

const date = new Date(bdayValue);
if (isNaN(date.getTime()) || date > new Date()) {
    result.innerText = "ENTER A VALID BIRTHDATE";
    return;
}

/*if (!genderInput) {
    result.innerText = "!!!SELECT GENDER!!!";
    return;
}*/

const dayIndex = date.getDay();
const genderValue = genderInput.value;
const akanName = genderValue === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
result.innerText = `YOUR AKAN NAME IS: ${akanName}`;
});
