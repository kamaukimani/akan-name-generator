let form = document.getElementById("fm");
form.addEventListener("submit",function(event) {
    event.preventDefault()
})
const result = document.getElementById("output")
const maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const bday = document.getElementById("birthdate")
bday = birthdateInput.value;
if (!bday) {
    result.innerText = "Enter a valid birthdate";
    return;
}
const date = new Date(bday);
if (isNaN(date.getTime()) || date > new Date()) {
    result,innerText = "Enter a valid past date";
    return;
}
if (!genderInput) {
    result.innerText = "Select gender";
    return;
}