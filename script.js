document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector(".menu-button");
    const themeToggle = document.querySelector(".theme-toggle");
    const revealItems = document.querySelectorAll(".reveal");
    const langButtons = document.querySelectorAll(".lang-button");
    const storedTheme = localStorage.getItem("theme");
    const storedLang = localStorage.getItem("lang") || "ru";

    const translations = {
        ru: {
            nav_about: "О центре",
            nav_pricing: "Тарифы",
            nav_lessons: "Уроки",
            nav_contact: "Связь",
            hero_eyebrow: "Центр изучения арабского языка",
            hero_lead: "Профессиональное обучение арабскому языку в закрытой Telegram-среде с постоянной обратной связью.",
            hero_cta: "Записаться через бот",
            hero_question: "Задать вопрос",
            about_label: "О центре",
            about_title: "Онлайн обучение",
            about_p1: "Markaz al-Mona помогает ученикам спокойно и последовательно идти к владению арабским языком: от первых правил до уверенной практики.",
            about_p2: "Обучение строится вокруг понятной программы, проверок домашних заданий и живого контакта с преподавателем.",
            about_f1: "Индивидуальный подход к уровню ученика",
            about_f2: "Закрытая учебная среда в Telegram",
            about_f3: "Регулярная проверка и обратная связь",
            about_f4: "Упор на грамматику, чтение и речь",
            quote_text: "“Не сравнивайте свой путь в изучении арабского языка с другими. У каждого свой темп и свои возможности.”",
            mentor_label: "Наставник",
            mentor_p1: "Преподаватель арабского языка для неносителей с многолетним опытом.",
            mentor_p2: "Специализируется на классическом арабском языке, грамматике и разговорной практике. Объясняет сложные темы понятным языком и ведет ученика по шагам.",
            stat_years: "лет опыта",
            stat_students: "учеников",
            stat_subscribers: "подписчиков",
            benefits_label: "Преимущества",
            benefits_title: "Почему выбирают нас",
            benefit_1_title: "Премиальность",
            benefit_1_text: "Закрытое сообщество учеников, которые пришли за результатом.",
            benefit_2_title: "Академичность",
            benefit_2_text: "Глубокое изучение правил, чтения и структуры арабского языка.",
            benefit_3_title: "Обратная связь",
            benefit_3_text: "Преподаватель видит ваш прогресс и помогает исправлять ошибки.",
            telegram_title: "Учитесь там, где удобно",
            telegram_h3: "Все обучение в одном месте",
            telegram_p1: "Уроки, задания, проверка домашних работ и сообщения преподавателя проходят в привычном интерфейсе Telegram.",
            telegram_p2: "Не нужно разбираться в сложных платформах: достаточно телефона и желания заниматься регулярно.",
            telegram_card: "Канал, задания и связь",
            process_label: "Процесс",
            process_title: "Путь ученика",
            step_1_title: "Заявка",
            step_1_text: "Вы оставляете сообщение через бот или Telegram.",
            step_2_title: "Диагностика",
            step_2_text: "Определяем уровень и подходящий формат обучения.",
            step_3_title: "Старт",
            step_3_text: "Подключаем вас к группе или индивидуальному маршруту.",
            step_4_title: "Результат",
            step_4_text: "Вы двигаетесь по программе и получаете обратную связь.",
            pricing_label: "Тарифы",
            pricing_title: "Выберите формат обучения",
            group_label: "Групповой курс",
            group_title: "В закрытой группе",
            group_text: "Подходит тем, кому важны структура, общий темп и учебная атмосфера.",
            group_f1: "Медийский курс",
            group_f2: "Разговорная практика",
            group_f3: "Проверка ДЗ в общем чате",
            group_button: "Выбрать групповой курс",
            individual_label: "Индивидуальный курс",
            individual_title: "Личный маршрут",
            individual_text: "Подходит ученикам, которым нужен личный темп и точная работа над ошибками.",
            individual_f1: "Личная проверка учителем",
            individual_f2: "Акцент на слабые места",
            individual_f3: "Премиальный формат сопровождения",
            individual_button: "Выбрать индивидуальный курс",
            lessons_label: "Как проходят уроки",
            lessons_title: "Telegram, Zoom и понятная практика",
            lesson_1_title: "Материалы в Telegram",
            lesson_1_text: "Уроки, задания и напоминания находятся в одном учебном пространстве.",
            lesson_2_title: "Созвоны в Zoom",
            lesson_2_text: "Разбираем темы голосом, тренируем произношение и отвечаем на вопросы.",
            lesson_3_title: "Проверка и закрепление",
            lesson_3_text: "Вы сдаете домашние задания и получаете понятную обратную связь.",
            contact_label: "Связь",
            contact_title: "Куда написать",
            contact_text: "Выберите удобный способ: бот для записи, канал для новостей или Instagram для знакомства с центром.",
            contact_bot_title: "Записаться на обучение",
            contact_bot_text: "Бот в Telegram",
            contact_open: "Открыть",
            contact_channel_title: "Перейти в канал",
            contact_channel_text: "Новости и материалы Markaz al-Mona",
            contact_go: "Перейти",
            contact_inst_title: "Посмотреть Instagram",
            contact_inst_text: "Публикации и визуальные материалы",
            contact_view: "Смотреть",
            tagline: "Markaz al-Mona: Ваш путь к истинному арабскому"
        },
        ar: {
            nav_about: "عَنِ المَرْكَزِ",
            nav_pricing: "الباقات",
            nav_lessons: "الدُّرُوسُ",
            nav_contact: "التَّواصُلُ",
            hero_eyebrow: "مَرْكَزٌ لِتَعَلُّمِ اللُّغَةِ العَرَبِيَّةِ",
            hero_lead: "تَعَلُّمٌ اِحْتِرافِيٌّ لِلُّغَةِ العَرَبِيَّةِ داخِلَ بِيئَةٍ مُغْلَقَةٍ في Telegram، مَعَ مُتابَعَةٍ وَتَغْذِيَةٍ راجِعَةٍ مُسْتَمِرَّةٍ.",
            hero_cta: "سَجِّلْ عَبْرَ البوت",
            hero_question: "اِسْأَلْ سُؤالًا",
            about_label: "عَنِ المَرْكَزِ",
            about_title: "تَعَلُّمٌ مُنَظَّمٌ بِلا تَشْتِيتٍ",
            about_p1: "يُساعِدُ Markaz al-Mona الطُّلّابَ على التَّقَدُّمِ بِهُدوءٍ وَنِظامٍ في تَعَلُّمِ العَرَبِيَّةِ: مِنَ القَواعِدِ الأُولى إِلى المُمارَسَةِ الواثِقَةِ.",
            about_p2: "يَقُومُ التَّعَلُّمُ على بَرْنامَجٍ واضِحٍ، وَمُراجَعَةِ الواجباتِ، وَتَواصُلٍ مُباشِرٍ مَعَ المُعَلِّمَةِ.",
            about_f1: "مُراعاةُ مُسْتَوى كُلِّ طالِبٍ",
            about_f2: "بِيئَةٌ تَعْلِيمِيَّةٌ مُغْلَقَةٌ في Telegram",
            about_f3: "مُراجَعَةٌ مُنْتَظِمَةٌ وَتَغْذِيَةٌ راجِعَةٌ",
            about_f4: "اِهْتِمامٌ بِالنَّحْوِ وَالقِراءَةِ وَالكَلامِ",
            quote_text: "«لا تُقارِنْ طَرِيقَكَ في تَعَلُّمِ العَرَبِيَّةِ بِطَرِيقِ غَيْرِكَ؛ فَلِكُلِّ طالِبٍ سُرْعَتُهُ وَقُدْرَتُهُ.»",
            mentor_label: "المُعَلِّمَةُ",
            mentor_p1: "مُعَلِّمَةُ اللُّغَةِ العَرَبِيَّةِ لِغَيْرِ النّاطِقِينَ بِها، وَلَها خِبْرَةٌ طَويلَةٌ.",
            mentor_p2: "تَتَخَصَّصُ في العَرَبِيَّةِ الفُصْحى، وَالنَّحْوِ، وَالمُحادَثَةِ. تُبَسِّطُ المَسائِلَ الصَّعْبَةَ وَتَقُودُ الطّالِبَ خُطْوَةً خُطْوَةً.",
            stat_years: "سَنَواتُ خِبْرَةٍ",
            stat_students: "طالِبًا",
            stat_subscribers: "مُشْتَرِكًا",
            benefits_label: "المَزايا",
            benefits_title: "لِماذا يَخْتارُونَنا",
            benefit_1_title: "جَوْدَةٌ عالِيَةٌ",
            benefit_1_text: "مُجْتَمَعٌ مُغْلَقٌ لِطُلّابٍ جادِّينَ يُريدُونَ النَّتيجَةَ.",
            benefit_2_title: "مَنْهَجِيَّةٌ عِلْمِيَّةٌ",
            benefit_2_text: "دِراسَةٌ مُتَعَمِّقَةٌ لِلقَواعِدِ وَالقِراءَةِ وَبِنْيَةِ اللُّغَةِ العَرَبِيَّةِ.",
            benefit_3_title: "مُتابَعَةٌ مُسْتَمِرَّةٌ",
            benefit_3_text: "تُتابِعُ المُعَلِّمَةُ تَقَدُّمَكَ وَتُساعِدُكَ على تَصْحيحِ الأَخْطاءِ.",
            telegram_title: "تَعَلَّمْ في المَكانِ الَّذي يُناسِبُكَ",
            telegram_h3: "كُلُّ التَّعَلُّمِ في مَكانٍ واحِدٍ",
            telegram_p1: "الدُّروسُ، وَالواجباتُ، وَمُراجَعَةُ الأَعْمالِ، وَرَسائِلُ المُعَلِّمَةِ كُلُّها في واجِهَةِ Telegram المَألوفَةِ.",
            telegram_p2: "لا حاجَةَ إِلى مِنَصّاتٍ مُعَقَّدَةٍ؛ يَكْفيكَ هاتِفُكَ وَرَغْبَتُكَ في المُداوَمَةِ.",
            telegram_card: "القَناةُ، الواجباتُ، والتَّواصُلُ",
            process_label: "الخُطُواتُ",
            process_title: "رِحْلَةُ الطّالِبِ",
            step_1_title: "التَّسْجيلُ",
            step_1_text: "تُرْسِلُ رِسالَةً عَبْرَ البوت أَوْ Telegram.",
            step_2_title: "تَحْديدُ المُسْتَوى",
            step_2_text: "نُحَدِّدُ مُسْتَواكَ وَالشَّكْلَ المُناسِبَ لِلدِّراسَةِ.",
            step_3_title: "البِدايَةُ",
            step_3_text: "نُدْخِلُكَ في مَجْموعَةٍ أَوْ في مَسارٍ فَرْدِيٍّ.",
            step_4_title: "النَّتيجَةُ",
            step_4_text: "تَتَقَدَّمُ وَفْقَ البَرْنامَجِ وَتَحْصُلُ على مُتابَعَةٍ واضِحَةٍ.",
            pricing_label: "الباقات",
            pricing_title: "اِخْتَرْ شَكْلَ الدِّراسَةِ",
            group_label: "دَوْرَةٌ جَماعِيَّةٌ",
            group_title: "في مَجْموعَةٍ مُغْلَقَةٍ",
            group_text: "تُناسِبُ مَنْ يُريدُ نِظامًا واضِحًا، وَسَيْرًا مُشْتَرَكًا، وَجَوًّا تَعْلِيمِيًّا.",
            group_f1: "مُحْتَوى تَعْلِيمِيٌّ مُنَظَّمٌ",
            group_f2: "مُمارَسَةُ المُحادَثَةِ",
            group_f3: "مُراجَعَةُ الواجباتِ في المَجْموعَةِ",
            group_button: "اِخْتَرِ الدَّوْرَةَ الجَماعِيَّةَ",
            individual_label: "دَوْرَةٌ فَرْدِيَّةٌ",
            individual_title: "مَسارٌ شَخْصِيٌّ",
            individual_text: "تُناسِبُ مَنْ يَحتاجُ إِلى سُرْعَةٍ خاصَّةٍ وَعَمَلٍ دَقيقٍ على الأَخْطاءِ.",
            individual_f1: "مُراجَعَةٌ شَخْصِيَّةٌ مِنَ المُعَلِّمَةِ",
            individual_f2: "تَرْكيزٌ على نِقاطِ الضَّعْفِ",
            individual_f3: "مُتابَعَةٌ خاصَّةٌ بِجَوْدَةٍ عالِيَةٍ",
            individual_button: "اِخْتَرِ الدَّوْرَةَ الفَرْدِيَّةَ",
            lessons_label: "كَيْفَ تَسيرُ الدُّروسُ",
            lessons_title: "Telegram وZoom وَتَدْريبٌ واضِحٌ",
            lesson_1_title: "المَوادُّ في Telegram",
            lesson_1_text: "الدُّروسُ، وَالواجباتُ، وَالتَّنْبيهاتُ في مَكانٍ تَعْلِيمِيٍّ واحِدٍ.",
            lesson_2_title: "لِقاءاتٌ عَبْرَ Zoom",
            lesson_2_text: "نَشْرَحُ المَواضيعَ صَوْتِيًّا، وَنُدَرِّبُ النُّطْقَ، وَنُجيبُ عَنِ الأَسْئِلَةِ.",
            lesson_3_title: "مُراجَعَةٌ وَتَثْبيتٌ",
            lesson_3_text: "تُرْسِلُ الواجباتِ وَتَحْصُلُ على تَغْذِيَةٍ راجِعَةٍ واضِحَةٍ.",
            contact_label: "التَّواصُلُ",
            contact_title: "أَيْنَ تُراسِلُنا",
            contact_text: "اِخْتَرِ الطَّريقَةَ المُناسِبَةَ: البوت لِلتَّسْجيلِ، القَناةُ لِلأَخْبارِ، أَوْ Instagram لِلتَّعَرُّفِ على المَرْكَزِ.",
            contact_bot_title: "سَجِّلْ في الدِّراسَةِ",
            contact_bot_text: "البوت في Telegram",
            contact_open: "اِفْتَحْ",
            contact_channel_title: "اِنْتَقِلْ إِلى القَناةِ",
            contact_channel_text: "أَخْبارُ وَمَوادُّ Markaz al-Mona · 2558 مُشْتَرِكًا",
            contact_go: "اِنْتَقِلْ",
            contact_inst_title: "شاهِدْ Instagram",
            contact_inst_text: "مَنْشوراتٌ وَمَوادُّ مَرْئِيَّةٌ",
            contact_view: "شاهِدْ",
            tagline: "Markaz al-Mona: طَريقُكَ إِلى العَرَبِيَّةِ الحَقيقيَّةِ"
        }
    };

    const applyTheme = (theme) => {
        document.body.classList.toggle("dark-theme", theme === "dark");
        localStorage.setItem("theme", theme);
    };

    const applyLanguage = (lang) => {
        const dictionary = translations[lang] || translations.ru;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[key]) {
                element.textContent = dictionary[key];
            }
        });

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.body.classList.toggle("rtl", lang === "ar");

        langButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.lang === lang);
        });

        localStorage.setItem("lang", lang);
    };

    applyTheme(storedTheme || "light");
    applyLanguage(storedLang);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            applyTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
        });
    }

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang);
        });
    });

    if (menuButton && header) {
        menuButton.addEventListener("click", () => {
            header.classList.toggle("is-open");
        });

        header.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                header.classList.remove("is-open");
            });
        });
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.16 });

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }
});
