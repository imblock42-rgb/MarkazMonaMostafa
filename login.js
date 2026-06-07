// Проверяем каждую секунду (как ты просил), чтобы код не ломался и вел себя стабильно.
document.addEventListener("DOMContentLoaded", () => {
  
  // --- КОД ДЛЯ СТРАНИЦЫ РЕГИСТРАЦИИ ---
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const username = document.getElementById("regUsername").value.trim();
      const password = document.getElementById("regPassword").value;
      const errorMsg = document.getElementById("regError");
      const successMsg = document.getElementById("regSuccess");

      // Скрываем прошлые сообщения
      errorMsg.style.display = "none";
      successMsg.style.display = "none";

      // Достаем существующих пользователей из LocalStorage (симулируем allloginers.json)
      let users = JSON.parse(localStorage.getItem("allloginers")) || [];

      // Проверяем, не занят ли логин
      const userExists = users.some(user => user.username.toLowerCase() === username.toLowerCase());
      
      if (userExists) {
        errorMsg.style.display = "block";
        return;
      }

      // Если всё ок — пушим нового пользователя
      users.push({ username: username, password: password });
      localStorage.setItem("allloginers", JSON.stringify(users));

      // Показываем успех и перекидываем на страницу логина
      successMsg.style.display = "block";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  }

  // --- КОД ДЛЯ СТРАНИЦЫ ВХОДА ---
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value;
      const errorMsg = document.getElementById("loginError");

      errorMsg.style.display = "none";

      // Получаем базу пользователей
      let users = JSON.parse(localStorage.getItem("allloginers")) || [];

      // Ищем совпадение
      const validUser = users.find(user => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

      if (validUser) {
        // Сохраняем сессию текущего пользователя
        localStorage.setItem("currentUser", JSON.stringify({ username: validUser.username }));
        window.location.href = "index.html"; // Улетаем на главную после успеха
      } else {
        errorMsg.style.display = "block";
      }
    });
  }

  // --- УПРАВЛЕНИЕ ОТОБРАЖЕНИЕМ ХЕДЕРА НА ВСЕХ СТРАНИЦАХ ---
  // Этот блок проверяет, залогинен ли юзер, и если да — меняет кнопку "Войти" на его Имя + Выход
  function updateHeaderAuthStatus() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const desktopAuthBtn = document.getElementById("desktopAuthBtn");
    const mobileAuthBtn = document.getElementById("mobileAuthBtn");

    if (currentUser) {
      const logoutHtml = `${currentUser.username} (<span id="logoutLink" style="cursor:pointer; text-decoration:underline;">Выйти</span>)`;
      
      if (desktopAuthBtn) {
        desktopAuthBtn.innerHTML = logoutHtml;
        desktopAuthBtn.removeAttribute("href"); // убираем ссылку, так как это теперь кнопка выхода
      }
      if (mobileAuthBtn) {
        mobileAuthBtn.innerHTML = logoutHtml;
        mobileAuthBtn.removeAttribute("href");
      }

      // Вешаем событие на логаут (выход)
      const logoutAction = (e) => {
        if (e.target.id === "logoutLink") {
          localStorage.removeItem("currentUser");
          window.location.reload(); // Перезагружаем, чтобы статус сбросился
        }
      };

      if (desktopAuthBtn) desktopAuthBtn.addEventListener("click", logoutAction);
      if (mobileAuthBtn) mobileAuthBtn.addEventListener("click", logoutAction);
    }
  }

  updateHeaderAuthStatus();
});
