 window.addEventListener("load", function window_onload(e) {
   
//When the user clicks submit, run our isValidForm check.
document.getElementById("btnSubmit").addEventListener('click', validateForm);
});     
        
function validateForm(e) {

//Storing our textboxes as variables
    const contactErrorMsg = document.getElementById("contactError");
    const fNameTxtbox = document.getElementById("firstName");
    const lNameTxtbox = document.getElementById("lastName"); 
    const emailTxtbox = document.getElementById("contactEmail");
    const phoneTxtbox = document.getElementById("contactPhone");  
    

 //Phone  and Email number Regex
    const phoneRegex = new RegExp("[1]?[(| |-]?[2-9]{1}[0-9]{2}[)| |-]?[0-9]{3}[-| ]?[0-9]{4}");
    const emailRegex = new RegExp("[a-zA-Z0-9._-]+@{1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}");
    
    //Creating array for our possible error mesages.
    const errors = [];

    const errorFields = document.getElementsByClassName("error");
    for(let i = 0; i < errorFields.length; i++) {
      const element = errorFields[i];
      element.classList.remove("error");
    }

//Check to see if the user left the First, Last, Email and Phone text boxes empty. Display an error message as needed.
    if (!fNameTxtbox.value.match(/\S/)) {
      errors.push({ field: fNameTxtbox, message: "Missing first name." });
    }
    if (!lNameTxtbox.value.match(/\S/)) {
      errors.push({ field: lNameTxtbox, message: "Missing last name." });
    }

    if (!emailTxtbox.value.match(/\S/) && !phoneTxtbox.value.match(/\S/)) {
      errors.push({ field: phoneTxtbox, message: "Either the phone number or email address fields must be filled in."});
      errors.push({ field: emailTxtbox, message: "Either the phone number or email address fields must be filled in."});
    } else {
      if(emailTxtbox.value.match(/\S/) && !emailRegex.test(emailTxtbox.value)) {
        errors.push({ field: emailTxtbox, message: "Enter a valid Email address."});
      }
      if(phoneTxtbox.value.match(/\S/) && !phoneRegex.test(phoneTxtbox.value)) {
        errors.push({ field: phoneTxtbox, message: "Enter a valid phone number."});
      }
    }

    if(errors.length > 0) {
      errors.forEach( function(element) {
        element.field.classList.add("error");
      } );

      console.log(errors);


      // Functional array loops => filter(), reduce(), find()
      const tempArray = errors.reduce(function(output, element) {
        if(output.indexOf(element.message) === -1) {
          output.push(element.message);
        }
        return output;
      }, []);

      let message = "Please fill out all the required information: ";
      message += "<ul>";
      for(let i in tempArray) {
        message += "\n";
        message += "<li>"+ tempArray[i] +"</li>";
      }
      message += "</ul>";
      
      contactErrorMsg.innerHTML = message; 
      contactErrorMsg.style.display = 'block';

      e.preventDefault();

    } else {
      contactErrorMsg.style.display = 'none';
    }
}