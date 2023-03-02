const form = document.querySelector('.form-value')
let register = document.querySelector('.register p span')
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
   let checks = [false, false, false, false]
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
      const warningName = document.querySelector('.username .warning')
      const labelName = document.querySelector('.username label')
      const bottomLineName = document.querySelector('.username')
      if(inputName.value.length == 0){
         isCheck('empty', checkName, warningName, null, labelName, bottomLineName, checks, 0)
      } else if(inputName.value.length <= 2) {
         isCheck('error', checkName, warningName, 'Имя должно содержать минимум 3 символа!', labelName, bottomLineName, checks, 0)
      } else if (inputName.value.length > 15) {
         isCheck('error', checkName, warningName, 'Имя не может содержать более 15 символов!', labelName, bottomLineName, checks, 0)
      }else {
         isCheck('check', checkName, warningName, null, labelName, bottomLineName, checks, 0)
      }
   }
   inputMail.onkeyup = () => {
      const checkMail = document.querySelector('.mail .check')
      const warningMail = document.querySelector('.mail .warning')
      const labelMail = document.querySelector('.mail label')
      const bottomLineMail= document.querySelector('.mail')
      if(inputMail.value.length == 0){
         isCheck('empty', checkMail, warningMail, null, labelMail, bottomLineMail, checks, 1)
      } else if(inputMail.value.length <= 10 || (inputMail.value.indexOf('@') == -1 || inputMail.value.indexOf('.') == -1)) {
         isCheck('error', checkMail, warningMail, 'Email должен содержать символы "@, ." и именнование перед @', labelMail, bottomLineMail, checks, 1)
      } else if (inputMail.value.length > 311) {
         isCheck('error', checkMail, warningMail, 'Email не может быть больше 311 символов!', labelMail, bottomLineMail, checks, 1)
      } else {
         isCheck('check', checkMail, warningMail, null, labelMail, bottomLineMail, checks, 1)
      }
   }
   inputPassword.onkeyup = () => {
      const checkPassword = document.querySelector('.password .check')
      const warningPassword = document.querySelector('.password .warning')
      const labelPassword = document.querySelector('.password label')
      const bottomLinePassword = document.querySelector('.password')
      if(inputPassword.value.length == 0){
         isCheck('empty', checkPassword, warningPassword, null, labelPassword, bottomLinePassword, checks, 2)
      }else if(inputPassword.value.length < 5){
         isCheck('error', checkPassword, warningPassword, 'Пароль должен состоять минимум из 6 символов!', labelPassword, bottomLinePassword, checks, 2)
      } else if (inputPassword.value.length > 20) {
         isCheck('error', checkPassword, warningPassword, 'Пароль не может превышать 20 символов!', labelPassword, bottomLinePassword, checks, 2)
      } else {
         isCheck('check', checkPassword, warningPassword, null, labelPassword, bottomLinePassword, checks, 2)
      }
      const checkRePassword = document.querySelector('.reppassword .check')
      const warningRePassword = document.querySelector('.reppassword .warning')
      const labelRePassword = document.querySelector('.reppassword label')
      const bottomLineRePassword = document.querySelector('.reppassword')
      if(inputPassword.value !== inputRePassword.value) {
         isCheck('error', checkRePassword, warningRePassword, 'Пароли не совпадают!', labelRePassword, bottomLineRePassword, checks, 3)
      } else if(inputRePassword.value.length == 0){
         isCheck('empty', checkRePassword, warningRePassword, null, labelRePassword, bottomLineRePassword, checks, 3)
      } else {
         isCheck('check', checkRePassword, warningRePassword, null, labelRePassword, bottomLineRePassword, checks, 3)
      }
   }
   inputRePassword.onkeyup = () => {
      const checkRePassword = document.querySelector('.reppassword .check')
      const warningRePassword = document.querySelector('.reppassword .warning')
      const labelRePassword = document.querySelector('.reppassword label')
      const bottomLineRePassword = document.querySelector('.reppassword')
      if(inputPassword.value !== inputRePassword.value){
         isCheck('error', checkRePassword, warningRePassword, 'Пароли не совпадают!', labelRePassword, bottomLineRePassword, checks, 3)
      } else if(inputRePassword.value.length == 0){
         isCheck('empty', checkRePassword, warningRePassword, null, labelRePassword, bottomLineRePassword, checks, 3)
      } else {
         isCheck('check', checkRePassword, warningRePassword, null, labelRePassword, bottomLineRePassword, checks, 3)
      }
   }
   const button = document.querySelector('button').onclick = (e) => {
      let isWork = true
      for (let i = 0; i < checks.length; i++) {
         console.log(checks[i])
         if(checks[i] === false){
            isWork = false
            break
         }
      }
      if(isWork) e.stopPropagation()
      else e.preventDefault()
   }
   function isCheck(type, typeInput, typeMessage, textMessage, typeLabel, typeBorderBottom, list, index) {
      if(type === 'error') {
         typeInput.innerHTML = '<ion-icon name="close-sharp" role="img" class="md hydrated" aria-label="close sharp" style="color: rgb(255, 0, 0)"></ion-icon>'
         typeMessage.innerText = textMessage
         typeLabel.style.color = 'red'
         typeBorderBottom.style.borderColor = 'red'
         list[index] = false
      } else if(type === 'check') {
         typeInput.innerHTML = '<ion-icon name="checkmark-sharp" role="img" class="md hydrated" aria-label="checkmark sharp" style="color: rgb(0, 140, 7)"></ion-icon>'
         typeMessage.innerText = textMessage
         typeLabel.style.color = 'green'
         typeBorderBottom.style.borderColor = 'green'
         list[index] = true
      } else if(type === 'empty') {
         typeInput.innerHTML = null
         typeMessage.innerText = textMessage
         typeLabel.style.color = 'white'
         typeBorderBottom.style.borderColor = 'white'
         list[index] = false
      }
   }
   register.onclick = () => {
      if(login) { // переход на регистрацию
         login = false
         reg = true
         formbox.style.height = '660px'
         form.innerHTML = '<form action="" method="post">'
         +'<h2>Регистрация</h2>'
         +'<div class="input-box username">'
         +'<div class="check"></div>'
         +'<ion-icon name="person"></ion-icon>'
         +'<input type="text" name="username" id="username" required>'
         +'<label for="">Имя</label>'
         +'<span class="warning"></span>'
         +'</div>'
         +'<div class="input-box mail">'
         +'<div class="check"></div>'
         +'<ion-icon name="mail"></ion-icon>'
         +'<input type="email" name="email" required>'
         +'<label for="">Почта</label>'
         +'<span class="warning"></span>'
         +'</div>'
         +'<div class="input-box password">'
         +'<div class="check"></div>'
         +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
         +'<div class="inpass">'
         +'<input type="password" name="pass" required>'
         +'<label for="">Пароль</label>'
         +'</div>'
         +'<span class="warning"></span>'
         +'</div>'
         +'<div class="input-box reppassword">'
         +'<div class="check"></div>'
         +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
         +'<div class="inrepass">'
         +'<input type="password" name="repeatpass" required>'
         +'<label for="">Повторите пароль</label>'
         +'</div>'
         +'<span class="warning"></span>'
         +'</div>'
         +'<div class="remember">'
         +'<label for="">Тут типо должна быть капча</label>'
         +'</div>'
         +'<button type="submit"><span>Зарегестрироваться</span></button>'
         +'<div class="register">'
         +'<p>Уже есть аккаунт? <span>Войти</span></p>'
         +'</div>'
         +'</form>'
         register = document.querySelector('.register p span')
         isReg()
      } else if(reg) {// переход на логин
         login = true
         reg = false
         formbox.style.height = '510px'
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
            +'<p>Нету аккаунта? <span>Зарегестрируйтесь</span></p>'
         +'</div>'
         +'<div class="forget">'
            +'<a href="#">Забыли Пароль?</a>'
         +'</div>'
      +'</form>'
      register = document.querySelector('.register p span')
      }
   }
}
register.onclick = () => {
   if(login) { // переход на регистрацию
      login = false
      reg = true
      formbox.style.height = '660px'
      form.innerHTML = '<form action="" method="post">'
      +'<h2>Регистрация</h2>'
      +'<div class="input-box username">'
      +'<div class="check"></div>'
      +'<ion-icon name="person"></ion-icon>'
      +'<input type="text" name="username" id="username" required>'
      +'<label for="">Имя</label>'
      +'<span class="warning"></span>'
      +'</div>'
      +'<div class="input-box mail">'
      +'<div class="check"></div>'
      +'<ion-icon name="mail"></ion-icon>'
      +'<input type="email" name="email" required>'
      +'<label for="">Почта</label>'
      +'<span class="warning"></span>'
      +'</div>'
      +'<div class="input-box password">'
      +'<div class="check"></div>'
      +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
      +'<div class="inpass">'
      +'<input type="password" name="pass" required>'
      +'<label for="">Пароль</label>'
      +'</div>'
      +'<span class="warning"></span>'
      +'</div>'
      +'<div class="input-box reppassword">'
      +'<div class="check"></div>'
      +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
      +'<div class="inrepass">'
      +'<input type="password" name="repeatpass" required>'
      +'<label for="">Повторите пароль</label>'
      +'</div>'
      +'<span class="warning"></span>'
      +'</div>'
      +'<div class="remember">'
      +'<label for="">Тут типо должна быть капча</label>'
      +'</div>'
      +'<button type="submit"><span>Зарегестрироваться</span></button>'
      +'<div class="register">'
      +'<p>Уже есть аккаунт? <span>Войти</span></p>'
      +'</div>'
      +'</form>'
      register = document.querySelector('.register p span')
      isReg()
   } else if(reg) {// переход на логин
      login = true
      reg = false
      formbox.style.height = '510px'
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
         +'<p>Нету аккаунта? <span>Зарегестрируйтесь</span></p>'
      +'</div>'
      +'<div class="forget">'
         +'<a href="#">Забыли Пароль?</a>'
      +'</div>'
   +'</form>'
   register = document.querySelector('.register p span')
   }
}
// register.addEventListener("click", () => {
//    if(login) { // переход на регистрацию
//       login = false
//       reg = true
//       formbox.style.height = '650px'
//       form.innerHTML = '<form action="" method="post">'
//       +'<h2>Регистрация</h2>'
//       +'<div class="input-box username">'
//       +'<div class="check"></div>'
//       +'<ion-icon name="person"></ion-icon>'
//       +'<input type="text" name="username" id="username" required>'
//       +'<label for="">Имя</label>'
//       +'</div>'
//       +'<div class="input-box mail">'
//       +'<div class="check"></div>'
//       +'<ion-icon name="mail"></ion-icon>'
//       +'<input type="email" name="email" required>'
//       +'<label for="">Почта</label>'
//       +'</div>'
//       +'<div class="input-box password">'
//       +'<div class="check"></div>'
//       +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
//       +'<div class="inpass">'
//       +'<input type="password" name="pass" required>'
//       +'<label for="">Пароль</label>'
//       +'</div>'
//       +'</div>'
//       +'<div class="input-box reppassword">'
//       +'<div class="check"></div>'
//       +'<div class="pas"><ion-icon name="lock-closed"></ion-icon></div>'
//       +'<div class="inrepass">'
//       +'<input type="password" name="repeatpass" required>'
//       +'<label for="">Повторите пароль</label>'
//       +'</div>'
//       +'</div>'
//       +'<div class="remember">'
//       +'<label for="">Тут типо должна быть капча</label>'
//       +'</div>'
//       +'<button type="submit"><span>Зарегестрироваться</span></button>'
//       +'<div class="register">'
//       +'<p>Уже есть аккаунт? <a href="#login">Войти</a></p>'
//       +'</div>'
//       +'</form>'
//       register = document.querySelector('.register p a')
//       isReg()
//    } else if(reg) {// переход на логин
//       login = true
//       reg = false
//       formbox.style.height = '500px'
//       form.innerHTML = '<form action="" method="get">'
//       +'<h2>Вход</h2>'
//       +'<div class="input-box">'
//          +'<ion-icon name="person"></ion-icon>'
//          +'<input type="text" name="username" required>'
//          +'<label for="">Имя</label>'
//       +'</div>'
//       +'<div class="input-box">'
//          +'<ion-icon name="lock-closed"></ion-icon>'
//          +'<input type="password" name="pass" required>'
//          +'<label for="">Пароль</label>'
//       +'</div>'
//       +'<div class="remember">'
//          +'<label for=""><input type="checkbox" name="rememberUser">Запомнить меня</label>'
//       +'</div>'
//       +'<button type="submit"><span>Войти</span></button>'
//       +'<div class="register">'
//          +'<p>Нету аккаунта? <a href="#">Зарегестрируйтесь</a></p>'
//       +'</div>'
//       +'<div class="forget">'
//          +'<a href="#">Забыли Пароль?</a>'
//       +'</div>'
//    +'</form>'
//    register = document.querySelector('.register p a')
//    }
// })