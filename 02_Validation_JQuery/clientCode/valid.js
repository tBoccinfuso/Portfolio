$(function()
{	
    $('#chkOther').click(function() {
         $("#txtOther").toggle(this.checked);
    });
   
    $("h2").click(function(){
        $(this).toggleClass("closed").next().toggle();
    });

    $("#btnSubmit").click(function(){

        const incomeRegex = new RegExp("[0-9]+");
        const postalRegex = new RegExp("[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}");
        const userPostal = $("#txtPC").value;
        const userIncome = $("#txtIncome").value;
        const radio = $("input[type='radio']");
        const errors = [];     

        if (!postalRegex.test(userPostal)){
            errors.push("Enter a valid Postal Code format! (X1X1X1) \n");
        }

        if (!incomeRegex.test(userIncome)){
            errors.push("Enter a valid income! \n");
        }

         if(($('#rdoMale').is(':checked')) || ($('#rdoFemale').is(':checked'))){              
        }
         else
            errors.push("Please Select a Gender!");

         if (errors.length >= 1)
            alert(errors.toString().replace(/,/g,''));

    }); // click event
});