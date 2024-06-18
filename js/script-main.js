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
	"curriculum": {
		ru: "Частые вопросы",
		en: "FAQ",
		ch: "常见问题",
		ar: "الأسئلة الشائعة",
	},
	"groups": {
		ru: "Полезные ссылки",
		en: "Useful links",
		ch: "有用的连结",
		ar: "روابط مفيدة",
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
		ru: "Полезные ссылки",
		en: "Useful links",
		ch: "有用的连结",
		ar: "روابط مفيدة",
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
		ru: "Полезные ссылки",
		en: "Useful links",
		ch: "有用的连结",
		ar: "روابط مفيدة",
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
		ru: "Полезные ссылки",
		en: "Useful links",
		ch: "有用的连结",
		ar: "روابط مفيدة",
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
		case "/page_course.html":
			currentTexts = courses;
			break;	
        case "/page_exam.html":
			currentTexts = exam;
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
	document.getElementById('logotype')
    .srcset="img/en-logo.svg";
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
	document.getElementById('logotype')
    .srcset="img/logo_with_text_ru_violet_1.svg";
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

  function arabian(){
	document.getElementById('logotype')
    .srcset="img/logo-ar.svg";
	document.getElementById('language12')
    .src="img/ar-lang.svg";
    document.getElementById('myImage1')
    .srcset="img/main_slider/slaid1-ar.svg";
    document.getElementById('myImage2')
    .srcset="img/main_slider/slaid2-ar.svg";
    document.getElementById('myImage3')
    .srcset="img/main_slider/slaid3-ar.svg";
	document.getElementById('myImage1-sm')
	.src="img/main_slider/ar/slaid1_mini.svg";
    document.getElementById('myImage2-sm')
    .src="img/main_slider/ar/slaid2_mini.svg";
    document.getElementById('myImage3-sm')
    .src="img/main_slider/ar/slaid3_mini.svg";
  }
  