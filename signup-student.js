let teacherl = document.getElementById("teacherl")
teacherl.addEventListener("click" , (e)=>{
    e.preventDefault()
    location.href="signup-teacher.html"
})
let namefamily= document.getElementById("name-family")
let password= document.getElementById("password")
let field= document.getElementById("field")
let classstudent =document.getElementById("class")
let phonefamily= document.getElementById("phone-family")
let phonestudent= document.getElementById("phonestudent")
let sabt = document.getElementById("sabt")

sabt.addEventListener("click" , (e)=>{
e.preventDefault()
let student = {
    name:name.value,
    password:password.value,
    field: field.value,
    classstudent: classstudent.value,
    phonefamily: phonefamily.value,
    phonestudent: phonestudent.value,
   
}
if(name.value == "" || password.value == "" || field.value == "" || classstudent.value == "" ||phonefamily.value == "" || phonestudent.value == "" ){
    Swal.fire({
        type: 'error',
        title: 'ناموفق',
        text: 'لطفا اطلاعات وارد شده را صحیحی وارد نمایید',
        showConfirmButton: false,
        timer: 2000
      })}
})

