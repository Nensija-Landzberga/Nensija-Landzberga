function myFunction()
{
    let nameOby = document.getElementById("input_name");
    ///alert(nameObj.value);
    let headderObj = document.getElementById("hello");
    let ageObj = document.getElementById("input_age");

    if(ageObj.value <=0 || !ageObj.value.match(/[^0-18]/))
    {
        alert("Error: age is incorrect");
        return;
    }
    headderObj.innerText="Hello," + nameOby.value + ageObj.value;
    
   

let age = ageObj.value;
let citizenship = true;
if(age >= 18 && citizenship)
{
    console.log("Drīkst balsot")
}
else
if(age < 18 && citizenship==true)
{
    console.log("Nēesat pilngadīgs, bet esat pilsonis")
}
else
if(age < 18 && citizenship==false)
{
    console.log ("Nēesat pilngadīgs un nēesat pilsonis ")
}
}
