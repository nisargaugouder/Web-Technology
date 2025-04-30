function submitForm() {
    let isValid = true;
    let nameValue = document.registration.nameName.value;
    let emailValue = document.registration.emailName.value;
    let phoneValue = document.registration.phoneName.value;
    let ageValue = document.registration.ageName.value;
    let genderValue = document.registration.genderName.value;


/* if (phoneValue.length === 10) {
        alert('i m in  if')
        isValid=true;
    } else {
        alert('im in else')
        isValid=false;
    } */

    

    if (nameValue.length < 3 || nameValue.length > 20) {
        onClick();
        isValid = false;
    }
   /* if (ageValue < 18) {
        
        isValid = false;
    } */
    
    if (phoneValue.length != 10) {
        
        isValid = false;
    }


    alert("Name: " + nameValue +
        "\nEmail: " + emailValue +
        "\nPhone: " + phoneValue +
        "\nAge: " + ageValue +
        "\nGender: " + genderValue);

    return isValid;
 }
 function onClick(){
    // document.getElementById('nameErrorId').innerHTML='plz provide min3 & max 20';
    let doThis= document.getElementsByClassName('nameErrorClass')[0].innerHTML;
    console.log('do this',doThis)
    
 }
 function setError(id,message){
    console.log(id);
    console.log(message);
    document.getElementById(id).innerHTML=message;
 }