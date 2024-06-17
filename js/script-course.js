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
	"h": {
		ru: " Курсы на Openedu",
		en: "Courses on Openedu",
		ch:"开放大学课程",
		ar: "دورات في أوبينيدو",
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
	"course1": {
		ru: "Платформа Openedu",
		en: "The Openedu platform",
		ch: "开放式平台",
		ar: "منصة أوبينيدو",
	},
	"course2": {
		ru: "Платформа Exam",
		en: "Exam Platform",
		ch: "考试平台",
		ar: "منصة الامتحان",
	},
	"course3": {
		ru: "Платформа Ulearn",
		en: "The Ulearn platform",
		ch: "Ulearn平台",
		ar: "منصة أولرن",
	},
	"course4": {
		ru: "Платформа Elearn",
		en: "Elearn Platform",
		ch: "电子教学平台",
		ar: "منصة التعلم الإلكتروني",
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
	"hr": {
		ru: "Курсы на Elearn.urfu.ru",
		en: "Courses on Elearn.urfu.ru",
		ch: "课程Elearn.urfu.ru",
		ar: "دورات في Elearn.urfu.ru",
	},
	"hr1": {
		ru: "Основы российской государственности",
		en: "The foundations of Russian statehood",
		ch: "俄罗斯建国的基础",
		ar:"أسس الدولة الروسية",
	},
	"hr2": {
		ru: "Длительность курса - 1 семестр",
		en: "The duration of the course is 1 semester",
		ch: "课程持续时间为1学期",
		ar:"مدة الدورة هي 1 فصل دراسي",
	},
	"hr3": {
		ru: "Курс от: УрФУ",
		en: "Course from: UrFU",
		ch: "课程来源：UrFU",
		ar: "دورة من: أورفو",
	},
	"hr4": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"hr5": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"hr6": {
		ru: "Подробнее: много текста в лекционных материалах",
		en: "Read more: there is a lot of text in the lecture materials",
		ch: "阅读更多：讲座资料中有很多文字",
		ar:"اقرأ المزيد: هناك الكثير من النصوص في مواد المحاضرة",
	},
	"hp": {
		ru: "Курсы на Ulearn.me",
		en: "Courses on Ulearn.me",
		ch: "有关课程Ulearn.me",
		ar: "دورات في ULearn.me",
	},
	"hp1": {
		ru: "Основы программирования на примере C#. Часть 1",
		en: "The basics of programming using the example of C#. Part 1",
		ch: "使用C＃示例编程的基础知识。 第一部分",
		ar:"أساسيات البرمجة باستخدام مثال ج#. الجزء 1",
	},
	"hp11": {
		ru: "Длительность курса - 1 семестр",
		en: "The duration of the course is 1 semester",
		ch: "课程持续时间为1学期",
		ar:"مدة الدورة هي 1 فصل دراسي",
	},
	"hp12": {
		ru: 'Курс от: "Контур"',
		en: 'Course from: "Contour"',
		ch: '课程来源："轮廓"',
		ar:'بالطبع من:"كونتور"',
	},
	"hp13": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"hp14": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"hp15": {
		ru: "Подробнее:",
		en: "More detailed:",
		ch: "更详细:",
		ar:"أكثر تفصيلا:",
	},
	"hp16": {
		ru: "1. Важно внимательно смотреть лекции, чтобы успешно выполнить практики",
		en: "1. It is important to watch the lectures carefully in order to successfully complete the practice",
		ch: "1. 仔细观看讲座是很重要的，这样才能成功地完成练习",
		ar:"1. من المهم مشاهدة المحاضرات بعناية من أجل إكمال الممارسة بنجاح",
	},
	"hp17": {
		ru: "2. Начинающим очень тяжело выполнять практики без консультации с преподавателем",
		en: "2. It is very difficult for beginners to practice without consulting a teacher",
		ch: "2. 初学者在没有咨询老师的情况下练习是非常困难的",
		ar:"2. من الصعب جدا على المبتدئين التدرب دون استشارة المعلم",
	},
	"hp18": {
		ru: "3. На прохождение курса дано мало времени",
		en: "3. Little time is given to complete the course",
		ch: "3. 完成课程的时间很少",
		ar:"3. يتم إعطاء القليل من الوقت لإكمال الدورة",
	},
	"hp2": {
		ru: "Оценка сложности алгоритмов",
		en: "Evaluation of the complexity of algorithms",
		ch: "算法复杂度的评估",
		ar:"تقييم تعقيد الخوارزميات",
	},
	"hp21": {
		ru: "Длительность курса - 1 семестр",
		en: "The duration of the course is 1 semester",
		ch: "课程持续时间为1学期",
		ar:"مدة الدورة هي 1 فصل دراسي",
	},
	"hp22": {
		ru: 'Курс от: "Контур"',
		en: 'Course from: "Contour"',
		ch: '课程来源："轮廓"',
		ar:'بالطبع من:"كونتور"',
	},
	"hp23": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"hp24": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"hp25": {
		ru: "Время прохождения: 2 часа",
		en: "Passage time: 2 hours",
		ch: "通过时间：2小时",
		ar:"مرور الوقت: 2 ساعة",
	},
	"hh": {
		ru: "Курсы на Exam",
		en: "Exam Courses",
		ch: "考试课程",
		ar: "دورات الامتحان",
	},
	"hh1": {
		ru: "Английский язык",
		en: "English language",
		ch: "英国语文科",
		ar: "اللغة الإنجليزية",
	},
	"hh2": {
		ru: "Длительность курса - 1 семестр",
		en: "The duration of the course is 1 semester",
		ch: "课程持续时间为1学期",
		ar: "مدة الدورة هي 1 فصل دراسي",
	},
	"hh3": {
		ru: "Курс от: УРФУ",
		en: "Course from: URFU",
		ch: "课程来源：URFU",
		ar: "دورة من: أورفو",
	},
	"hh4": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"hh5": {
		ru: "Запись на курс: осуществляется сотрудниками Exam",
		en: "Registration for the course: carried out by Exam staff",
		ch: "课程注册：由考试人员进行",
		ar: "التسجيل للدورة: يقوم بها طاقم الامتحان",
	},
	"h1": {
		ru: "Введение в цифровую культуру",
		en: "Introduction to Digital Culture",
		ch: "数字文化简介",
		ar: "مقدمة في الثقافة الرقمية",
	},
	"h2": {
		ru: "Информатика для инженеров и исследователей",
		en: "Computer Science for engineers and researchers",
		ch: "面向工程师和研究人员的计算机科学",
		ar: "علوم الكمبيوتر للمهندسين والباحثين",
	},
	"h3": {
		ru: "Информационные технологии и сервисы",
		en: "Information technology and services",
		ch: "资讯科技及服务",
		ar: "تكنولوجيا المعلومات والخدمات",
	},
	"h4": {
		ru: "История России",
		en: "The history of Russia",
		ch: "俄罗斯的历史",
		ar: "تاريخ روسيا",
	},
	"h5": {
		ru: "История российской цивилизации",
		en: "The history of Russian civilization",
		ch: "俄罗斯文明史",
		ar: "تاريخ الحضارة الروسية",
	},
	"h6": {
		ru: "Основы проектной деятельности(Повышенный уровень)",
		en: "Fundamentals of project activity (Advanced level)",
		ch: "项目活动基础（高级）",
		ar: "أساسيات نشاط المشروع (المستوى المتقدم)",
	},
	"h7": {
		ru: "Основы проектной деятельности",
		en: "Fundamentals of project activity",
		ch: "项目活动的基本原理",
		ar: "أساسيات نشاط المشروع",
	},
	"p11": {
		ru: "Длительность курса - 29 мая - 18 декабря 2023 г.",
		en: "The duration of the course is May 29 - December 18, 2023.",
		ch: "课程时间为2023年5月29日至12月18日。",
		ar: "مدة الدورة هي 29 مايو-18 ديسمبر 2023.",
	},
	"p12": {
		ru: "Курс от: ИТМО",
		en: "Course from: ITMO",
		ch: "课程来源：ITMO",
		ar: "دورة من: إيتمو",
	},
	"p13": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p14": {
		ru: "Запись на курс: осуществляется сотрудниками ИТМО",
		en: "Registration for the course: carried out by ITMO staff",
		ch: "课程注册：由ITMO工作人员进行",
		ar: "التسجيل للدورة: يقوم بها موظفو إيتمو",
	},
	"p21": {
		ru: "Длительность курса - 11 сентября 2023 - 21 января 2024 г.",
		en: "The duration of the course is September 11, 2023 - January 21, 2024.",
		ch: "课程时间为2023年9月11日-2024年1月21日。",
		ar: "مدة الدورة هي 11 سبتمبر 2023 - 21 يناير 2024.",
	},
	"p22": {
		ru: "Курс от: МИСиС",
		en: "Course from: MISIS",
		ch: "课程来源：MISIS",
		ar: "دورة من: ميسيس",
	},
	"p23": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p24": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"p31": {
		ru: "Длительность курса - 28 сентября 2023 - 4 февраля 2024 г.",
		en: "The duration of the course is September 28, 2023 - February 4, 2024.",
		ch: "课程时间为2023年9月28日-2024年2月4日。",
		ar: "مدة الدورة هي 28 سبتمبر 2023 - 4 فبراير 2024.",
	},
	"p32": {
		ru: "Курс от: УрФУ",
		en: "Course from: UrFU",
		ch: "课程来源：UrFU",
		ar: "دورة من: أورفو",
	},
	"p33": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p34": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"p35": {
		ru: "Подробнее: текстовый материал бывает более информативным, чем видео",
		en: "Read more: text material can be more informative than video",
		ch: "阅读更多：文本材料可以比视频更具信息性",
		ar: "اقرأ المزيد: يمكن أن تكون المواد النصية أكثر إفادة من الفيديو",
	},
	"p41": {
		ru: "Длительность курса - 28 сентября 2023 - 4 февраля 2024г.",
		en: "The duration of the course is September 28, 2023 - February 4, 2024.",
		ch: "课程时间为2023年9月28日-2024年2月4日。",
		ar: "مدة الدورة هي 28 سبتمبر 2023 - 4 فبراير 2024.",
	},
	"p42": {
		ru: "Курс от: УрФУ",
		en: "Course from: UrFU",
		ch: "课程来源：UrFU",
		ar: "دورة من: أورفو",
	},
	"p43": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p44": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"p51": {
		ru: "Длительность курса - 18 сентября 2023 - 4 февраля 2024 г.",
		en: "The duration of the course is September 18, 2023 - February 4, 2024.",
		ch: "课程时间为2023年9月18日-2024年2月4日。",
		ar: "مدة الدورة هي 18 سبتمبر 2023 - 4 فبراير 2024.",
	},
	"p52": {
		ru: "Курс от: УрФУ",
		en: "Course from: UrFU",
		ch: "课程来源：UrFU",
		ar: "دورة من: أورفو",
	},
	"p53": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
	},
	"p54": {
		ru: "Подробнее: много текста в лекционных материалах",
		en: "Read more: there is a lot of text in the lecture materials",
		ch: "阅读更多：讲座资料中有很多文字",
		ar: "اقرأ المزيد: هناك الكثير من النصوص في مواد المحاضرة",
	},
	"p55": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p61": {
		ru: "Длительность курса - 11 сентября 2023 - 28 января 2024г.",
		en: "The duration of the course is September 11, 2023 - January 28, 2024.",
		ch: "课程时间为2023年9月11日-2024年1月28日。",
		ar: "مدة الدورة هي 11 سبتمبر 2023 - 28 يناير 2024.",
	},
	"p62": {
		ru: "Курс от: Политех",
		en: "Course from: Polytech",
		ch: "课程来源：Polytech.0000",
		ar: "دورة من: بوليتيك",
	},
	"p63": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p64": {
		ru: "Запись на курс: осуществляется сотрудниками Политеха",
		en: "Registration for the course: carried out by the staff of the Polytechnic",
		ch: "课程注册：由理工学院的工作人员进行",
		ar: "التسجيل للدورة: يقوم بها موظفو البوليتكنيك",
	},
	"p71": {
		ru: "Длительность курса - 4 сентября 2023 - 4 февраля 2024г.",
		en: "The duration of the course is September 4, 2023 - February 4, 2024.",
		ch: "课程持续时间为2023年9月4日-2024年2月4日。",
		ar: "مدة الدورة هي 4 سبتمبر 2023 - 4 فبراير 2024.",
	},
	"p72": {
		ru: "Курс от: УрФУ",
		en: "Course from: UrFU",
		ch: "课程来源：UrFU",
		ar: "دورة من: أورفو",
	},
	"p73": {
		ru: "Сложность курса",
		en: "The complexity of the course",
		ch: "课程的复杂性",
		ar: "تعقيد الدورة",
	},
	"p74": {
		ru: "Запись на курс: самостоятельно",
		en: "Registration for the course: on your own",
		ch: "课程报名：自行报名",
		ar: "التسجيل في الدورة: بنفسك",
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


// Проверка пути страницы сайта
function checkPagePathName() {
	switch (currentPathName) {
        case "/page_course.html":
			currentTexts = courses;
			break;		
		default:
			currentTexts = courses;
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
    document.getElementById('imageCourse1')
    .srcset="img/course/course_slaid_1ch.svg";
    document.getElementById('imageCourse2')
    .srcset="img/course/course_slaid_2ch.svg";
    document.getElementById('imageCourse3')
    .srcset="img/course/course_slaid_3ch.svg";
    document.getElementById('imageCourse4')
    .srcset="img/course/course_slaid_4ch.svg";
    document.getElementById('imageCourse5')
    .srcset="img/course/course_slaid_5ch.svg";

	document.getElementById('imageCourse1-sm')
    .src="img/course/ch/course_slaid_mini_1.svg";
    document.getElementById('imageCourse2-sm')
    .src="img/course/ch/course_slaid_mini_2.svg";
    document.getElementById('imageCourse3-sm')
    .src="img/course/ch/course_slaid_mini_3.svg";
    document.getElementById('imageCourse4-sm')
    .src="img/course/ch/course_slaid_mini_4.svg";
    document.getElementById('imageCourse5-sm')
    .src="img/course/ch/course_slaid_mini_5.svg";

	document.getElementById('openedu1')
    .src="img/course/ch/openedu_slaid_1.svg";
	document.getElementById('openedu2')
    .src="img/course/ch/openedu_slaid_2.svg";
	document.getElementById('openedu3')
    .src="img/course/ch/openedu_slaid_3.svg";
	document.getElementById('openedu4')
    .src="img/course/ch/openedu_slaid_4.svg";
	document.getElementById('openedu5')
    .src="img/course/ch/openedu_slaid_5.svg";
	document.getElementById('exam1')
    .src="img/course/ch/exam_slaid_1.svg";
	document.getElementById('exam2')
    .src="img/course/ch/exam_slaid_2.svg";
	document.getElementById('ulearn1')
    .src="img/course/ch/ulearn1.svg";
	document.getElementById('ulearn2')
    .src="img/course/ch/ulearn2.svg";
	document.getElementById('elearn1')
    .src="img/course/ch/elearn_slaid_1.svg";
	document.getElementById('elearn2')
    .src="img/course/ch/elearn_slaid_2.svg";
	document.getElementById('elearn3')
    .src="img/course/ch/elearn_slaid_3.svg";
	document.getElementById('btn')
    .src="img/course/ch/btn_course_close.svg";
}
  function english(){
	document.getElementById('logotype')
    .srcset="img/en-logo.svg";
	document.getElementById('language12')
    .src="img/en-lang.svg";
    document.getElementById('imageCourse1')
    .srcset="img/course/course_slaid_1en.svg";
    document.getElementById('imageCourse2')
    .srcset="img/course/course_slaid_2en.svg";
    document.getElementById('imageCourse3')
    .srcset="img/course/course_slaid_3en.svg";
    document.getElementById('imageCourse4')
    .srcset="img/course/course_slaid_4en.svg";
    document.getElementById('imageCourse5')
    .srcset="img/course/course_slaid_5en.svg";

	document.getElementById('imageCourse1-sm')
    .src="img/course/eng/course_slaid_mini_1.svg";
    document.getElementById('imageCourse2-sm')
    .src="img/course/eng/course_slaid_mini_2.svg";
    document.getElementById('imageCourse3-sm')
    .src="img/course/eng/course_slaid_mini_3.svg";
    document.getElementById('imageCourse4-sm')
    .src="img/course/eng/course_slaid_mini_4.svg";
    document.getElementById('imageCourse5-sm')
    .src="img/course/eng/course_slaid_mini_5.svg";

	document.getElementById('openedu1')
    .src="img/course/eng/openedu_slaid_1.svg";
	document.getElementById('openedu2')
    .src="img/course/eng/openedu_slaid_2.svg";
	document.getElementById('openedu3')
    .src="img/course/eng/openedu_slaid_3.svg";
	document.getElementById('openedu4')
    .src="img/course/eng/openedu_slaid_4.svg";
	document.getElementById('openedu5')
    .src="img/course/eng/openedu_slaid_5.svg";
	document.getElementById('exam1')
    .src="img/course/eng/exam_slaid_1.svg";
	document.getElementById('exam2')
    .src="img/course/eng/exam_slaid_2.svg";
	document.getElementById('ulearn1')
    .src="img/course/eng/ulearn1.svg";
	document.getElementById('ulearn2')
    .src="img/course/eng/ulearn2.svg";
	document.getElementById('elearn1')
    .src="img/course/eng/elearn_slaid_1.svg";
	document.getElementById('elearn2')
    .src="img/course/eng/elearn_slaid_2.svg";
	document.getElementById('elearn3')
    .src="img/course/eng/elearn_slaid_3.svg";
	document.getElementById('btn')
    .src="img/course/eng/btn_course_close.svg";

  }

  function russian(){
	document.getElementById('logotype')
    .srcset="img/logo_with_text_ru_violet_1.svg";
	document.getElementById('language12')
    .src="img/ru-lang.svg";
    document.getElementById('imageCourse1')
    .srcset="img/course/course_slaid_1ru.svg";
    document.getElementById('imageCourse2')
    .srcset="img/course/course_slaid_2ru.svg";
    document.getElementById('imageCourse3')
    .srcset="img/course/course_slaid_3ru.svg";
    document.getElementById('imageCourse4')
    .srcset="img/course/course_slaid_4ru.svg";
    document.getElementById('imageCourse5')
    .srcset="img/course/course_slaid_5ru.svg";

	document.getElementById('imageCourse1-sm')
    .src="img/course/course_slaid_mini_1.svg";
    document.getElementById('imageCourse2-sm')
    .src="img/course/course_slaid_mini_2.svg";
    document.getElementById('imageCourse3-sm')
    .src="img/course/course_slaid_mini_3.svg";
    document.getElementById('imageCourse4-sm')
    .src="img/course/course_slaid_mini_4.svg";
    document.getElementById('imageCourse5-sm')
    .src="img/course/course_slaid_mini_5.svg";

	document.getElementById('openedu1')
    .src="img/course/openedu/openedu_slaid_1.svg";
	document.getElementById('openedu2')
    .src="img/course/openedu/openedu_slaid_2.svg";
	document.getElementById('openedu3')
    .src="img/course/openedu/openedu_slaid_3.svg";
	document.getElementById('openedu4')
    .src="img/course/openedu/openedu_slaid_4.svg";
	document.getElementById('openedu5')
    .src="img/course/openedu/openedu_slaid_5.svg";
	document.getElementById('exam1')
    .src="img/course/exam/exam_slaid_1.svg";
	document.getElementById('exam2')
    .src="img/course/exam/exam_slaid_2.svg";
	document.getElementById('ulearn1')
    .src="img/course/ulern/ulearn_slaid_1.svg";
	document.getElementById('ulearn2')
    .src="img/course/ulern/ulearn_slaid_2.svg";
	document.getElementById('elearn1')
    .src="img/course/elearn/elearn_slaid_1.svg";
	document.getElementById('elearn2')
    .src="img/course/elearn/elearn_slaid_2.svg";
	document.getElementById('elearn3')
    .src="img/course/elearn/elearn_slaid_3.svg";
	document.getElementById('btn')
    .src="img/course/btn_course_close (1).svg";
  }

  function arabian(){
	document.getElementById('logotype')
    .srcset="img/logo-ar.svg";
	document.getElementById('language12')
    .src="img/ar-lang.svg";
    document.getElementById('imageCourse1')
    .srcset="img/course/ar/course_slaid_1.svg";
    document.getElementById('imageCourse2')
    .srcset="img/course/ar/course_slaid_2.svg";
    document.getElementById('imageCourse3')
    .srcset="img/course/ar/course_slaid_3.svg";
    document.getElementById('imageCourse4')
    .srcset="img/course/ar/course_slaid_4.svg";
    document.getElementById('imageCourse5')
    .srcset="img/course/ar/course_slaid_5.svg";

	document.getElementById('imageCourse1-sm')
    .src="img/course/ar/course_slaid_mini_1.svg";
    document.getElementById('imageCourse2-sm')
    .src="img/course/ar/course_slaid_mini_2.svg";
    document.getElementById('imageCourse3-sm')
    .src="img/course/ar/course_slaid_mini_3.svg";
    document.getElementById('imageCourse4-sm')
    .src="img/course/ar/course_slaid_mini_4.svg";
    document.getElementById('imageCourse5-sm')
    .src="img/course/ar/course_slaid_mini_5.svg";

	document.getElementById('openedu1')
    .src="img/course/ar/openedu_slaid_1.svg";
	document.getElementById('openedu2')
    .src="img/course/ar/openedu_slaid_2.svg";
	document.getElementById('openedu3')
    .src="img/course/ar/openedu_slaid_3.svg";
	document.getElementById('openedu4')
    .src="img/course/ar/openedu_slaid_4.svg";
	document.getElementById('openedu5')
    .src="img/course/ar/openedu_slaid_5.svg";
	document.getElementById('exam1')
    .src="img/course/ar/exam_slaid_1.svg";
	document.getElementById('exam2')
    .src="img/course/ar/exam_slaid_2.svg";
	document.getElementById('ulearn1')
    .src="img/course/ar/ulearn1.svg";
	document.getElementById('ulearn2')
    .src="img/course/ar/ulearn2.svg";
	document.getElementById('elearn1')
    .src="img/course/ar/elearn_slaid_1.svg";
	document.getElementById('elearn2')
    .src="img/course/ar/elearn_slaid_2.svg";
	document.getElementById('elearn3')
    .src="img/course/ar/elearn_slaid_3.svg";
	document.getElementById('btn')
    .src="img/course/ar/btn_course_close.svg";
  }
  