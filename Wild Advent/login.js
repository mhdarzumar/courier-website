const submit_button = document.querySelector(".button");
submit_button.onclick=() =>{
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);



if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
    alert("input value must be filled");
}
else{
    if(pass.lenth>7 && pass.lenth<20)
    {
        if(pass !== cpass)
        {
            alert("password does'nt match");
        }
    }
    else{
        alert("successfully registered")
    }
}
}

const login = document.querySelector('.login');
login.onclick = () =>{
    const emailAdderess = document.getElementById("Email").value;
    const passWord =  document.getElementById("password").value;

 const Email=localStorage.getItem("Email");
 const Password = localStorage.getItem("Password");

 if(emailAdderess=="" && passWord==""){
    alert("input value must filled");
 }
 else{
    if(emailAdderess==Email && passWord== Password){
        alert("login sucessfully");
    }
    else{
        alert("oops...!");
    }
 }

}


const Track = document.querySelector('.track');
Track.onclick=()=>{
    alert("Poor network connection");
}


