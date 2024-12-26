let form = document.getElementById('reg_form');
// console.log(form);

form.addEventListener('submit', (event)=>{
    // console.log(event);
    event.preventDefault();
    // console.log()
    let first_name = event.target.fname.value;
    let last_name = event.target.lname.value;
    let email = event.target.email.value;
    let pass = event.target.password.value;
    let conf_pass = event.target.confirm_password.value;

    if(first_name=='')
    {
        alert('Please fill the first name');
        return false
    }
    if(last_name=='')
        {
            alert('Please fill the last name');
            return false
        }
        if(email=='')
            {
                alert('Please fill the email ');
                return false
            }
            if(pass=='')
                {
                    alert('Please fill the pass');
                    return false
                }  
      
         if(pass.length < 6)
            {
               alert('please make sure that password having atleast 6 char')
               return false
            }

         if(pass.length > 10)
         {
            alert('please make sure that password having atmost 10 char')
            return false
         }

         if(pass != conf_pass)
         {
            alert('Password not matching')
            return false
         }

         if(gender == '')
         {
            alert('Please selet gender')
            return
         }

         let user = {
            name:first_name + last_name,
            email:email,
            password:pass,
            gender:gender
         }
         console.log(user)

         // here we need to write api to send the data to server
         alert('Form sbmitted successfully')
         form.reset();
         return true
})