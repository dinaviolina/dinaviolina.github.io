var form = document.getElementById("form"); 
var firstname = document.getElementById("firstName"); 
var lastname = document.getElementById("lastName"); 
var month = document.getElementById("month"); 
var day = document.getElementById("days"); 
var year = document.getElementById("year"); 
var female = document.getElementById("female");
var male = document.getElementById("male");
var address = document.getElementById("alamat");
var phone = document.getElementById("phone-number");
var email = document.getElementById("email");
                
form.addEventListener("submit",e=>{e.preventDefault(); 
CheckForm(firstname,lastname,month,day,year,male,female,address,email,phone);}) 
            
function formatPhone(value){
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g,'');
    const phoneLength = phoneNumber.length;
    if(phoneLength < 3) return phoneNumber;
    if(phoneLength < 7){
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;}
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(
        3,
        6,
        )}-${phoneNumber.slice(6,9)}-${phoneNumber.slice(
        9,
        11,
        )} `;
}
function phoneNumberformatter(){
    const inputField = document.getElementById("phone-number");
    const inputFormat = formatPhone(inputField.value);
    inputField.value = inputFormat;
}
//console.log(inputField.value);

function CheckForm(firstname,lastname,month,day,year,male,female,address,email){ 
    var firstnameValue = firstname.value.trim(); 
    var lastnameValue = lastname.value.trim(); 
    var monthValue = month.value;
    var dayValue = day.value;
    var yearValue = year.value;
    var addressValue = address.value;
    var emailValue = email.value;
    var phoneValue = phone.value;
    var genderValue;
                
    //FIRST NAME
    if(firstnameValue == '') { 
        document.getElementById("firstNote").innerHTML='<em>First Name may not be blank</em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';}  
    else if(!firstnameValue.match(/^[a-zA-Z]*$/)){ 
        document.getElementById("firstNote").innerHTML='<em>First Name may not contain numbers </em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';}
    else {
        document.getElementById("firstNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";} 

    //LAST NAME
    if(lastnameValue == '') { 
        document.getElementById("lastNote").innerHTML='<em>Last Name may not be blank</em>';  
        document.getElementById("isi").innerHTML='There was an error in your input ';} 
    else if(!lastnameValue.match(/^[a-zA-Z]*$/)){ 
        document.getElementById("lastNote").innerHTML='<em>Last Name may not contain numbers</em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';} 
    else {
        document.getElementById("lastNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";}
                
    //DATE OF BIRTH
    if((monthValue == "") && (dayValue == "") && (yearValue == "")) {
        document.getElementById("dateNote").innerHTML='<em>Date of Birth may not be blank</em>';
        document.getElementById("isi").innerHTML='There was an error in your input.';}
    else {
        document.getElementById("dateNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";}
    
    //ADDRESS
    if(addressValue == '') { 
        document.getElementById("alamatNote").innerHTML='<em>Address may not be blank</em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';} 
    else {
        document.getElementById("alamatNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";} 
                
    //EMAIL
    if(emailValue == '') { 
        document.getElementById("emailNote").innerHTML='<em>Email may not be blank</em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';}  
    else if(!emailValue.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){ 
        document.getElementById("emailNote").innerHTML='<em>Please enter valid email address </em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';}
    else {
        document.getElementById("emailNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";} 
                
    //PHONE NUMBER
    if(phoneValue == '') { 
        document.getElementById("phoneNote").innerHTML='<em>Phone Number may not be blank</em>'; 
        document.getElementById("isi").innerHTML='There was an error in your input';}  
    else {
        document.getElementById("phoneNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";} 

    //GENDER
    if (male.checked == false && female.checked == false){
        document.getElementById("genderNote").innerHTML='<em>Gender may not be blank</em>';
        document.getElementById("isi").innerHTML='There was an error in your input';}
    else if (male.checked == true && female.checked == false){
        //document.getElementById("gender_Error").innerHTML=" ";
		genderValue="male";
        document.getElementById("genderNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";}
    else if(male.checked == false && female.checked == true){
        //document.getElementById("gender_Error").innerHTML=" ";
		genderValue="female";
        document.getElementById("genderNote").innerHTML=" ";
        document.getElementById("isi").innerHTML=" ";}

    //ALERT
    if((firstnameValue != '') && (lastnameValue != '') && (monthValue != "") && (dayValue != "") && (yearValue != "") && (addressValue != "") && (emailValue != "") && (phoneValue != "")) {
        document.getElementById("judul_Hasil").innerHTML='<b>Profil Telah Berhasil di Buat<b>';
        document.getElementById("firstName_Hasil").innerHTML='First Name: '+firstnameValue;
        document.getElementById("lastName_Hasil").innerHTML='Last Name: '+lastnameValue;
        document.getElementById("date_Hasil").innerHTML='Date of Birth: ' + monthValue + ", " + dayValue + " " + yearValue;
        document.getElementById("gender_Hasil").innerHTML='Gender: '+genderValue;
        document.getElementById("alamat_Hasil").innerHTML='Address: '+addressValue;
        document.getElementById("phone_Hasil").innerHTML='Phone Number: '+phoneValue;
        document.getElementById("email_Hasil").innerHTML='Email: '+emailValue; }
    else {
        alert("Form Belum Terisi!");}
}