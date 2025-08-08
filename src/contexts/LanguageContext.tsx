import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'en' | 'uk'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
)

const translations = {
    en: {
        // Hero Section
        'hero.title': 'Welcome to Our Digital Solutions',
        'hero.subtitle':
            'We create innovative web experiences that drive business growth and user engagement.',
        'hero.cta': 'Get Started',

        // About Us
        'about.title': 'About Us',
        'about.subtitle':
            "We're a passionate team of creators, innovators, and problem-solvers dedicated to building exceptional digital experiences that drive real business results.",
        'about.story.title': 'Our Story',
        'about.story.p1':
            "Founded with a vision to bridge the gap between innovative technology and practical business solutions, we've been helping companies transform their digital presence for over a decade.",
        'about.story.p2':
            "What started as a small team of passionate developers has grown into a full-service digital agency, but we've never lost sight of our core values: quality, transparency, and genuine partnership with our clients.",
        'about.story.p3':
            "Today, we're proud to have helped hundreds of businesses achieve their goals through thoughtful design, robust development, and strategic digital marketing.",
        'about.team.title': 'Meet Our Team',
        'about.stats.projects': 'Projects Completed',
        'about.stats.satisfaction': 'Client Satisfaction',
        'about.stats.experience': 'Years Experience',
        'about.stats.support': 'Support Available',
        'about.team.member1.role': 'Lead Developer',
        'about.team.member1.bio':
            'John is a seasoned developer with over 10 years of experience in building scalable web applications.',
        'about.team.member2.role': 'UI/UX Designer',
        'about.team.member2.bio':
            'Jane is a creative designer who specializes in crafting intuitive user experiences and stunning visual designs.',
        'about.team.member3.role': 'Project Manager',
        'about.team.member3.bio':
            'Mike is an experienced project manager who ensures that every project runs smoothly and meets client expectations.',

        // Blog Posts
        'blog.title': 'Latest Blog Posts',
        'blog.subtitle':
            'Stay updated with our latest insights and thoughts on technology, design, and business.',
        'blog.post1.title': 'The Future of Minimal Design',
        'blog.post1.description':
            'Exploring how minimalism continues to shape modern interfaces',
        'blog.post1.category': 'Design',
        'blog.post2.title': 'Innovation in Simplicity',
        'blog.post2.description':
            'Why the simplest solution is often the most innovative',
        'blog.post2.category': 'Innovation',
        'blog.post3.title': 'The Power of White Space',
        'blog.post3.description':
            'Understanding the impact of negative space in UI design',
        'blog.post3.category': 'Design',
        'blog.post4.title': 'AI in Modern Technology',
        'blog.post4.description':
            'How artificial intelligence is reshaping our digital landscape',
        'blog.post4.category': 'Technology',
        'blog.post5.title': 'Typography Trends 2025',
        'blog.post5.description':
            'Latest developments in digital typography and font design',
        'blog.post5.category': 'Design',
        'blog.post6.title': 'Blockchain Revolution',
        'blog.post6.description':
            'Understanding the impact of blockchain on modern technology',
        'blog.post6.category': 'Technology',
        'blog.post7.title': 'Design Systems at Scale',
        'blog.post7.description':
            'Building and maintaining design systems for large organizations',
        'blog.post7.category': 'Design',
        'blog.post8.title': 'The Rise of No-Code',
        'blog.post8.description':
            'How no-code platforms are democratizing software development',
        'blog.post8.category': 'Technology',
        'blog.post9.title': 'Future of Web3',
        'blog.post9.description':
            'Exploring the potential of decentralized web technologies',
        'blog.post9.category': 'Web3',

        // Work Highlights
        'work.title': 'Our Work',
        'work.subtitle':
            'Showcasing some of our recent projects and achievements.',
        'work.project1.title': 'E-commerce Platform',
        'work.project1.description':
            'End-to-end development of a modern e-commerce platform with seamless user experience.',
        'work.project2.title': 'Mobile App Design',
        'work.project2.description':
            'Award-winning mobile application design for a healthcare startup.',
        'work.project3.title': 'SaaS Dashboard',
        'work.project3.description':
            'Intuitive SaaS dashboard design that enhances user engagement and productivity.',
        'work.project4.title': 'Brand Identity Development',
        'work.project4.description':
            'Complete brand identity overhaul for a tech startup, including logo, color scheme, and typography.',
        'work.project5.title': 'Interactive Web Experience',
        'work.project5.description':
            'Creation of an interactive web experience that showcases the brand’s story and values.',
        'work.project6.title': 'Custom CRM Solution',
        'work.project6.description':
            'Development of a tailored CRM solution that streamlines client management and improves sales processes.',

        // Testimonials
        'testimonials.title': 'What Our Clients Say',
        'testimonials.subtitle':
            "Don't just take our word for it. Here's what our clients have to say about working with us.",

        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle':
            "Got questions? We've got answers. Find the most common questions about our services below.",
        'faq.q1': 'What services do you offer?',
        'faq.a1':
            'We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, and consulting services. Our team specializes in creating custom solutions tailored to your specific business needs.',
        'faq.q2': 'How long does a typical project take?',
        'faq.a2':
            "Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
        'faq.q3': 'What is your pricing structure?',
        'faq.a3':
            'Our pricing is project-based and depends on requirements, complexity, and timeline. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific needs.',
        'faq.q4': 'Do you provide ongoing support?',
        'faq.a4':
            'Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security monitoring, bug fixes, and technical support to ensure your project continues to perform optimally.',
        'faq.q5': 'Can you work with existing systems?',
        'faq.a5':
            "Absolutely! We have extensive experience integrating with existing systems and platforms. We'll assess your current setup and recommend the best approach for seamless integration.",
        'faq.q6': 'How do we get started?',
        'faq.a6':
            "Getting started is easy! Simply reach out through our contact form or schedule a consultation. We'll discuss your project requirements, provide a proposal, and outline the next steps to bring your vision to life.",

        // Calendar
        'calendar.title': 'Schedule a Meeting',
        'calendar.subtitle':
            'Book a consultation with our team to discuss your project.',
        'form.name': 'Name',
        'form.name.placeholder': 'Your name',
        'form.email': 'Email',
        'form.email.placeholder': 'your.email@example.com',
        'form.subject': 'Subject',
        'form.subject.placeholder': 'What would you like to discuss?',
        'form.message': 'Message',
        'form.message.placeholder':
            'Please provide details about your project or inquiry.',
        'form.submit': 'Submit',

        // Social Links
        'social.title': 'Connect With Us',
        'social.subtitle': 'Follow us on social media and stay connected.',
        'social.clock': 'Mon-Fri: 9am-6pm',

        // Testimonials
        'testimonial.sarah.role': 'Product Manager',
        'testimonial.sarah.content':
            'Working with this team has been transformative for our business. Their expertise and dedication are unmatched.',
        'testimonial.michael.role': 'CEO',
        'testimonial.michael.content':
            'The results exceeded our expectations. Professional, timely, and innovative solutions every step of the way.',
        'testimonial.emily.role': 'Marketing Director',
        'testimonial.emily.content':
            'Outstanding service and attention to detail. They truly understand what it takes to deliver exceptional results.',

        // Footer
        'footer.description':
            'Professional software development, IT services, and security systems for your business.',
        'footer.menu1.title': 'Product',
        'footer.menu1.link1': 'Features',
        'footer.menu1.link2': 'Integrations',
        'footer.menu1.link3': 'Updates',
        'footer.menu1.link5': 'Products',

        'footer.menu2.title': 'Company',
        'footer.menu2.link2': 'News',
        'footer.menu2.link3': 'About Us',
        'footer.menu2.link4': 'FAQ',
        'footer.menu2.link5': 'Contact Us',
    },
    uk: {
        // Hero Section
        'hero.title': 'Ласкаво просимо до наших цифрових рішень',
        'hero.subtitle':
            'Ми створюємо інноваційні веб-рішення, які стимулюють зростання бізнесу та залучення користувачів.',
        'hero.cta': 'Почати',

        // About Us
        'about.title': 'Про нас',
        'about.subtitle':
            'Ми - команда пристрасних творців, новаторів та вирішувачів проблем, присвячених створенню винятковий цифровий досвід, який забезпечує реальні бізнес-результати.',
        'about.story.title': 'Наша історія',
        'about.story.p1':
            "Заснована з баченням об'єднати інноваційні технології та практичні бізнес-рішення, ми допомагаємо компаніям трансформувати їх цифрову присутність вже понад десятиліття.",
        'about.story.p2':
            'Те, що почалося як невелика команда пристрасних розробників, виросло в повноцінне цифрове агентство, але ми ніколи не втрачали наші основні цінності: якість, прозорість та справжнє партнерство з нашими клієнтами.',
        'about.story.p3':
            'Сьогодні ми пишаємося тим, що допомогли сотням підприємств досягти своїх цілей завдяки продуманому дизайну, надійній розробці та стратегічному цифровому маркетингу.',
        'about.team.title': 'Знайомтесь з нашою командою',
        'about.stats.projects': 'Проектів завершено',
        'about.stats.satisfaction': 'Задоволеність клієнтів',
        'about.stats.experience': 'Років досвіду',
        'about.stats.support': 'Підтримка доступна',
        'about.team.member1.role': 'Головний розробник',
        'about.team.member1.bio':
            'Джон - досвідчений розробник з понад 10-річним досвідом у створенні масштабованих веб-додатків.',
        'about.team.member2.role': 'UI/UX дизайнер',
        'about.team.member2.bio':
            'Джейн - креативний дизайнер, який спеціалізується на створенні інтуїтивно зрозумілого користувацького досвіду та вражаючого візуального дизайну.',
        'about.team.member3.role': 'Менеджер проектів',
        'about.team.member3.bio':
            'Майк - досвідчений менеджер проектів, який забезпечує безперебійну роботу кожного проекту та відповідність очікуванням клієнтів.',

        // Blog Posts
        'blog.title': 'Останні публікації блогу',
        'blog.subtitle':
            'Будьте в курсі наших останніх ідей та думок про технології, дизайн та бізнес.',
        'blog.post1.title': 'Майбутнє мінімалістичного дизайну',
        'blog.post1.description':
            'Дослідження того, як мінімалізм продовжує формувати сучасні інтерфейси',
        'blog.post1.category': 'Дизайн',
        'blog.post2.title': 'Інновації в простоті',
        'blog.post2.description':
            'Чому найпростіше рішення часто є найінноваційнішим',
        'blog.post2.category': 'Інновації',
        'blog.post3.title': 'Сила білого простору',
        'blog.post3.description':
            'Розуміння впливу негативного простору в дизайні інтерфейсу',
        'blog.post3.category': 'Дизайн',
        'blog.post4.title': 'Штучний інтелект у сучасних технологіях',
        'blog.post4.description':
            'Як штучний інтелект змінює наш цифровий ландшафт',
        'blog.post4.category': 'Технології',
        'blog.post5.title': 'Тренди типографіки 2025',
        'blog.post5.description':
            'Останні розробки в цифровій типографії та дизайні шрифтів',
        'blog.post5.category': 'Дизайн',
        'blog.post6.title': 'Революція блокчейн',
        'blog.post6.description':
            'Розуміння впливу блокчейн на сучасні технології',
        'blog.post6.category': 'Технології',
        'blog.post7.title': 'Системи дизайну в масштабах',
        'blog.post7.description':
            'Створення та підтримка систем дизайну для великих організацій',
        'blog.post7.category': 'Дизайн',
        'blog.post8.title': 'Зростання безкодових платформ',
        'blog.post8.description':
            'Як безкодові платформи демократизують розробку програмного забезпечення',
        'blog.post8.category': 'Технології',
        'blog.post9.title': 'Майбутнє Web3',
        'blog.post9.description':
            'Дослідження потенціалу децентралізованих веб-технологій',
        'blog.post9.category': 'Web3',

        // Work Highlights
        'work.title': 'Наша робота',
        'work.subtitle':
            'Демонструємо деякі з наших останніх проектів та досягнень.',
        'work.project1.title': 'Платформа електронної комерції',
        'work.project1.description':
            'Розробка кінцевого рішення для сучасної платформи електронної комерції з безшовним користувацьким досвідом.',
        'work.project2.title': 'Дизайн мобільного додатку',
        'work.project2.description':
            'Нагороджений дизайн мобільного додатку для стартапу в сфері охорони здоров’я.',
        'work.project3.title': 'Панель SaaS',
        'work.project3.description':
            'Інтуїтивний дизайн панелі SaaS, який підвищує залучення користувачів та продуктивність.',
        'work.project4.title': 'Розробка ідентичності бренду',
        'work.project4.description':
            'Повна переробка ідентичності бренду для стартапу в сфері технологій, включаючи логотип, кольорову схему та типографію.',
        'work.project5.title': 'Інтерактивний веб-досвід',
        'work.project5.description':
            'Створення інтерактивного веб-досвіду, який демонструє історію та цінності бренду.',
        'work.project6.title': 'Індивідуальне CRM-рішення',
        'work.project6.description':
            'Розробка індивідуального CRM-рішення, яке оптимізує управління клієнтами та покращує процеси продажів.',

        // Testimonials
        'testimonials.title': 'Що кажуть наші клієнти',
        'testimonials.subtitle':
            'Не вірте нам на слово. Ось що кажуть наші клієнти про роботу з нами.',

        // FAQ
        'faq.title': 'Часті запитання',
        'faq.subtitle':
            'Є питання? У нас є відповіді. Знайдіть найпоширеніші питання про наші послуги нижче.',
        'faq.q1': 'Які послуги ви надаєте?',
        'faq.a1':
            'Ми пропонуємо широкий спектр цифрових послуг, включаючи веб-розробку, розробку мобільних додатків, цифровий маркетинг та консалтингові послуги. Наша команда спеціалізується на створенні індивідуальних рішень, адаптованих до ваших конкретних бізнес-потреб.',
        'faq.q2': 'Скільки часу зазвичай займає проект?',
        'faq.a2':
            'Терміни проекту різняться залежно від обсягу та складності. Прості веб-сайти зазвичай займають 2-4 тижні, а складні додатки можуть зайняти 3-6 місяців. Ми надамо детальний графік під час первинної консультації.',
        'faq.q3': 'Яка ваша структура ціноутворення?',
        'faq.a3':
            "Наше ціноутворення базується на проекті та залежить від вимог, складності та термінів. Ми пропонуємо прозоре ціноутворення без прихованих комісій. Зв'яжіться з нами для детального розрахунку, адаптованого до ваших конкретних потреб.",
        'faq.q4': 'Чи надаєте ви постійну підтримку?',
        'faq.a4':
            'Так, ми пропонуємо комплексні пакети обслуговування та підтримки. Це включає регулярні оновлення, моніторинг безпеки, виправлення помилок та технічну підтримку для забезпечення оптимальної роботи вашого проекту.',
        'faq.q5': 'Чи можете ви працювати з існуючими системами?',
        'faq.a5':
            'Звичайно! У нас є великий досвід інтеграції з існуючими системами та платформами. Ми оцінимо ваше поточне налаштування та порекомендуємо найкращий підхід для безшовної інтеграції.',
        'faq.q6': 'Як нам почати?',
        'faq.a6':
            "Почати легко! Просто зв'яжіться з нами через контактну форму або запишіться на консультацію. Ми обговоримо вимоги до вашого проекту, надамо пропозицію та окреслимо наступні кроки для втілення вашого бачення в життя.",

        // Calendar
        'calendar.title': 'Запланувати зустріч',
        'calendar.subtitle':
            'Забронюйте консультацію з нашою командою для обговорення вашого проекту.',
        'form.name': 'Ім’я',
        'form.name.placeholder': 'Ваше ім’я',
        'form.email': 'Електронна пошта',
        'form.email.placeholder': 'your.email@example.com',
        'form.subject': 'Тема',
        'form.subject.placeholder': 'Про що ви хочете поговорити?',
        'form.message': 'Повідомлення',
        'form.message.placeholder':
            'Будь ласка, надайте деталі про ваш проект або запитання.',
        'form.submit': 'Надіслати',

        // Social Links
        'social.title': "З'єднайтесь з нами",
        'social.subtitle':
            "Слідкуйте за нами в соціальних мережах та залишайтесь на зв'язку.",
        'social.clock': 'Пн-Пт: 9:00-18:00',

        // Testimonials
        'testimonial.sarah.role': 'Продакт-менеджер',
        'testimonial.sarah.content':
            'Робота з цією командою стала трансформаційною для нашого бізнесу. Їх експертиза та віддача неперевершені.',
        'testimonial.michael.role': 'Генеральний директор',
        'testimonial.michael.content':
            'Результати перевершили наші очікування. Професійні, своєчасні та інноваційні рішення на кожному кроці.',
        'testimonial.emily.role': 'Директор з маркетингу',
        'testimonial.emily.content':
            'Відмінне обслуговування та увага до деталей. Вони справді розуміють, що потрібно для досягнення виняткових результатів.',

        // Footer
        'footer.description':
            'Професійні послуги з розробки програмного забезпечення, інформаційні технології та системи безпеки для вашого бізнесу.',

        'footer.menu1.title': 'Продукт',
        'footer.menu1.link1': 'Особливості',
        'footer.menu1.link2': 'Інтеграції',
        'footer.menu1.link3': 'Оновлення',
        'footer.menu1.link4': 'Дорожня карта',
        'footer.menu1.link5': 'Продукти',

        'footer.menu2.title': 'Компанія',
        'footer.menu2.link1': 'Головна',
        'footer.menu2.link2': 'Новини',
        'footer.menu2.link3': 'Про нас',
        'footer.menu2.link4': 'FAQ',
        'footer.menu2.link5': 'Контакти',
    },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState<Language>('uk')

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language
        if (
            savedLanguage &&
            (savedLanguage === 'en' || savedLanguage === 'uk')
        ) {
            setLanguage(savedLanguage)
        }
    }, [])

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang)
        localStorage.setItem('language', lang)
    }

    const t = (key: string): string => {
        return translations[language][key] || key
    }

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage: handleSetLanguage, t }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
