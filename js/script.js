const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en","ch"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const homeTexts = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
		ch: "课程",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
	},
	"helpers": {
		ru: "Тьюторы и наставники",
		en: "Tutors and mentors",
		ch: "导师",
	},
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
		ch: "VK组",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
		ch: "个人资料",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
		ch: "去",
	},
	"home_page1": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
	},
	"list-of-tasks": {
		ru: "Список заданий",
		en: "List of tasks",
		ch: "任务列表",
	},
	"registr1": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your account",
		ch: "在您的个人帐户中注册",
	},
	"link1": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"link2": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"link3": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"link4": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"link5": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"link6": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"link7": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
	},
	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
		ch: "IT野餐已经是下周六了！",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
		ch: "占位符文本通常用于图形、印刷和出版行业来预览布局。..",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
		ch: "进一步",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
		ch: "阿拉卡集团2024",
	},
	"list-of-tasks-1": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your personal account",
		ch: "在您的个人帐户中注册",
	},
	"list-of-tasks-2": {
		ru: "Получение корпоративной почты",
		en: "Receiving corporate mail",
		ch: "接收公司邮件",
	},
	"list-of-tasks-3": {
		ru: 'Получение "Office 365"',
		en: 'Getting "Office 365"',
		ch: '获取"Office365"',
	},
	"list-of-tasks-4": {
		ru: "Использование Outlook Web Access",
		en: "Using Outlook Web Access",
		ch: "使用Outlook Web Access",
	},
	"list-of-tasks-5": {
		ru: "Регистрация на онлайн курсы",
		en: "Registration for online courses",
		ch: "网上课程报名",
	},
	"list-of-tasks-6": {
		ru: "Разница между НТК и Прокторингом",
		en: "The difference between ITC and Proctoring",
		ch: "ITC和Proctoring的区别",
	},
	"list-of-tasks-7": {
		ru: "Ссылки на полезные группы",
		en: "Links to useful groups",
		ch: "有用组的链接",
	},
};

const registr2 = {
	"greeting": {
		ru: "Рады Вас видеть!",
		en: "We are glad to see you!",
		ch: "我们很高兴见到你！",
	},
	"log-in": {
		ru: "Пожалуйста, авторизуйтесь",
		en: "Please log in",
		ch: "请登入",
	},
	"email": {
		ru: "Почта",
		en: "Email",
		ch: "电邮",
	},
	"password": {
		ru: "Пароль",
		en: "Password",
		ch: "暗号",
	},
	"login": {
		ru: "Войти",
		en: "Log In",
		ch: "进来",
	},
	"ask": {
		ru: "У Вас нет аккаунта?",
		en: "You have no account?",
		ch: "你没有帐户？",
	},
	"register": {
		ru: "Зарегистрируйтесь!",
		en: "Register!",
		ch: "登记!",
	},
};

// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/page_main.html":
			currentTexts = homeTexts;
			break;
		case "/registration-2.html":
			currentTexts = registr2;
			break;	
		default:
			currentTexts = homeTexts;
			break;
	}
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
	for (const key in currentTexts) {
		let elem = document.querySelector(`[data-lang=${key}]`);
		if (elem) {
			elem.textContent = currentTexts[key][currentLang];
		}
	}
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langButtons, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currentLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
				russian();
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
				english();
			break;
		case "ch":
			document
				.querySelector('[data-btn="ch"]')
				.classList.add("header__btn_active");
				chinese();
			break;
		default:
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
	}
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
	const navLang = navigator.language.slice(0, 2).toLowerCase();
	const result = allLangs.some((elem) => {
		return elem === navLang;
	});
	if (result) {
		return navLang;
	}
}

console.log("navigator.language", checkBrowserLang());
function english(){
    document.getElementById('myImage1')
    .srcset="img/main_slider/slaid1-eng.svg";
    document.getElementById('myImage2')
    .srcset="img/main_slider/slaid3-eng.svg";
    document.getElementById('myImage3')
    .srcset="img/main_slider/slaid2-eng.svg";
	document.getElementById('myImage1-sm')
    .src="img/main_slider/slaid1-en-sm.svg";
    document.getElementById('myImage2-sm')
    .src="img/main_slider/slaid2-en-sm.svg";
    document.getElementById('myImage3-sm')
    .src="img/main_slider/slaid3-en-sm.svg";
  }
    
  function russian(){
    document.getElementById('myImage1')
    .srcset="img/main_slider/slaid1-rus.svg";
    document.getElementById('myImage2')
    .srcset="img/main_slider/slaid2-rus.svg";
    document.getElementById('myImage3')
    .srcset="img/main_slider/slaid3-rus.svg";
	document.getElementById('myImage1-sm')
	.src="img/main_slider/slaid1-rus-sm.svg";
    document.getElementById('myImage2-sm')
    .src="img/main_slider/slaid2-rus-sm.svg";
    document.getElementById('myImage3-sm')
    .src="img/main_slider/slaid3-rus-sm.svg";
  }
  function chinese(){
    document.getElementById('myImage1')
    .srcset="img/main_slider/slaid1-ch.svg";
    document.getElementById('myImage2')
    .srcset="img/main_slider/slaid2-ch.svg";
    document.getElementById('myImage3')
    .srcset="img/main_slider/slaid3-ch.svg";
	document.getElementById('myImage1-sm')
	.src="img/main_slider/slaid1-ch-sm.svg";
    document.getElementById('myImage2-sm')
    .src="img/main_slider/slaid2-ch-sm.svg";
    document.getElementById('myImage3-sm')
    .src="img/main_slider/slaid3-ch-sm.svg";
  }
