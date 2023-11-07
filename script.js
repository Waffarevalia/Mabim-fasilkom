function login () {
    var done= 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username =="mabim" && password =="Mabim") {
        if(confirm ("apakah anda ingin login?")== true) {
            window.localStorage.href = "https://github.com/Waffarevalia/Mabim-fasilkom"
          } else {
            alert("Login dibatalkan !") ;
          }
    } else {
         if (done == 0)
         alert("username/password salah");
    }

}