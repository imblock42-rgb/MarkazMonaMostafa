document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const topNav = document.querySelector(".top-nav");
    const navLinks = document.querySelector(".nav-links");
    const html = document.documentElement;
    const body = document.body;
    const texts = {
        ru: {
            brand: "Mona Mostafa",
            nav_about: "О нас",
            nav_blog: "Блог",
            nav_courses: "Курсы",
            nav_reviews: "Отзывы",
            theme_button: "Тема",
            hero_title: "Профессиональные курсы арабского языка",
            hero_text: "Системное обучение, живые занятия и практический результат для взрослых и детей.",
            about_title: "О нас",
            about_text: "Школа Mona Mostafa помогает студентам уверенно говорить, читать и понимать арабский язык с нуля и до продвинутого уровня.",
            blog_title: "Блог",
            blog_date_1: "24 мая 2026",
            blog_head_1: "Как быстро запомнить арабский алфавит",
            blog_body_1: "Проверенные методы повторения, которые экономят время и дают стабильный прогресс.",
            blog_date_2: "18 мая 2026",
            blog_head_2: "5 ошибок начинающих в произношении",
            blog_body_2: "Разбираем типичные ошибки и показываем, как исправлять их уже на первом месяце обучения.",
            courses_title: "Тарифы на курсы",
            plan_1_name: "Start",
            plan_1_price: "$49 / месяц",
            plan_1_desc: "2 занятия в неделю, домашние задания и базовая поддержка.",
            plan_2_name: "Pro",
            plan_2_price: "$89 / месяц",
            plan_2_desc: "3 занятия в неделю, разговорная практика, персональный трек прогресса.",
            plan_3_name: "Master",
            plan_3_price: "$149 / месяц",
            plan_3_desc: "Индивидуальные занятия, полный контроль произношения и экзамен-подготовка.",
            plan_4_name: "Kids",
            plan_4_price: "$59 / месяц",
            plan_4_desc: "Детская программа: интерактивные задания, игровой формат и контроль родителей.",
            videos_title: "Короткие видео о курсах",
            video_1_title: "Обзор программы для начинающих",
            video_2_title: "Как проходит разговорная практика",
            reviews_title: "Отзывы",
            reviews_placeholder: "Добавьте отзывы студентов в этот блок.",
            footer_text: "© 2026 Mona Mostafa. Все права защищены."
        },
        en: {
            brand: "Mona Mostafa",
            nav_about: "About",
            nav_blog: "Blog",
            nav_courses: "Courses",
            nav_reviews: "Reviews",
            theme_button: "Theme",
            hero_title: "Professional Arabic Language Courses",
            hero_text: "Structured learning, live sessions, and practical outcomes for adults and kids.",
            about_title: "About",
            about_text: "Mona Mostafa School helps students confidently speak, read, and understand Arabic from beginner to advanced level.",
            blog_title: "Blog",
            blog_date_1: "May 24, 2026",
            blog_head_1: "How to Memorize the Arabic Alphabet Fast",
            blog_body_1: "Proven repetition techniques that save time and deliver stable progress.",
            blog_date_2: "May 18, 2026",
            blog_head_2: "5 Beginner Pronunciation Mistakes",
            blog_body_2: "We break down common mistakes and show how to fix them within the first month.",
            courses_title: "Course Plans",
            plan_1_name: "Start",
            plan_1_price: "$49 / month",
            plan_1_desc: "2 classes per week, homework tasks, and basic support.",
            plan_2_name: "Pro",
            plan_2_price: "$89 / month",
            plan_2_desc: "3 classes per week, speaking practice, and a personal progress track.",
            plan_3_name: "Master",
            plan_3_price: "$149 / month",
            plan_3_desc: "Private lessons, full pronunciation control, and exam preparation.",
            plan_4_name: "Kids",
            plan_4_price: "$59 / month",
            plan_4_desc: "Kids program with interactive tasks, game-based format, and parent tracking.",
            videos_title: "Short Course Videos",
            video_1_title: "Beginner Program Overview",
            video_2_title: "How Speaking Practice Works",
            reviews_title: "Reviews",
            reviews_placeholder: "Add student reviews in this section.",
            footer_text: "© 2026 Mona Mostafa. All rights reserved."
        },
        ar: {
            brand: "Mona Mostafa",
            nav_about: "من نحن",
            nav_blog: "المدونة",
            nav_courses: "الدورات",
            nav_reviews: "التقييمات",
            theme_button: "المظهر",
            hero_title: "دورات احترافية في اللغة العربية",
            hero_text: "تعلم منظم ودروس مباشرة ونتائج عملية للكبار والأطفال.",
            about_title: "من نحن",
            about_text: "مدرسة مونا مصطفى تساعد الطلاب على التحدث والقراءة وفهم العربية بثقة من المستوى المبتدئ إلى المتقدم.",
            blog_title: "المدونة",
            blog_date_1: "24 مايو 2026",
            blog_head_1: "كيف تحفظ الأبجدية العربية بسرعة",
            blog_body_1: "طرق تكرار فعالة توفر الوقت وتحقق تقدما ثابتا.",
            blog_date_2: "18 مايو 2026",
            blog_head_2: "5 أخطاء شائعة في النطق للمبتدئين",
            blog_body_2: "نشرح الأخطاء المتكررة وكيفية تصحيحها خلال الشهر الأول.",
            courses_title: "باقات الدورات",
            plan_1_name: "Start",
            plan_1_price: "$49 / شهريا",
            plan_1_desc: "حصتان أسبوعيا مع واجبات منزلية ودعم أساسي.",
            plan_2_name: "Pro",
            plan_2_price: "$89 / شهريا",
            plan_2_desc: "3 حصص أسبوعيا مع تدريب محادثة ومسار تقدم شخصي.",
            plan_3_name: "Master",
            plan_3_price: "$149 / شهريا",
            plan_3_desc: "دروس فردية ومتابعة دقيقة للنطق وتحضير للاختبارات.",
            plan_4_name: "Kids",
            plan_4_price: "$59 / شهريا",
            plan_4_desc: "برنامج للأطفال بمهام تفاعلية وأسلوب تعليمي ممتع ومتابعة للأهل.",
            videos_title: "فيديوهات قصيرة عن الدورات",
            video_1_title: "نظرة على برنامج المبتدئين",
            video_2_title: "كيف تتم ممارسة المحادثة",
            reviews_title: "التقييمات",
            reviews_placeholder: "أضف تقييمات الطلاب في هذا القسم.",
            footer_text: "© 2026 Mona Mostafa. جميع الحقوق محفوظة."
        }
    };

    const applyLanguage = (lang) => {
        const dict = texts[lang];
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (dict[key]) {
                element.textContent = dict[key];
            }
        });
        html.lang = lang;
        if (lang === "ar") {
            html.dir = "rtl";
        } else {
            html.dir = "ltr";
        }
        localStorage.setItem("lang", lang);
    };

    const storedLang = localStorage.getItem("lang") || "ru";
    languageSelect.value = storedLang;
    applyLanguage(storedLang);

    languageSelect.addEventListener("change", (e) => {
        applyLanguage(e.target.value);
    });

    const storedTheme = localStorage.getItem("theme") || "dark";
    if (storedTheme === "light") {
        body.classList.add("light");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light");
        const mode = body.classList.contains("light") ? "light" : "dark";
        localStorage.setItem("theme", mode);
    });

    if (menuToggle && topNav && navLinks) {
        menuToggle.addEventListener("click", () => {
            topNav.classList.toggle("menu-open");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                topNav.classList.remove("menu-open");
            });
        });
    }
});
