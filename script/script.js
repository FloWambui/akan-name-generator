function verify(){
  var name=document.getElementById("name").value;
  var day=document.getElementById("day").value;
  var month=document.getElementById("month").value;
  var year=document.getElementById("year").value;
  var birthDay=new Date(year+ '/' +month+ '/' +day)
  var givenDay=birthDay.getDay(); 

  var female=document.getElementById("female").checked;
  var male=document.getElementById("male").checked;

  var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var femaleNames=["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
  var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


  if(day <= 0 || day >31){
    document.getElementById("error").innerHTML = "Enter Valid Date."
  }

  else if(month <=0 || month >12){
    document.getElementById("error").innerHTML = "Enter a Valid Month."
  }

  else if ((female === false) && (male === false)){
    document.getElementById("error").innerHTML = "Select Gender"
  }
}