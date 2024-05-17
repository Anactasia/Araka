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
		ru: "Тьюторы",
		en: "Tutors",
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

const registr3 = {
	"glad-to-see": {
		ru: "Привет, новичок!",
		en: "Hello, newbie!",
		ch: "你好，新手!",
	},
	"lets-reg": {
		ru: "Давай зарегистрируемся",
		en: "Let's register",
		ch: "让我们注册",
	},
	"surname": {
		ru: "Фамилия",
		en: "Surname",
		ch: "姓",
	},
	"name": {
		ru: "Имя",
		en: "Name",
		ch: "姓名",
	},
	"patronymic": {
		ru: "Отчество",
		en: "Patronymic",
		ch: "中间名",
	},
	"direction": {
		ru: "Направление",
		en: "Direction",
		ch: "方向感",
	},
	"alg": {
		ru: "Алгоритмы искусственного интеллекта",
		en: "Artificial Intelligence Algorithms",
		ch: "人工智能算法",
	},
	"inf": {
		ru: "Информатика и вычислительная техника",
		en: "Computer Science and Engineering",
		ch: "计算机科学与工程",
	},
	"prinf": {
		ru: "Прикладная информатика",
		en: "Applied Computer Science",
		ch: "应用计算机科学",
	},
	"pring": {
		ru: "Программная инженерия",
		en: "Software Engineering",
		ch: "软件工程",
	},
	"not-chosen1": {
		ru: "Не выбрано",
		en: "Not selected",
		ch: "未选择",
	},
	"not-chosen2": {
		ru: "Не выбрано",
		en: "Not selected",
		ch: "未选择",
	},
	"groups": {
		ru: "Группа",
		en: "Group",
		ch: "团体",
	},
	"next": {
		ru: "Далее",
		en: "Next",
		ch: "进一步",
	},
};

const registr4 = {
	"continue": {
		ru: "Продолжим!",
		en: "Let's continue!",
		ch: "让我们继续!",
	},
	"enter": {
		ru: "Введите данные",
		en: "Enter the data",
		ch: "输入数据",
	},
	"email": {
		ru: "Почта",
		en: "E-Mail",
		ch: "电子邮件",
	},
	"password": {
		ru: "Пароль",
		en: "Password",
		ch: "密码",
	},
	"login": {
		ru: "Войти",
		en: "Log in",
		ch: "登陆",
	},
	"asking": {
		ru: "У Вас уже есть аккаунт?",
		en: "Do you already have an account?",
		ch: "你已经有帐户了吗？",
	},
	"reg-btn": {
		ru: "Войдите!",
		en: "Log in!",
		ch: "登陆!",
	},
};
const tutors = {
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
		ru: "Тьюторы",
		en: "Tutors",
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
	"tutors": {
		ru: "Тьюторы и наставники",
		en: "Tutors and mentors",
		ch: "导师及导师",
	},
	"tut": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
	},
	"georgy": {
		ru: "Базаров Георгий",
		en: "Bazarov Georgy",
		ch: "巴扎罗夫*乔治",
	},
	"g-dir": {
		ru: "Направления: «Информатика и вычислительная техника», «Алгоритмы искусственного интеллекта»",
		en: "Directions: «Computer Science and Engineering», «Artificial intelligence algorithms»",
		ch: "方向:«计算机科学与工程»,«人工智能算法»",
	},
	"g-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
	},
	"artem": {
		ru: "Хрушков Артём",
		en: "Khrushkov Artyom",
		ch: "赫鲁晓夫Artyom",
	},
	"ar-dir": {
		ru: "Направление: «Прикладная информатика»",
		en: "Direction: «Applied Computer Science»",
		ch: "方向：«应用计算机科学»",
	},
	"ar-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
	},
	"alena": {
		ru: "Садова Алена",
		en: "Sadova Alyona",
		ch: "萨多瓦*阿廖纳",
	},
	"al-dir": {
		ru: "Направление: «Программная инженерия»",
		en: "Direction: «Software Engineering»",
		ch: "方向：«软件工程»",
	},
	
	"al-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
	},
	"irina": {
		ru: "Колмогорцева Ирина",
		en: "Kolmogortseva Irina",
		ch: "Kolmogortseva伊琳娜",
	},
	"ir-dir": {
		ru: 'Направления: «Программная инженерия», «Информатика и вычислительная техника»',
		en: 'Directions: «Software Engineering», «Computer Science and Computer Engineering»',
		ch: '方向：«软件工程»、«计算机科学与计算机工程»',
	},
	"ir-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
	},
	
	"cont1": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
	},
	"cont2": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
	},
	"cont3": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
	},
	"cont4": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
	},
	"adress11":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
	},
	"adress21":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
	},
	"adress31":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
	},
	"adress41":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
	},
	"adress12":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
	},
	"adress22":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
	},
	"adress32":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
	},
	"adress42":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
	},
	"email1":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
	},
	"email2":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
	},
	"email3":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
	},
	"email4":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
	},
	"page1":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
	},
	"page2":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
	},
	"page3":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
	},
	"page4":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
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
		case "/registration-3.html":
			currentTexts = registr3;
			break;
		case "/registration-4.html":
			currentTexts = registr4;
			break;
		case "/page_tutor.html":
			currentTexts = tutors;
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

function chinese(){
	document.getElementById('language12')
    .src="img/ch-lang.svg";
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

  function english(){
	document.getElementById('language12')
    .src="img/en-lang.svg";
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
	document.getElementById('language12')
    .src="img/ru-lang.svg";
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
  