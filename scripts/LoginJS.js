var penampung = document.querySelector(".LoginFormClass");


penampung.addEventListener("submit", function(e){
    e.preventDefault();
    var email = document.getElementById("EmailInput").value;
    var password = document.getElementById("PasswordInput").value;


    if(email === "")
    {
        alert("Masukkan Email!");
        return false;
    }
    if(password === "")
    {
        alert("Masukkan Password");
        return false;
    }
    
    window.location.assign("index.html");
})
