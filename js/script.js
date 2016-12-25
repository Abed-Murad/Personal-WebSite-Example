     window.onscroll = function() {myFunction()};

      function myFunction() {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("myTop").classList.add("card-4");
            document.getElementById("myIntro").classList.add("show-inline-block");
            document.getElementById("myIntro2").classList.add("show-inline-block");
          } else {
            document.getElementById("myTop").classList.remove("card-4");
            document.getElementById("myIntro").classList.remove("show-inline-block");
            document.getElementById("myIntro2").classList.remove("show-inline-block");
          }
      }

      function myFunc(id) {
          document.getElementById(id).classList.toggle("show");
          document.getElementById(id).previousElementSibling.classList.toggle("theme");
      }


      function open() {
        document.getElementsByClassName("sidenav")[0].style.display = "block";
        document.getElementsByClassName("overlay")[0].style.display = "block";
      }

      function close() {
        document.getElementsByClassName("sidenav")[0].style.display = "none";
        document.getElementsByClassName("overlay")[0].style.display = "none";
      }



      function validLogin() {
              var pUserName = document.getElementById("userNameValue").value;
              var pPassword = document.getElementById("passValue").value;
              var userNameArray = ["Abdallah", "Murad", "Abdallah Murad"];
              var passwordArray = ["123", "321", "123321"];
              var flag = true;
              for(i = 0 ; i < userNameArray.length ; i++){
                if ((pUserName == userNameArray[i]) && (pPassword == passwordArray[i])) {                  
                  flag = false;
                }
                
              }
              if (flag) {
                alert ("Something is Wrong , please Try Again !");
              }else{
                location.reload();
              }
      }

      function logout(){ 
        window.open("login.html");
      }      


function validate() {
      
      var name = document.getElementById('name').value ;
      var address1 = document.getElementById('address1').value ;
      var address2 = document.getElementById('address2').value ;
      var wibsite = document.getElementById('wibsite').value ;
      var DOB = document.getElementById('DOB').value ;
      var userName = document.getElementById('userName').value ;
      var password = document.getElementById('password').value ;
      var accountDataName = document.getElementById('accountDataName').value ;
      var email = document.getElementById('email').value ;

      var flag = true; //مؤشر
    if(name == ""){
        document.getElementById('name').placeholder = "Please enter a name!!";
        flag = false;
    }
    if(address1 == ""){
        document.getElementById('address1').placeholder = "Please enter the address1!!"
        flag = false;
    }
    if(address2 == ""){
        document.getElementById('address2').placeholder = "Please enter the address2!!"
        flag = false;
    }
    if(wibsite == ""){
        document.getElementById('wibsite').placeholder = "Please enter the wibsite!!"
        flag = false;
    }
    if(DOB == ""){
        document.getElementById('DOB').placeholder = "Please enter the password!!"
        flag = false;
    }
    if(password == ""){
        document.getElementById('password').placeholder = "Please enter the password!!"
        flag = false;
    }
    if(accountDataName == ""){
        document.getElementById('accountDataName').placeholder = "Please enter the account Data Name!!"
        flag = false;
    }
    if(userName == ""){
        document.getElementById('userName').placeholder = "Please enter the user Name!!"
        flag = false;
    }
    if(email == ""){
        document.getElementById('email').placeholder = "Please enter the email!!"
        flag = false;
    }
    if(flag){
      console.log("Name is : " + name);
      console.log("address1 is : " + address1);
      console.log("address2 is : " + address2);
      console.log("wibsite is : " + wibsite);
      console.log("DOB is : " + DOB);
      console.log("userName is : " + userName);
      console.log("password is : " + password);
      console.log("accountDataName is : " + accountDataName);
      console.log("email is : " + email);
    }


      
    }
