const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};

const homeTexts = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
	},
	"helpers": {
		ru: "Тьюторы и наставники",
		en: "Tutors and mentors",
	},
	"curriculum": {
		ru: "Учебный план и модеус",
		en: "The curriculum and modeus",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
	},
	"home_page1": {
		ru: "Главная",
		en: "Main menu",
	},
	"list-of-tasks": {
		ru: "Список заданий",
		en: "List of tasks",
	},
	"registr1": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your account",
	},
	"registr2": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your account",
	},
	"registr3": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your account",
	},
	"link1": {
		ru: "ссылка",
		en: "link",
	},
	"link2": {
		ru: "ссылка",
		en: "link",
	},
	"link3": {
		ru: "ссылка",
		en: "link",
	},
	"news": {
		ru: "Новости",
		en: "News",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
	},
};


// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
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
			break;
		case "en":
			document
				.querySelector('[data-btn="en"]')
				.classList.add("header__btn_active");
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
