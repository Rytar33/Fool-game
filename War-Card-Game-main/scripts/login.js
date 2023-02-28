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
   const inputName = document.getElementById('username')
   const inputMail = document.querySelector('.mail input')
   const inputPassword = document.querySelector('.password input')
   const inputRePassword = document.querySelector('.reppassword input')
   iconpass.onclick = () => {
      if(!pressIconPass) {
         iconpass.innerHTML = '<ion-icon name="lock-open-outline" role="img" class="md hydrated" aria-label="lock open"></ion-icon>'
         inputPassword.setAttribute('type', 'text')
         pressIconPass = true
      } else if (pressIconPass) {
         iconpass.innerHTML = '<ion-icon name="lock-closed" role="img" class="md hydrated" aria-label="lock closed"></ion-icon>'
         inputPassword.setAttribute('type', 'password')
         pressIconPass = false
      }
   }
   iconrepass.onclick = () => {
      if(!pressIconRePass) {
         iconrepass.innerHTML = '<ion-icon name="lock-open-outline" role="img" class="md hydrated" aria-label="lock open"></ion-icon>'
         inputRePassword.setAttribute('type', 'text')
         pressIconRePass = true
      } else if (pressIconRePass) {
         iconrepass.innerHTML = '<ion-icon name="lock-closed" role="img" class="md hydrated" aria-label="lock closed"></ion-icon>'
         inputRePassword.setAttribute('type', 'password')
         pressIconRePass = false
      }
   }
   inputName.onkeyup = () => {
      const checkName = document.querySelector('.username .check')
      if(inputName.value.length == 0){
         checkName.innerHTML = null
      } else if(inputName.value.length <= 2) {
         isCheck('error', checkName)
      } else if (inputName.value.length > 15) {
         isCheck('error', checkName)
      }else {
         isCheck('check', checkName)
      }
   }
   inputMail.onkeyup = () => {
      const checkMail = document.querySelector('.mail .check')
      if(inputMail.value.length == 0){
         checkMail.innerHTML = null
      } else if(inputMail.value.length <= 13) {
         isCheck('error', checkMail)
      } else if (inputMail.value.length > 311) {
         isCheck('error', checkMail)
      } else {
         isCheck('check', checkMail)
      }
   }
   inputPassword.onkeyup = () => {
      const checkPassword = document.querySelector('.password .check')
      if(inputPassword.value.length == 0){
         checkPassword.innerHTML = null
      }else if(inputPassword.value.length <= 5){
         isCheck('error', checkPassword)
      } else if (inputPassword.value.length > 20) {
         isCheck('error', checkPassword)
      } else {
         isCheck('check', checkPassword)
      }
   }
   inputRePassword.onkeyup = () => {
      const checkRePassword = document.querySelector('.reppassword .check')
      if(inputPassword.value !== inputRePassword.value){
         isCheck('error', checkRePassword)
      }else if(inputRePassword.value.length == 0){
         checkRePassword.innerHTML = null
      } else {
         isCheck('check', checkRePassword)
      }
   }
   function isCheck(type, typeInput) {
      if(type === 'error') {
         typeInput.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp" style="color: rgb(255, 0, 0)"></ion-icon>'
      } else if(type === 'check') {
         typeInput.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp" style="color: rgb(0, 140, 7)"></ion-icon>'
      }
   }
}

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
      +'<input type="text" name="username" id="username" required>'
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