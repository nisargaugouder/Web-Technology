function submitForm() {
    let isValid = true;
    let nameValue = document.registration.nameName.value;
    let phoneValue = document.registration.phoneName.value;
   

    if (nameValue.length < 3 || nameValue.length > 20) {
        onClick();
        isValid = false;
        setError('nameErrorId','length should be min 3 max 20');
        
    }
    if (phoneValue.length != 10) {
        isValid = false;
        setError('numberErrorId','length should be 10 digit');
        
    }

    alert("Name: " + nameValue +
        "\nPhone: " + phoneValue
        );

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
 function clearForm(){
    document.getElementById('nameErrorId').innerHTML='form cleared';
 }
