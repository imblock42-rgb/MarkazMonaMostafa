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

      errorMsg.style.display = "none";
      successMsg.style.display = "none";

      let users = JSON.parse(localStorage.getItem("allloginers")) || [];
      const userExists = users.some(user => user.username.toLowerCase() === username.toLowerCase());
      
      if (userExists) {
        errorMsg.style.display = "block";
        return;
      }

      users.push({ username: username, password: password });
      localStorage.setItem("allloginers", JSON.stringify(users));

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

      let users = JSON.parse(localStorage.getItem("allloginers")) || [];
      const validUser = users.find(user => user.username.toLowerCase() === username.toLowerCase() && user.password === password);

      if (validUser) {
        // Сохраняем сессию (флаг, что вход выполнен)
        localStorage.setItem("currentUser", JSON.stringify({ username: validUser.username }));
        window.location.href = "index.html"; 
      } else {
        errorMsg.style.display = "block";
      }
    });
  }

  // --- ЖЁСТКОЕ СКРЫТИЕ КНОПОК ЕСЛИ ВХОД ВЫПОЛНЕН ---
  function checkAuthAndHideButtons() {
    const currentUser = localStorage.getItem("currentUser");
    
    // Если в localStorage есть залогиненный юзер
    if (currentUser) {
      const desktopAuthBtn = document.getElementById("desktopAuthBtn");
      const mobileAuthBtn = document.getElementById("mobileAuthBtn");

      // Полностью убираем десктопную кнопку
      if (desktopAuthBtn) {
        desktopAuthBtn.style.display = "none";
      }
      
      // Полностью убираем мобильный элемент списка <li> чтобы не ломать верстку
      if (mobileAuthBtn) {
        const mobileLi = mobileAuthBtn.closest(".mobile-only-auth");
        if (mobileLi) {
          mobileLi.style.display = "none";
        } else {
          mobileAuthBtn.style.display = "none";
        }
      }
    }
  }

  // Запускаем проверку при загрузке страницы
  checkAuthAndHideButtons();
});
