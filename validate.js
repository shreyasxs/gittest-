function hasNumber(myString) {
  return /\d/.test(myString);
}

function isNumberKey(evt) 
        {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode != 46 && charCode > 31 &&
                (charCode < 48 || charCode > 57)) 
                {
                alert("Enter Number");
                return false;
            }
          }

function validate()
{ 
   if( document.StudentRegistration.textnames.value == "" )
   {
     alert( "Please provide your Name!" );
     document.StudentRegistration.textnames.focus() ;
   
     return false;


   }
   else
   {
     let name=document.StudentRegistration.textnames.value;
    if(hasNumber(name))
    {
      alert("Please Enter Valid Name");
      return false;
    }
    
   }

   
   if( document.StudentRegistration.rollno.value == "" )
   {
     alert( "Please provide your Roll Number!" );
     document.StudentRegistration.rollno.focus() ;
     return false;
   }
  
   if(document.StudentRegistration.pass.value == "")
   {
       alert("Please provide the Password");
       document.StudentRegistration.pass.focus();
       return false;
   }
   else
   {  
     var l= document.StudentRegistration.pass.value;
     if(l.length<6)
     {
       alert("Password cannot be small");
       return false;
     }
   }
 
   if( document.StudentRegistration.personaladdress.value == "" )
   {
     alert( "Please provide your Personal Address!" );
     document.StudentRegistration.personaladdress.focus() ;
     return false;
   }
   if((StudentRegistration.hobby[0].checked == false) && (StudentRegistration.hobby[1].checked == false) && (StudentRegistration.hobby[2].checked == false) )
   {
       alert( "Please have some hobby!!");
       return false;
   }
   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Please choose your Gender: Male or Female" );
   return false;
   }  

   if( document.StudentRegistration.City.value == "-1" )
   {
     alert( "Please provide your City!" );
     document.StudentRegistration.City.focus() ;
     return false;
   }   
   if( document.StudentRegistration.Course.value == "-1" )
   {
     alert( "Please provide your Course!" );
    
     return false;
   }   
  if(document.StudentRegistration.designation.value == "-1")
  {
      alert("Please choose the designation!!");
      document.StudentRegistration.designation.focus();
  }
  
 var email = document.StudentRegistration.emailid.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");

 if (email == "" || atpos < 1 || ( dotpos - atpos < 2 )) 
 {
     alert("Please enter correct email ID")
     document.StudentRegistration.emailid.focus() ;
     return false;
 }
 
  if( document.StudentRegistration.mobileno.value == "" ||
           isNaN( document.StudentRegistration.mobileno.value) ||
           document.StudentRegistration.mobileno.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.StudentRegistration.mobileno.focus() ;
     return false;
   }
   return( true );
}

