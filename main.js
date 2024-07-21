const form = document.querySelector("form")
const ms = document.querySelector(".succes-message")
const msBtn = document.querySelector(".succes-message button")



const inputname = document.querySelector("#cardName")
const cardName = document.querySelector(".user-name")




inputname.oninput = function() {
  let value = inputname.value.replace(/\d/g, '');

  cardName.innerHTML = value.length === 0 ? "Jane Appleseed" : value;

  inputname.value = value;
};


const cardNumber = document.querySelector(".num");
const inputNumber = document.querySelector("#cardnumber");


inputNumber.oninput = function() {
  let value = inputNumber.value.replace(/\D/g, '');

  value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

  cardNumber.innerHTML = value.length === 0 ? "0000 0000 0000 0000" : value;

  if (value.replace(/\s/g, '').length != 16) {
      console.log('Card number must be 16 digits long');
  }
};

const monthinput = document.querySelector("#month")
const cardmonth = document.querySelector(".month")


monthinput.oninput = function() {
  let value = monthinput.value.replace(/\D/g, '');

  if (value.length > 2) {
      value = value.slice(0, 2);
  }

  if (value.length === 1 && parseInt(value) > 0) {
      value = '0' + value;
  }

  cardmonth.innerHTML = value.length === 0 ? "00" : value;
};


const yearinput  =document.querySelector("#year")
const cardyear = document.querySelector(".year")


yearinput.oninput = function() {
  let value = yearinput.value.replace(/\D/g, '');

  if (value.length > 4) {
      value = value.slice(0, 4);
  }
  cardyear.innerHTML = value.length === 0 ? "YYYY" : value.padStart(4, '0');
};

const inputcvc = document.querySelector("#cvc")
const cardcvc = document.querySelector(".card-cvc")


inputcvc.oninput  = function(){
  value = inputcvc.value.replace(/\D/g, '')

  if (value.length > 3) {
    value = value.slice(0, 3);
}

  if (value.length === 1 && parseInt(value) > 0) {
      value = '0' + value;
  }

  cardcvc.innerHTML = value.length === 0 ? "000" : value
}


form.addEventListener("submit",(e) => {
  e.preventDefault()

  haserror = false;

  const name = inputname.value.trim()
  const number = inputNumber.value.trim()
  const month = monthinput.value.trim()
  const year = yearinput.value.trim()
  const cvc = inputcvc.value.trim()


  const nameError = document.querySelector(".f-1 .error-ms")
  const numberError = document.querySelector(".f-2 .error-ms")
  const inputsDataError = document.querySelector(".f-3 .data .error-ms")
  const cvcError = document.querySelector(".f-3 .cvc .error-ms")


  if (!name || typeof name === "number"){
    inputname.classList.add("error")
    nameError.classList.add("active")
    haserror = true;
  }

  if (!number || number.length !== 16){
    inputNumber.classList.add("error")
    numberError.classList.add("active")
    haserror = true;
  }

  if (!month || month.length !== 2){
    monthinput.classList.add("error")
    inputsDataError.classList.add("active")
    haserror = true;
  }

  if (!year || year.length !== 4 ){
    yearinput.classList.add("error")
    inputsDataError.classList.add("active")
    haserror = true;
  }
  
  if (!cvc || cvc.length !== 3){
    inputcvc.classList.add("error")
    cvcError.classList.add('active')
    haserror = true;
  }

  

  if (!haserror){
    document.querySelectorAll(".error-ms").forEach((e) => {
      e.classList.remove("active")
    })

    document.querySelectorAll("input").forEach((e) =>{
      e.classList.remove("error")
      e.value = ""
    })
    
    
    form.style.display = "none"
    ms.classList.add('active')

    cardNumber.innerHTML = "0000 0000 0000 0000"
    cardName.innerHTML = "Jane Appleseed"
    cardmonth.innerHTML = "00"
    cardyear.innerHTML = "00"
    cardcvc.innerHTML = "000"
  }
})



msBtn.onclick = function(){
  form.style.display = "block"
  ms.classList.remove('active')
}