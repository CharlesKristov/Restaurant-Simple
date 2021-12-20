var RegisterForm = document.querySelector(".RegisterFormClass");

RegisterForm.addEventListener("submit", function(e){

    e.preventDefault();
    var Name = document.getElementById("regisNama").value;
    var Email = document.getElementById("regisEmail").value;
    
    var Gender = document.getElementsByName("Gender");
    var RealGender="";
    for(let i=0; i< Gender.length;i++)
    {
        if(Gender[i].checked===true)
        {
            RealGender = Gender[i].value; 
        }
    }

    var City = document.getElementById("city").value;

    var Password = document.getElementById("RegPassword").value;
    var ConPassword = document.getElementById("ConPassword").value;


    if(Name === "")
    {
        alert("Masukkan Nama");
        return false;
    }

    if(Email === "")
    {
        alert("Masukkan Email");
        return false;
    }
    else
    {
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))
        {
            alert("Masukkan email dengan benar!");
            return false;
        }

    }

    if(RealGender === "")
    {
        alert("Pilih Gender dengan benar!");
        return false;
    }


    var cekAngka="";
    var cekKapital="";
    if (Password === "" || Password.length < 8) 
    {
        alert("Masukkan password dengan benar minimal 8 karakter");
        return false;
    }
    else
    {
        for(let i=0;i<Password.length;i++)
        {
            if(Password[i]>='A' && Password[i] <= 'Z')
            {
                cekKapital=1;
            }

            if(Password[i] >= '0' && Password[i] <= '9')
            {
                cekAngka=1;
            }
        }

        if(cekKapital !==1 || cekAngka !==1)
        {
            alert("Masukkan setidaknya satu huruf kapital serta satu angka!");
            return false;
        }

    }

    if(ConPassword !== Password || ConPassword==="")
    {
        alert("Masukkan Confirm Password harus sama dengan Password!");
        return false;
    }

    alert("Register Berhasil!");
    
    window.location.assign("login.html");
})