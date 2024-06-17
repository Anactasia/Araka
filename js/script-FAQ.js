const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ru", "en","ch","ar"];
const currentPathName = window.location.pathname;
let currentLang =
	localStorage.getItem("language") || checkBrowserLang() || "ru";
let currentTexts = {};


const homeTexts = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
		ar: "القائمة الرئيسية",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
		ch: "课程",
		ar: "الدورات",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
		ar: "الامتحانات",
	},
	"helpers": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
		ar: "المعلمين",
	},
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
		ch: "VK组",
		ar: "مجموعات كيه",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
		ch: "个人资料",
		ar: "الحساب",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
		ch: "去",
		ar: "تسجيل الخروج",
	},
	"home_page1": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
		ar: "القائمة الرئيسية",
	},
	"list-of-tasks": {
		ru: "Список заданий",
		en: "List of tasks",
		ch: "任务列表",
		ar: "قائمة المهام",
	},
	"registr1": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your account",
		ch: "在您的个人帐户中注册",
		ar: "التسجيل في حسابك",
	},
	"link1": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"link2": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"link3": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"link4": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"link5": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"link6": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"link7": {
		ru: "ссылка",
		en: "link",
		ch: "连结",
		ar: "الرابط",
	},
	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
		ar: "الأخبار",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
		ch: "IT野餐已经是下周六了！",
		ar: "نزهة تكنولوجيا المعلومات هي بالفعل يوم السبت المقبل!",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
		ch: "占位符文本通常用于图形、印刷和出版行业来预览布局。..",
		ar: "يستخدم نص العنصر النائب بشكل شائع في صناعات الرسم والطباعة والنشر لمعاينة التخطيط...",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
		ch: "进一步",
		ar: "إقرأ المزيد",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
		ch: "阿拉卡集团2024",
		ar: 'Group مجموعة "أراكا" 2024',
	},
	"list-of-tasks-1": {
		ru: "Регистрация в личном кабинете",
		en: "Registration in your personal account",
		ch: "在您的个人帐户中注册",
		ar: "التسجيل في حسابك الشخصي",
	},
	"list-of-tasks-2": {
		ru: "Получение корпоративной почты",
		en: "Receiving corporate mail",
		ch: "接收公司邮件",
		ar: "تلقي البريد الإلكتروني للشركات",
	},
	"list-of-tasks-3": {
		ru: 'Получение "Office 365"',
		en: 'Getting "Office 365"',
		ch: '获取"Office365"',
		ar: 'الحصول على " مكتب 365',
	},
	"list-of-tasks-4": {
		ru: "Использование Outlook Web Access",
		en: "Using Outlook Web Access",
		ch: "使用Outlook Web Access",
		ar: "استخدام الوصول إلى الويب أوتلوك",
	},
	"list-of-tasks-5": {
		ru: "Регистрация на онлайн курсы",
		en: "Registration for online courses",
		ch: "网上课程报名",
		ar: "التسجيل في الدورات عبر الإنترنت",
	},
	"list-of-tasks-6": {
		ru: "Разница между НТК и Прокторингом",
		en: "The difference between ITC and Proctoring",
		ch: "ITC和Proctoring的区别",
		ar: "الفرق بين مركز التجارة الدولية والمراقبة",
	},
	"list-of-tasks-7": {
		ru: "Ссылки на полезные группы",
		en: "Links to useful groups",
		ch: "有用组的链接",
		ar: "روابط لمجموعات مفيدة",
	},
};

const registr2 = {
	"greeting": {
		ru: "Рады Вас видеть!",
		en: "We are glad to see you!",
		ch: "我们很高兴见到你！",
		ar: "نحن سعداء لرؤيتك!",
	},
	"log-in": {
		ru: "Пожалуйста, авторизуйтесь",
		en: "Please log in",
		ch: "请登入",
		ar: "الرجاء تسجيل الدخول",
	},
	"email": {
		ru: "Почта",
		en: "Email",
		ch: "电邮",
		ar: "البريد الإلكتروني",
	},
	"password": {
		ru: "Пароль",
		en: "Password",
		ch: "暗号",
		ar: "كلمة المرور",
	},
	"login": {
		ru: "Войти",
		en: "Log In",
		ch: "进来",
		ar: "تسجيل الدخول",
	},
	"ask": {
		ru: "У Вас нет аккаунта?",
		en: "You have no account?",
		ch: "你没有帐户？",
		ar: "ليس لديك حساب?",
	},
	"register": {
		ru: "Зарегистрируйтесь!",
		en: "Register!",
		ch: "登记!",
		ar: "سجل!",
	},
};

const registr3 = {
	"glad-to-see": {
		ru: "Привет, новичок!",
		en: "Hello, newbie!",
		ch: "你好，新手!",
		ar: "مرحبا ، مبتدئ!",
	},
	"lets-reg": {
		ru: "Давай зарегистрируемся",
		en: "Let's register",
		ch: "让我们注册",
		ar: "دعنا نسجل",
	},
	"surname": {
		ru: "Фамилия",
		en: "Surname",
		ch: "姓",
		ar: "اللقب",
	},
	"name": {
		ru: "Имя",
		en: "Name",
		ch: "姓名",
		ar: "الاسم",
	},
	"patronymic": {
		ru: "Отчество",
		en: "Patronymic",
		ch: "中间名",
		ar: "الأب",
	},
	"direction": {
		ru: "Направление",
		en: "Direction",
		ch: "方向感",
		ar: "الاتجاه",
	},
	"alg": {
		ru: "Алгоритмы искусственного интеллекта",
		en: "Artificial Intelligence Algorithms",
		ch: "人工智能算法",
		ar: "خوارزميات الذكاء الاصطناعي",
	},
	"inf": {
		ru: "Информатика и вычислительная техника",
		en: "Computer Science and Engineering",
		ch: "计算机科学与工程",
		ar: "Computer Science and Engineering",
	},
	"prinf": {
		ru: "Прикладная информатика",
		en: "Applied Computer Science",
		ch: "应用计算机科学",
		ar: "علوم الكمبيوتر التطبيقية",
	},
	"pring": {
		ru: "Программная инженерия",
		en: "Software Engineering",
		ch: "软件工程",
		ar: "هندسة البرمجيات",
	},
	"not-chosen1": {
		ru: "Не выбрано",
		en: "Not selected",
		ch: "未选择",
		ar: "غير محدد",
	},
	"not-chosen2": {
		ru: "Не выбрано",
		en: "Not selected",
		ch: "未选择",
		ar: "غير محدد",
	},
	"groups": {
		ru: "Группа",
		en: "Group",
		ch: "团体",
		ar: "المجموعة",
	},
	"next": {
		ru: "Далее",
		en: "Next",
		ch: "进一步",
		ar: "التالي",
	},
};

const registr4 = {
	"continue": {
		ru: "Продолжим!",
		en: "Let's continue!",
		ch: "让我们继续!",
		ar: "دعونا نواصل!",
	},
	"enter": {
		ru: "Введите данные",
		en: "Enter the data",
		ch: "输入数据",
		ar: "أدخل البيانات",
	},
	"email": {
		ru: "Почта",
		en: "E-Mail",
		ch: "电子邮件",
		ar: "البريد الإلكتروني",
	},
	"password": {
		ru: "Пароль",
		en: "Password",
		ch: "密码",
		ar: "كلمة المرور",
	},
	"login": {
		ru: "Войти",
		en: "Log in",
		ch: "登陆",
		ar: "تسجيل الدخول",
	},
	"asking": {
		ru: "У Вас уже есть аккаунт?",
		en: "Do you already have an account?",
		ch: "你已经有帐户了吗？",
		ar: "هل لديك حساب بالفعل?",
	},
	"reg-btn": {
		ru: "Войдите!",
		en: "Log in!",
		ch: "登陆!",
		ar: "تسجيل الدخول!",
	},
};
const tutors = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
		ar: "القائمة الرئيسية",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
		ch: "课程",
		ar: "الدورات",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
		ar: "الامتحانات",
	},
	"helpers": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
		ar: "المعلمين",
	},
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
		ch: "VK组",
		ar: "مجموعات كيه",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
		ch: "个人资料",
		ar: "الحساب",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
		ch: "去",
		ar: "تسجيل الخروج",
	},
	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
		ar: "الأخبار",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
		ch: "IT野餐已经是下周六了！",
		ar: "نزهة تكنولوجيا المعلومات هي بالفعل يوم السبت المقبل!",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
		ch: "占位符文本通常用于图形、印刷和出版行业来预览布局。..",
		ar: "يستخدم نص العنصر النائب بشكل شائع في صناعات الرسم والطباعة والنشر لمعاينة التخطيط...",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
		ch: "进一步",
		ar: "إقرأ المزيد",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
		ch: "阿拉卡集团2024",
		ar: 'Group مجموعة "أراكا" 2024',
	},
	"tutors": {
		ru: "Тьюторы и наставники",
		en: "Tutors and mentors",
		ch: "导师及导师",
		ar: "المعلمون والموجهون",
	},
	"tut": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
		ar: "المعلمين",
	},
	"georgy": {
		ru: "Базаров Георгий",
		en: "Bazarov Georgy",
		ch: "巴扎罗夫*乔治",
		ar: "بازاروف جورجي",
	},
	"g-dir": {
		ru: "Направления: «Информатика и вычислительная техника», «Алгоритмы искусственного интеллекта»",
		en: "Directions: «Computer Science and Engineering», «Artificial intelligence algorithms»",
		ch: "方向:«计算机科学与工程»,«人工智能算法»",
		ar: 'الاتجاهات: "علوم وهندسة الكمبيوتر" ، "خوارزميات الذكاء الاصطناعي"',
	},
	"g-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
		ar: "المجموعات الأكاديمية:",
	},
	"artem": {
		ru: "Хрушков Артём",
		en: "Khrushkov Artyom",
		ch: "赫鲁晓夫Artyom",
		ar: "خروتشكوفا أرتيوم",
	},
	"ar-dir": {
		ru: "Направление: «Прикладная информатика»",
		en: "Direction: «Applied Computer Science»",
		ch: "方向：«应用计算机科学»",
		ar: 'الاتجاه: "علوم الكمبيوتر التطبيقية"',
	},
	"ar-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
		ar: "المجموعات الأكاديمية:",
	},
	"alena": {
		ru: "Садова Алена",
		en: "Sadova Alyona",
		ch: "萨多瓦*阿廖纳",
		ar: "سادوفا اليونا",
	},
	"al-dir": {
		ru: "Направление: «Программная инженерия»",
		en: "Direction: «Software Engineering»",
		ch: "方向：«软件工程»",
		ar: 'الاتجاه: "هندسة البرمجيات"',
	},
	
	"al-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
		ar: "المجموعات الأكاديمية:",
	},
	"irina": {
		ru: "Колмогорцева Ирина",
		en: "Kolmogortseva Irina",
		ch: "Kolmogortseva伊琳娜",
		ar: "كولموغورتسيفا إيرينا",
	},
	"ir-dir": {
		ru: 'Направления: «Программная инженерия», «Информатика и вычислительная техника»',
		en: 'Directions: «Software Engineering», «Computer Science and Computer Engineering»',
		ch: '方向：«软件工程»、«计算机科学与计算机工程»',
		ar: 'Directions: «Software Engineering», «Computer Science and Computer Engineering»',
	},
	"ir-gr": {
		ru: "Академические группы:",
		en: "Academic groups:",
		ch: "学术团体:",
		ar: "المجموعات الأكاديمية:",
	},
	
	"cont1": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
		ar: "جهات الاتصال",
	},
	"cont2": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
		ar: "جهات الاتصال",
	},
	"cont3": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
		ar: "جهات الاتصال",
	},
	"cont4": {
		ru: "Контакты",
		en: "Contacts",
		ch: "联络人",
		ar: "جهات الاتصال",
	},
	"adress11":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
		ar: "العنوان:",
	},
	"adress21":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
		ar: "العنوان:",
	},
	"adress31":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
		ar: "العنوان:",
	},
	"adress41":{
		ru: "Адрес:",
		en: "Adress:",
		ch: "地址:",
		ar: "العنوان:",
	},
	"adress12":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
		ar: "32 شارع ميرا ، القاعة: آر-138 أ",
	},
	"adress22":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
		ar: "32 شارع ميرا ، القاعة: آر-138 أ",
	},
	"adress32":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
		ar: "32 شارع ميرا ، القاعة: آر-138 أ",
	},
	"adress42":{
		ru: "ул. Мира, 32, аудитория: Р-138а",
		en: "32 Mira Street, auditorium: R-138a",
		ch: "米拉街32号礼堂：R-138a",
		ar: "32 شارع ميرا ، القاعة: آر-138 أ",
	},
	"email1":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
		ar: "البريد الإلكتروني:",
	},
	"email2":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
		ar: "البريد الإلكتروني:",
	},
	"email3":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
		ar: "البريد الإلكتروني:",
	},
	"email4":{
		ru: "Электронная почта:",
		en: "Email:",
		ch: "电邮:",
		ar: "البريد الإلكتروني:",
	},
	"page1":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
		ar: "كيه الصفحة:",
	},
	"page2":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
		ar: "كيه الصفحة:",
	},
	"page3":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
		ar: "كيه الصفحة:",
	},
	"page4":{
		ru: "Страница ВК:",
		en: "VK page:",
		ch: "VK页:",
		ar: "كيه الصفحة:",
	},
};
const courses = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
		ar: "القائمة الرئيسية",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
		ch: "课程",
		ar: "الدورات",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
		ar: "الامتحانات",
	},
	"helpers": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
		ar: "المعلمين",
	},
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
		ch: "VK组",
		ar: "مجموعات كيه",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
		ch: "个人资料",
		ar: "الحساب",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
		ch: "去",
		ar: "تسجيل الخروج",
	},
	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
		ar: "الأخبار",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
		ch: "IT野餐已经是下周六了！",
		ar: "نزهة تكنولوجيا المعلومات هي بالفعل يوم السبت المقبل!",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
		ch: "占位符文本通常用于图形、印刷和出版行业来预览布局。..",
		ar: "يستخدم نص العنصر النائب بشكل شائع في صناعات الرسم والطباعة والنشر لمعاينة التخطيط...",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
		ch: "进一步",
		ar: "إقرأ المزيد",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
		ch: "阿拉卡集团2024",
		ar: 'Group مجموعة "أراكا" 2024',
	},
	"course": {
		ru: "Немного о курсах",
		en: "A little bit about the courses",
		ch: "关于课程的一些信息",
		ar: "قليلا عن الدورات",
	},
	"course-tests": {
		ru: "Курсы и тесты",
		en: "Courses and tests",
		ch: "课程及考试",
		ar: "الدورات والاختبارات",
	},
	"course-openedu": {
		ru: "Курсы на Openedu.ru",
		en: "Courses on Openedu.ru",
		ch: "课程Openedu.ru",
		ar: "دورات في Openedu.ru",
	},
	"course-exam": {
		ru: "Тесты на Exam1.urfu.ru",
		en: "Tests for Exam1.urfu.ru",
		ch: "测试Exam1.urfu.ru",
		ar: "اختبارات ل Exam1.urfu.ru",
	},
	"course-ulearn": {
		ru: "Курсы на Ulearn.me",
		en: "Courses on Ulearn.me",
		ch: "有关课程Ulearn.me",
		ar: "دورات في ULearn.me",
	},
	"course-elearn": {
		ru: "Курсы на Elearn.urfu.ru",
		en: "Courses on Elearn.urfu.ru",
		ch: "课程Elearn.urfu.ru",
		ar: "دورات في Elearn.urfu.ru",
	},
	
};
const exam = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
		ar: "القائمة الرئيسية",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
		ch: "课程",
		ar: "الدورات",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
		ar: "الامتحانات",
	},
	"helpers": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
		ar: "المعلمين",
	},
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
		ch: "VK组",
		ar: "مجموعات كيه",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
		ch: "个人资料",
		ar: "الحساب",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
		ch: "去",
		ar: "تسجيل الخروج",
	},
	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
		ar: "الأخبار",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
		ch: "IT野餐已经是下周六了！",
		ar: "نزهة تكنولوجيا المعلومات هي بالفعل يوم السبت المقبل!",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
		ch: "占位符文本通常用于图形、印刷和出版行业来预览布局。..",
		ar: "يستخدم نص العنصر النائب بشكل شائع في صناعات الرسم والطباعة والنشر لمعاينة التخطيط...",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
		ch: "进一步",
		ar: "إقرأ المزيد",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
		ch: "阿拉卡集团2024",
		ar: 'Group مجموعة "أراكا" 2024',
	},
	"ntc": {
		ru: "НТК",
		en: "ITC",
		ch: "ITC",
		ar: "ITC",
	},
	"exam": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
		ar: "الامتحانات",
	},
	"proct": {
		ru: "Прокторинг",
		en: "Proctoring",
		ch: "Proctoring",
		ar: "Proctoring",
	},
    
};
const FAQ = {
	"home_page": {
		ru: "Главная",
		en: "Main menu",
		ch: "主要",
		ar: "القائمة الرئيسية",
	},
	"courses": {
		ru: "Курсы",
		en: "Courses",
		ch: "课程",
		ar: "الدورات",
	},
	"exams": {
		ru: "Экзамены",
		en: "Exams",
		ch: "考试",
		ar: "الامتحانات",
	},
	"helpers": {
		ru: "Тьюторы",
		en: "Tutors",
		ch: "导师",
		ar: "المعلمين",
	},
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
	"groups": {
		ru: "Группы ВК",
		en: "VK groups",
		ch: "VK组",
		ar: "مجموعات كيه",
	},
	"account": {
		ru: "Профиль",
		en: "Account",
		ch: "个人资料",
		ar: "الحساب",
	},
	"log-out": {
		ru: "Выйти",
		en: "Log out",
		ch: "去",
		ar: "تسجيل الخروج",
	},
	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
		ar: "الأخبار",
	},
	"news-h": {
		ru: "IT-пикник уже в следующую субботу!",
		en: "The IT picnic is already next Saturday!",
		ch: "IT野餐已经是下周六了！",
		ar: "نزهة تكنولوجيا المعلومات هي بالفعل يوم السبت المقبل!",
	},
	"news-p": {
		ru: "Текст-заполнитель обычно используется в графической, печатной и издательской индустрии для предварительного просмотра макета...",
		en: "Placeholder text is commonly used in the graphic, print, and publishing industries to preview a layout...",
		ch: "占位符文本通常用于图形、印刷和出版行业来预览布局。..",
		ar: "يستخدم نص العنصر النائب بشكل شائع في صناعات الرسم والطباعة والنشر لمعاينة التخطيط...",
	},
	"next": {
		ru: "Далее",
		en: "Read more",
		ch: "进一步",
		ar: "إقرأ المزيد",
	},
	"logo": {
		ru: "© Группа “Арака” 2024",
		en: "© The “Araka” group 2024",
		ch: "阿拉卡集团2024",
		ar: 'Group مجموعة "أراكا" 2024',
	},
	"q1": {
		ru: "Почему не работает модеус?",
		en: "Why is the modus not working?",
		ch: "为什么这个模式不起作用？",
		ar: "لماذا هو عمل لا يعمل?",
	},
	"q2": {
		ru: "Какой язык программирования на 1 курсе? ",
		en: "What is the programming language in the 1st year?",
		ch: "第一年的编程语言是什么？",
		ar: "ما هي لغة البرمجة في السنة 1?",
	},
	"q3": {
		ru: "Языки программирования на 2 курсе ИОТ, Урфу 09 направление?",
		en: "Programming languages in the 2nd year And FROM, Urfu 09 direction?",
		ch: "第二年及以后的编程语言，Urfu09方向？",
		ar: "لغات البرمجة في السنة 2 ومن, أورفو 09 اتجاه?",
	},
	"q4": {
		ru: "Как закрыть долг? ",
		en: "How to close the debt?",
		ch: "如何关闭债务?",
		ar: "كيفية إغلاق الديون?",
	},
	"q5": {
		ru: "Информация по консультациям и пересдачам студентов ИРИТ-РТФ",
		en: "Information on consultations and retakes of IRIT-RTF students",
		ch: "Irit-RTF学生谘询及复试资料",
		ar: "معلومات عن استشارات واستعادات طلاب المعهد",
	},
	"q6": {
		ru: "Брс",
		en: "Point-rating system",
		ch: "积分评级系统",
		ar: "نظام تصنيف النقاط",
	},
	"q7": {
		ru: "Чем отличается программирование Comfort от Sport?",
		en: "What is the difference between Comfort and Sport programming?",
		ch: "Comfort和Sport编程有什么区别？",
		ar: "ما هو الفرق بين الراحة والرياضة البرمجة?",
	},
	"q8": {
		ru: "Зачем нужно входное тестирование по программирования и что на нем будет?",
		en: "Why do I need input testing of programming software and what will happen on it?",
		ch: "为什么我需要编程软件的输入测试，它会发生什么？",
		ar: "لماذا أحتاج اختبار المدخلات من برامج البرمجة وماذا سيحدث على ذلك?",
	},
	"q9": {
		ru: "Как получить автомат по программированию?",
		en: "How do I automatically get a credit for programming?",
		ch: "如何自动获得编程学分",
		ar: "كيف يمكنني تلقائيا الحصول على الائتمان للبرمجة?",
	},
	"p1": {
		ru: "В случае, если у вас отсутствует доступ в систему при наличии доступа в ЛК, обращаемся в поддержку! Электронная почта службы поддержки:",
		en: "If you do not have access to the system if you have access to the LC, please contact support! Email of the support service:",
		ch: "如果您无法访问系统，如果您可以访问LC，请联系支持！ 支援服务的电邮:",
		ar: "إذا لم يكن لديك الوصول إلى النظام إذا كان لديك الوصول إلى لك ، يرجى الاتصال بالدعم! البريد الإلكتروني لخدمة الدعم:",
	},
	"p21": {
		ru: "Весь первый курс основным языком студентов является",
		en: "The entire first year, the main language of the students is",
		ch: "整个第一年，学生的主要语言是",
		ar: "السنة الأولى بأكملها ، اللغة الرئيسية للطلاب هي",
	},
	"p22": {
		ru: "Но можно выбрать дополнительные онлайн-курсы по",
		en: "But it is possible to choose additional online courses on",
		ch: "但是可以选择额外的在线课程",
		ar: "ولكن من الممكن اختيار دورات إضافية عبر الإنترنت على",
	},
	"p221": {
		ru: "Python и Web-программированию",
		en: "Python and Web Programming",
		ch: "Python和Web编程",
		ar: "بايثون وبرمجة الويب",
	},
	"p31": {
		ru: "На",
		en: "In",
		ch: "",
		ar: "",
	},
	"p32": {
		ru: "2 курсе",
		en: "the 2nd year",
		ch: "在第二年",
		ar: "في السنة 2",
	},
	"p33": {
		ru: "студенты могут выбрать один из современных языков программирования:",
		en: ", students can choose one of the modern programming languages:",
		ch: "，学生可以选择一种现代编程语言:",
		ar: "، يمكن للطلاب اختيار واحدة من لغات البرمجة الحديثة:",
	},
	"p61": {
		ru: "Чёрные - первичные",
		en: "Black - primary",
		ch: "黑人-小学",
		ar: "أسود-الابتدائية",
	},
	"p62": {
		ru: "Синие - вторичные",
		en: "The blue ones are secondary",
		ch: "蓝色的是次要的",
		ar: "الأزرق منها ثانوي",
	},
	"p63": {
		ru: "Зеленые - основные",
		en: "Green - basic",
		ch: "绿色-基本",
		ar: "الأخضر-الأساسية",
	},
	"p64": {
		ru: "Черные баллы",
		en: "Black points",
		ch: "黑点",
		ar: "النقاط السوداء",
	},
	"p641": {
		ru: "Зарабатываются при выполнение заданий по предмету. После этого они пересчитываются с использованием специального коэффициента и превращаются в синие.",
		en: "They are earned by completing tasks on the subject. After that, they are recalculated using a special coefficient and turn blue.",
		ch: "他们是通过完成有关该主题的任务而获得的。 之后，使用特殊系数重新计算它们并变为蓝色。",
		ar: "يتم كسبها من خلال إكمال المهام حول هذا الموضوع. بعد ذلك ، يتم إعادة حسابها باستخدام معامل خاص وتتحول إلى اللون الأزرق.",
	},
	"p65": {
		ru: "Синие баллы",
		en: "Blue points",
		ch: "蓝点",
		ar: "النقاط الزرقاء",
	},
	"p651": {
		ru: "Объединяются внутри каждого раздела (например, практика, лабораторные работы, лекции), затем снова пересчитываются с использованием коэффициента и становятся зелеными основными баллами.",
		en: "They are combined within each section (for example, practice, laboratory work, lectures), then recalculated again using a coefficient and become green main points.",
		ch: "它们在每个部分内组合（例如，实践，实验室工作，讲座），然后使用系数再次重新计算并成为绿色要点。",
		ar: "يتم دمجها داخل كل قسم (على سبيل المثال ، الممارسة ، العمل المخبري ، المحاضرات) ، ثم إعادة حسابها مرة أخرى باستخدام معامل وتصبح نقاطا رئيسية خضراء.",
	},
	"p66": {
		ru: "Зеленые баллы",
		en: "Green points",
		ch: "绿点",
		ar: "النقاط الخضراء",
	},
	"p661": {
		ru: "Из разных разделов суммируются, чтобы определить итоговый балл.",
		en: "The different sections are summarized to determine the final score.",
		ch: "不同的部分进行总结，以确定最终得分。",
		ar: "يتم تلخيص الأقسام المختلفة لتحديد النتيجة النهائية.",
	},
	"p67": {
		ru: "80 - 100 - «Отлично»",
		en: "80 - 100 - «Excellent»",
		ch: "80-100-«优秀»",
		ar: "80-100 - «ممتاز»",
	},
	"p68": {
		ru: "60 - 80 - «Хорошо»",
		en: "60 - 80 - «Good»",
		ch: "60-80-«好»",
		ar: "60-80- «جيد»",
	},
	"p69": {
		ru: "40 - 60 - «Удовлетворительно»",
		en: "40 - 60 - «Satisfactory»",
		ch: "40-60-«满意»",
		ar: "40-60 - «مرضية»",
	},
	"p691": {
		ru: "0 - 40 - «Неудовлетворительно»",
		en: "0 - 40 - «Unsatisfactory»",
		ch: "0-40-«不满意»",
		ar: "0 - 40 - «غير مرض»",
	},
	"p692": {
		ru: "Для зачета по дисциплине нужно набрать как",
		en: "To qualify for the discipline, you need",
		ch: "要获得该学科的资格，您需要键入为",
		ar: "للتأهل للانضباط ، تحتاج إلى الكتابة باسم",
	},
	"p693": {
		ru: "минимум 40 баллов",
		en: "40 points",
		ch: "最少40分",
		ar: "ما لا يقل عن 40 نقطة",
	},
	"p694": {
		ru: "с учетом успешно сданной сессией.",
		en: ", taking into account the successfully completed session.",
		ch: "，考虑到成功完成的会话。",
		ar: "، مع الأخذ في الاعتبار الجلسة المكتملة بنجاح.",
	},
	"p695": {
		ru: "Для успешной сдачи зачета или экзамена необходимо набрать как ",
		en: "To successfully pass a test or exam, you must type as",
		ch: "要成功通过考试或考试，您必须键入",
		ar: "لاجتياز اختبار أو اختبار بنجاح ، يجب عليك الكتابة باسم",
	},
	"p696": {
		ru: "минимум 40 черных баллов",
		en: "minimum of 40 black points",
		ch: "最少40个黑点",
		ar: "الحد الأدنى من 40 نقطة سوداء",
	},
	"h61": {
		ru: "Брс состоит из баллов трех цветов:",
		en: "The Point-rating system consists of points of three colors:",
		ch: "积分评级系统由三种颜色的积分组成:",
		ar: "يتكون نظام تصنيف النقاط من نقاط من ثلاثة ألوان:",
	},
	"h62": {
		ru: "Разбалловка итоговых баллов за предмет в брс:",
		en: "Scoring of final points for a subject in the Point-rating system:",
		ch: "在评分系统中对科目的最后分数进行评分:",
		ar: "تسجيل النقاط النهائية لموضوع ما في نظام تصنيف النقاط:",
	},
	"h63": {
		ru: "Как получить зачет по предмету?",
		en: "How do I get credit for a subject?",
		ch: "我如何获得一门学科的学分?",
		ar: "كيف يمكنني الحصول على الائتمان لموضوع?",
	},
	"h64": {
		ru: "Сколько минимум баллов нужно получить за экзамен/зачет на сессии?",
		en: "How many minimum points do I need to get for the exam/test in the session?",
		ch: "在课程中，我需要获得多少最低分数？",
		ar: "كم عدد النقاط الدنيا التي أحتاجها للحصول على الامتحان / اختبار في الدورة?",
	},
	"h71": {
		ru: "Comfort:",
		en: "Comfort:",
		ch: "舒适感:",
		ar: "الراحة:",
	},
	"h72": {
		ru: "Sport:",
		en: "Sport:",
		ch: "运动:",
		ar: "الرياضة:",
	},
	"p71": {
		ru: "Пошаговая помощь и подробное решение задач по курсу. Детальный разбор домашних задач («чтобы всем было понятно») (Коэффициент x1.00)",
		en: 'Step-by-step help and detailed problem solving for the course. Detailed analysis of household tasks ("so that it is clear to everyone") (Coefficient x1.00)',
		ch: '一步一步的帮助和详细的解决问题的课程. 详细分析家务（"让大家都清楚"）（系数x1.00）',
		ar: 'مساعدة خطوة بخطوة وحل مفصل للمشكلة للدورة. تحليل مفصل للمهام المنزلية(" بحيث يكون واضحا للجميع") (المعامل س 1.00)',
	},
	"p72": {
		ru: "Больше дополнительных задач на алгоритмы и спортивное программирование. Больше дополнительных задач на парах. (Коэффициент x1.25)",
		en: "More additional tasks for algorithms and sports programming. More additional tasks in pairs. ((Coefficient 1.25)",
		ch: "算法和运动编程的更多附加任务。 更多的额外任务成对。 （（系数1.25）",
		ar: "المزيد من المهام الإضافية للخوارزميات والبرمجة الرياضية. المزيد من المهام الإضافية في أزواج. ((المعامل 1.25)",
	},
	"p73": {
		ru: "Также в конце семестра полученные баллы за программирование умножаются на коэффициент, что повышает ваш шанс попасть в первую/нулевую волну выбора дисциплин.",
		en: "Also, at the end of the semester, the points received for programming are multiplied by a coefficient, which increases your chance of getting into the first /zero wave of choosing disciplines.",
		ch: "此外，在学期结束时，收到的编程积分乘以一个系数，这增加了您进入第一/零波选择学科的机会。",
		ar: "أيضا ، في نهاية الفصل الدراسي ، يتم ضرب النقاط المستلمة للبرمجة بمعامل ، مما يزيد من فرصتك في الدخول في الموجة الأولى /الصفرية من اختيار التخصصات.",
	},
	"p81": {
		ru: "Входное тестирование по программированию проходит для того, чтобы распределить студентов по уровням Comfort и Sport, также чтобы было проще определиться с выбором уровня.",
		en: "The entrance test in programming is conducted in order to distribute students according to comfortable and athletic levels, as well as to facilitate the decision on choosing a level.",
		ch: "编程的入学考试是为了根据舒适和运动水平分配学生，以及促进选择一个水平的决定。",
		ar: "يتم إجراء اختبار القبول في البرمجة من أجل توزيع الطلاب وفقا لمستويات مريحة ورياضية ، وكذلك لتسهيل اتخاذ القرار بشأن اختيار المستوى.",
	},
	"p82": {
		ru: "Тестирование состоит из вопросов про себя и решения нескольких небольших задач на чтение и написания кода на языках Python, Pascal, C++ по выбору студента",
		en: "The test consists of questions about yourself and solving several small tasks for reading and writing code in Python, Pascal, C++ languages of the student's choice",
		ch: "测试包括关于你自己的问题和解决几个小任务，用于阅读和编写学生选择的Python，Pascal，C++语言的代码",
		ar: "يتكون الاختبار من أسئلة عن نفسك وحل العديد من المهام الصغيرة لقراءة وكتابة التعليمات البرمجية في بايثون ، باسكال ، سي languages اللغات التي يختارها الطالب",
	},
	"p83": {
		ru: "После первого семестра по результатам освоения курса есть возможность сменить уровень прохождения.",
		en: "After the first semester, according to the results of the course, it is possible to change the level of completion.",
		ch: "在第一学期之后，根据课程的结果，可以改变完成水平。",
		ar: "بعد الفصل الدراسي الأول ، وفقا لنتائج الدورة ، من الممكن تغيير مستوى الإنجاز.",
	},

	"p90": {
		ru: "Чтобы получить автомат, нужно набрать  ",
		en: "To get a slot machine, you need to dial",
		ch: "要获得老虎机，您需要拨打",
		ar: "للحصول على فتحة آلة ، تحتاج إلى الاتصال الهاتفي",
	},

	"p901": {
		ru: "баллов по предмету.",
		en: "scores on the subject.",
		ch: "题的分数。",
		ar: "عشرات حول هذا الموضوع.",
	},	"news": {
		ru: "Новости",
		en: "News",
		ch:"新闻",
		ar: "الأخبار",
	},
	"news-h1": {
		ru: "Изменились правила НТК!",
		en: "The rules of Independent Test Control have changed!",
		ch:"进行独立测试控制的规则已经改变！",
		ar: "لقد تغيرت قواعد إجراء التحكم المستقل في الاختبار!",
	},
	"news-h2": {
		ru: "Проблемы с приложением ITMOproctor",
		en: "Problems with the ITMOproctor application",
		ch:"ITMOproctor应用程序的问题",
		ar: "مشاكل مع تطبيق إيتموبروكتور",
	},
	"news-h3": {
		ru: "C 10 июня проходит сдача по онлайн-курсам:",
		en: "Since June 10, the online courses are being handed over:",
		ch:"自6月10以来，在线课程正在移交:",
		ar: "منذ 10 يونيو ، يتم تسليم الدورات عبر الإنترنت:",
	},
	"news-p1": {
		ru: "Теперь проходить НТК можно только в Mozilla Firefox (последняя версия)",
		en: "Now it is possible to pass the ITC only in Mozilla Firefox (latest version)",
		ch:"现在可以只在Mozilla Firefox（最新版本）中通过NTC",
		ar: "الآن يمكنك أن تأخذ فقط المجلس الوطني الانتقالي في موزيلا فايرفوكس (أحدث إصدار)",
	},
	"news-but": {
		ru: "Подробнее...",
		en: "In more detail...",
		ch:"更详细地说。..",
		ar: "بمزيد من التفصيل...",
	},
	"news-p2": {
		ru: "Все, у кого сорвется экзамен, вправе обратиться по адресу openedu@urfu.ru за дополнительной попыткой.Разработчики работают над устранением проблемы.",
		en: "Anyone who fails the exam has the right to contact openedu@urfu.ru for an additional attempt.The developers are working to fix the problem.",
		ch:"任何未通过考试的人都有权联系openedu@urfu.ru 为一个额外的尝试。开发人员正在努力解决这个问题。",
		ar: "أي شخص يفشل في الامتحان لديه الحق في الاتصال openedu@urfu.ru لمحاولة إضافية.يعمل المطورون على حل المشكلة.",
	},
	"next-p31": {
		ru: "— Философия;",
		en: "— Philosophy;",
		ch:"-哲学;",
		ar: "- فلسفة;",
	},
	
	"next-p32": {
		ru: " — Основы проектной деятельности;",
		en: "— Fundamentals of project activity;",
		ch:"-项目活动的基础;",
		ar: "- أساسيات نشاط المشروع;",
	},
	
	"next-p33": {
		ru: "   — История России;",
		en: "— History of Russia;",
		ch:"-俄罗斯历史;",
		ar: "- تاريخ روسيا;",
	},
	
	"next-p34": {
		ru: "  — Основы педагогической деятельности;",
		en: "— Fundamentals of pedagogical activity;",
		ch:"-教学活动的基础;",
		ar: "- أساسيات النشاط التربوي;",
	},
	
	"next-p35": {
		ru: "  — Теория вероятности и математическая статистика для инженеров;",
		en: "— Probability theory and mathematical statistics for engineers;",
		ch:"-工程师概率论和数理统计;",
		ar: "- نظرية الاحتمالات والإحصاء الرياضي للمهندسين;",
	},
	
	"next-p36": {
		ru: "    — Основы экономической эффективности производства;",
		en: "— Fundamentals of economic efficiency of production;",
		ch:"-生产经济效益的基本要素;",
		ar: "- أساسيات الكفاءة الاقتصادية للإنتاج;",
	},
	
	"next-p37": {
		ru: "   — Инженерная механика;",
		en: "— Engineering mechanics;",
		ch:"-工程力学;",
		ar: "- الميكانيكا الهندسية;",
	},
	
	"next-p38": {
		ru: "   — Основы архитектуры и строительных конструкций;",
		en: "— Fundamentals of architecture and building structures;",
		ch:"-建筑和建筑结构的基础知识;",
		ar: "- أساسيات العمارة وهياكل البناء;",
	},
	
	"next-p39": {
		ru: "   — Начертательная геометрия и инженерная графика;",
		en: "— Descriptive geometry and engineering graphics;",
		ch:"-描述性几何和工程图形;",
		ar: "- الهندسة الوصفية والرسومات الهندسية;",
	},
	
	"next-p30": {
		ru: "   — Инфоэтика (очный экзамен, информация на форуме);",
		en: "— Infoethics (face-to-face exam, information on the forum);",
		ch:"-Infoethics（面对面考试，论坛上的信息）;",
		ar: "- أخلاقيات المعلومات (امتحان وجها لوجه ، معلومات عن المنتدى);",
	},
	
	"next-p301": {
		ru: "  — Кадровая политика и кадровый аудит организации (очный экзамен, информация на форуме).",
		en: "— HR policy and HR audit of the organization (face-to-face exam, information on the forum).",
		ch:"-组织的人事政策和人事审计（面对面审查，论坛上的信息）。",
		ar: "- سياسة شؤون الموظفين ومراجعة شؤون الموظفين في المنظمة (الفحص وجها لوجه ، معلومات عن المنتدى).",
	},

	"p911": {
		ru: "Тестирование  - спорная между 2-3 и 3-4",
		en: "Testing is controversial between 2-3 and 3-4",
		ch: "测试在2-3和3-4之间存在争议",
		ar: "الاختبار مثير للجدل بين 2-3 و 3-4",
	},

	"p912": {
		ru: "Собеседование - спорная между 4-5",
		en: "The interview is controversial between 4-5",
		ch: "面试在4-5之间有争议",
		ar: "المقابلة مثيرة للجدل بين 4-5",
	},

	"p921": {
		ru: "85-100% балл за экзамен балл за семестр",
		en: "85-100% exam score semester score",
		ch: "85-100%考试成绩学期成绩",
		ar: "85-100 ٪ درجة الامتحان درجة الفصل الدراسي",
	},

	"p922": {
		ru: "65-74% балл за экзамен балл за семестр",
		en: "65-74% exam score semester score",
		ch: "65-74%考试成绩学期成绩",
		ar: "65-74 ٪ درجة الامتحان درجة الفصل الدراسي",
	},

	"p923": {
		ru: "45-54% балл за экзамен балл за семестр",
		en: "45-54% exam score semester scorev",
		ch: "45-54%考试成绩学期成绩",
		ar: "45-54 ٪ درجة الامتحان درجة الفصل الدراسي",
	},

	"p924": {
		ru: "0-24% балл за экзамен балл за семестр",
		en: "0-24% exam score semester score",
		ch: "0-24%考试成绩学期成绩",
		ar: "0-24 ٪ درجة الامتحان درجة الفصل الدراسي",
	},

	"p931": {
		ru: "75-84% собеседование (оценка за экзамен ≥ 60 баллов)",
		en: "75-84% interview (exam score ≥ 60 points)",
		ch: "75-84%面试（考试成绩≥60分）",
		ar: "75-84 ٪ مقابلة (درجة الامتحان points 60 نقطة)",
	},

	"p932": {
		ru: "55-64% - компьютерное тестирование (оценка за экзамен ≥ 40 баллов)",
		en: "55-64% - computer testing (exam score ≥ 40 points)",
		ch: "55-64%-电脑测试(考试成绩≥40分)",
		ar: "55-64 ٪ - اختبار الكمبيوتر (درجة الامتحان 40 نقطة ) ",
	},

	"p933": {
		ru: "25 - 44% - компьютерное тестирование (оценка за экзамен ≥ 20 баллов)",
		en: "25 - 44% - computer testing (exam score ≥ 20 points)",
		ch: "25-44%-电脑测试(考试成绩≥20分)",
		ar: "25 - 44 ٪ - اختبار الكمبيوتر (درجة الامتحان 20 نقطة ) ",
	},

	"h91": {
		ru: "В остальных случаях :",
		en: "In other cases :",
		ch: "在其他情况下 :",
		ar: "في حالات أخرى :",
	},

	"h92": {
		ru: "Твердая оценка (балл за экзамен нельзя изменить)",
		en: "Solid grade (exam score cannot be changed)",
		ch: "固体成绩（考试成绩不能更改）",
		ar: "درجة صلبة (لا يمكن تغيير درجة الامتحان)",
	},

	"h93": {
		ru: "Спорная оценка (собеседование или тестирование)",
		en: "Controversial assessment (interview or testing)",
		ch: "有争议的评估（面试或测试）",
		ar: "تقييم مثير للجدل (مقابلة أو اختبار)",
	},
    "card-h": {
		ru: "Часто задаваемые вопросы",
		en: "Frequently Asked Questions",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
};

// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
        case "/page_FAQ.html":
			currentTexts = FAQ;
			break;		
		default:
			currentTexts = FAQ;
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
		case "ar":
			document
				.querySelector('[data-btn="ar"]')
				.classList.add("header__btn_active");
				arabian();
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
	document.getElementById('logotype')
    .srcset="img/ch-logo.svg";
	document.getElementById('language12')
    .src="img/ch-lang.svg";
}
  function english(){
	document.getElementById('logotype')
    .srcset="img/en-logo.svg";
	document.getElementById('language12')
    .src="img/en-lang.svg";
  }

  function russian(){
	document.getElementById('logotype')
    .srcset="img/logo_with_text_ru_violet_1.svg";
	document.getElementById('language12')
    .src="img/ru-lang.svg";
  }
  function arabian(){
	document.getElementById('logotype')
    .srcset="img/logo-ar.svg";
	document.getElementById('language12')
    .src="img/ar-lang.svg";
  }