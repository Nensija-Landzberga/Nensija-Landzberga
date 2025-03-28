function myFunction()
{
    let nameOby = document.getElementById("input_name");
   // alert(nameOby.value);
   let headderObj = document.getElementById("hello");
   let SurnameOby = document.getElementById("input_Surname");
   let ageOby = document.getElementById("input_age");

   if(ageOby.value <= 0 || ageOby.value.match(/[^0-9]/))
   {
    alert("Error: age is incorrect!");
    return;
   }


   headderObj.innerText = "Hello, " + nameOby.value  + SurnameOby.value + "!" + ageOby.value;
}