const form = document.querySelector('.form-value')
let register = document.querySelector('.register p a')
const formbox = document.querySelector('.form-box')
const inputs = document.querySelectorAll('.input-box input')

let login = true
let reg = false
let forgetpass = false
let pressIconPass = false
let pressIconRePass = false

function isReg () {
   const iconpass = document.querySelector('.password .pas')
   const iconrepass = document.querySelector('.reppassword .pas')
   const inputPass = document.querySelector('.password .inpass')
   const inputRePass = document.querySelector('.reppassword .inrepass')
   const inputName = document.querySelector('.username input')
   const inputMail = document.querySelector('.mail input')
   const inputPassword = document.querySelector('.password input')
   const inputRePassword = document.querySelector('.reppassword input')
   iconpass.onclick = () => {
      const inputValPass = document.querySelector('.password .inpass input').value
      if(!pressIconPass) {
         iconpass.innerHTML = '<ion-icon name="lock-open-outline" role="img" class="md hydrated" aria-label="lock open"></ion-icon>'
         inputPass.innerHTML = '<input type="text" name="pass" value="'+ inputValPass +'" required>' + '<label for="">Пароль</label>'
         pressIconPass = true
      } else if (pressIconPass) {
         iconpass.innerHTML = '<ion-icon name="lock-closed" role="img" class="md hydrated" aria-label="lock closed"></ion-icon>'
         inputPass.innerHTML = '<input type="password" name="pass" value="'+ inputValPass +'" required>' + '<label for="">Пароль</label>'
         pressIconPass = false
      }
   }
   iconrepass.onclick = () => {
      const inputValRePass = document.querySelector('.reppassword .inrepass input').value
      if(!pressIconRePass) {
         iconrepass.innerHTML = '<ion-icon name="lock-open-outline" role="img" class="md hydrated" aria-label="lock open"></ion-icon>'
         inputRePass.innerHTML = '<input type="text" name="repeatpass" value="'+ inputValRePass +'" required>' + '<label for="">Повторите пароль</label>'
         pressIconRePass = true
      } else if (pressIconRePass) {
         iconrepass.innerHTML = '<ion-icon name="lock-closed" role="img" class="md hydrated" aria-label="lock closed"></ion-icon>'
         inputRePass.innerHTML = '<input type="password" name="repeatpass" value="'+ inputValRePass +'" required>' + '<label for="">Повторите пароль</label>'
         pressIconRePass = false
      }
   }
   inputName.onchange = (e) => {
      const checkName = document.querySelector('.username .check')
      if(checkName.lenght <= 2){
         isCheck('error', checkName)
         // checkName.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkName.style.color = 'rgb(255, 0, 0)'
      } else if (e.target.lenght > 15) {
         isCheck('error', checkName)
         // checkName.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkName.style.color = 'rgb(255, 0, 0)'
      } else {
         isCheck('check', checkName)
         // checkName.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp"></ion-icon>'
         // checkName.style.color = 'rgb(0, 140, 7)'
      }
   }
   inputMail.onchange = (e) => {
      const checkMail = document.querySelector('.mail .check')
      if(e.target.value.lenght <= 10){
         isCheck('error', checkMail)
         // checkMail.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkMail.style.color = 'rgb(255, 0, 0)'
      } else if (e.target.lenght > 311) {
         isCheck('error', checkMail)
         // checkMail.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkMail.style.color = 'rgb(255, 0, 0)'
      } else {
         isCheck('check', checkMail)
         // checkMail.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp"></ion-icon>'
         // checkMail.style.color = 'rgb(0, 140, 7)'
      }
   }
   inputPassword.onchange = (e) => {
      const checkPassword = document.querySelector('.password .check')
      if(e.target.value.lenght <= 5){
         isCheck('error', checkPassword)
         // checkPassword.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkPassword.style.color = 'rgb(255, 0, 0)'
      } else if (e.target.lenght > 20) {
         isCheck('error', checkPassword)
         // checkPassword.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkPassword.style.color = 'rgb(255, 0, 0)'
      } else {
         isCheck('check', checkPassword)
         // checkPassword.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp"></ion-icon>'
         // checkPassword.style.color = 'rgb(0, 140, 7)'
      }
   }
   inputRePassword.onchange = (e) => {
      const checkRePassword = document.querySelector('.reppassword .check')
      const checkPassword = document.querySelector('.password .check')
      if(checkPassword !== checkRePassword){
         isCheck('error', checkRePassword)
         // checkRePassword.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         // checkRePassword.style.color = 'rgb(255, 0, 0)'
      } else {
         isCheck('check', checkRePassword)
         // checkRePassword.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp"></ion-icon>'
         // checkRePassword.style.color = 'rgb(0, 140, 7)'
      }
   }
   function isCheck(type, typeInput) {
      if(type === 'error') {
         typeInput.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp"></ion-icon>'
         typeInput.style.color = 'rgb(255, 0, 0)'
      } else if(type === 'check') {
         typeInput.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp"></ion-icon>'
         typeInput.style.color = 'rgb(0, 140, 7)'
      }
   }
}

// inputs.onclick = (e) => {
//    if(reg) {
//       if(e.value > 2)
//    }
// }

register.addEventListener("click", () => {
   if(login) { // переход на регистрацию
      login = false
      reg = true
      formbox.style.height = '600px'
      form.innerHTML = '<form action="" method="post">'
      +'<h2>Регистрация</h2>'
      +'<div class="input-box username">'
      +'<div class="check"></div>'
      +'<ion-icon name="person"></ion-icon>'
      +'<input type="text" name="username" required>'
      +'<label for="">Имя</label>'
      +'</div>'
      +'<div class="input-box mail">'
      +'<div class="check"></div>'
      +'<ion-icon name="mail"></ion-icon>'
      +'<input type="email" name="email" required>'
      +'<label for="">Почта</label>'
      +'</div>'
      +'<div class="input-box password">'
      +'<div class="check"></div>'
      +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
      +'<div class="inpass">'
      +'<input type="password" name="pass" required>'
      +'<label for="">Пароль</label>'
      +'</div>'
      +'</div>'
      +'<div class="input-box reppassword">'
      +'<div class="check"></div>'
      +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
      +'<div class="inrepass">'
      +'<input type="password" name="repeatpass" required>'
      +'<label for="">Повторите пароль</label>'
      +'</div>'
      +'</div>'
      +'<div class="remember">'
      +'<label for="">Тут типо должна быть капча</label>'
      +'</div>'
      +'<button type="submit"><span>Зарегестрироваться</span></button>'
      +'<div class="register">'
      +'<p>Уже есть аккаунт? <a href="#login">Войти</a></p>'
      +'</div>'
      +'</form>'
      register = document.querySelector('.register p a')
      isReg()
   } else if(reg) {// переход на логин
      login = true
      reg = false
      formbox.style.height = '450px'
      form.innerHTML = '<form action="" method="get">'
      +'<h2>Вход</h2>'
      +'<div class="input-box">'
         +'<ion-icon name="person"></ion-icon>'
         +'<input type="text" name="username" required>'
         +'<label for="">Имя</label>'
      +'</div>'
      +'<div class="input-box">'
         +'<ion-icon name="lock-closed"></ion-icon>'
         +'<input type="password" name="pass" required>'
         +'<label for="">Пароль</label>'
      +'</div>'
      +'<div class="remember">'
         +'<label for=""><input type="checkbox" name="rememberUser">Запомнить меня</label>'
      +'</div>'
      +'<button type="submit"><span>Войти</span></button>'
      +'<div class="register">'
         +'<p>Нету аккаунта? <a href="#">Зарегестрируйтесь</a></p>'
      +'</div>'
      +'<div class="forget">'
         +'<a href="#">Забыли Пароль?</a>'
      +'</div>'
   +'</form>'
   register = document.querySelector('.register p a')
   }
})