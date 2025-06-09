import car from "../assets/image/home/car.svg"
import leaf from "../assets/image/home/leaf.svg"
import message from "../assets/image/home/message.svg"
import video_container from "../assets/image/home/Video container.png"
import smoothie from "../assets/image/home/smoothieImage.png"
import flower_icon from "../assets/image/home/flowerIcon.svg"
import category_card from "../assets/image/home/Category card.png"
import category_card_2 from "../assets/image/home/Category card 2.png"
import category_card_3 from "../assets/image/home/Category card 3.png"
import card from "../assets/image/AboutUs/Card.png"
import avatar from "../assets/image/home/Avatar.png"
import InfiniteScrollingText from "../components/InfiniteScrollingText.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import arrow_up from "../assets/image/recipes/arrow_up.svg"
import arrow_down from "../assets/image/recipes/arrow_down.svg"
import section_form from "../assets/image/home/Section form.png"
import ExpandableMenu from "../components/ExpandableMenu.jsx";
import Arrow from "../assets/image/contacts/Arrow.svg";
import useDeviceDetection from "../hooks/useDeviceDetection.js";

export default function Home() {
    const isMobile = useDeviceDetection();
    const reviews = [
        {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }, {
            text: "«Доброго дня! Витграсс стал моим утренним ритуалом...» «Доброго дня! Витграсс стал моим утренним ритуалом...»",
            author: "Игорь Азарян",
            avatarSrc: avatar
        }
    ];
    return (
        <>
            <div
                className={" ph:pt-16 lg:pt-24 2xl:pt-56 flex flex-col items-center bg-deep-dark bg-opacity-5 space-y-10"}>
                <div className="flex ph:flex-col ph:space-y-2 md:flex-row md:space-x-10 md:text-lg">
                    <div className="flex flex-row font-bold space-x-3">
                        <img src={car} alt="car"/>
                        <p>Доставка до 2 дней</p>
                    </div>
                    <div className="flex flex-row font-bold space-x-3">
                        <img src={leaf} alt="car"/>
                        <p>Натуральные ингредиенты</p>
                    </div>
                    <div className="flex flex-row font-bold space-x-3">
                        <img src={message} alt="car"/>
                        <p>100+ Довольных клиентов</p>
                    </div>
                </div>
                <div className="flex flex-col items-center ph:text-4xl ph:space-y-1 lg:text-5xl lg:space-y-3">
                    <h1>Открой для себя</h1>
                    <h1>здоровье с Vitalis-life!</h1>
                </div>
                <div
                    className={"flex flex-col text-center text-deep-dark text-opacity-50 text-xl ph:max-w-[90vw] lg:max-w-[45vw] 2xl:max-w-[30vw]"}>
                    <p>Мы предлагаем натуральные напитки и ингредиенты, которые укрепляют
                        иммунную систему и помогают в борьбе с болезнями. Откройте для себя
                        наш ассортимент и начните путь к здоровью уже сегодня!
                    </p>
                </div>
                <div
                    className={"flex ph:flex-col justify-center ph:space-y-3 md:flex-row md:space-x-10 ph:w-full px-4"}>
                    <button className={"bg-avocado rounded-lg md:w-24 md:h-11 ph:h-14"}>
                        Купить
                    </button>
                    <button className={"border rounded-lg md:w-24 md:h-11 ph:h-14 "}>
                        Кто мы?
                    </button>
                </div>
                <div className={"ph:relative flex md:flex-row md:space-x-10 ph:justify-center"}>
                    <img
                        className={" ph:border-[2vw] md:border-[0.7vw] border-white rounded-3xl ph:w-96 ph:h-auto md:w-[70vw] md:h-auto"}
                        src={video_container} alt="video_container"/>
                    {/*<button*/}
                    {/*    className={"ph:absolute left-72 bottom-20 bg-avocado text-deep-dark text-opacity-75 2xl:w-28 2xl:h-28 ph:w-24 ph:h-24 rounded-[20vw] mt-32"}>*/}
                    {/*    Купить*/}
                    {/*</button>*/}
                </div>

                <InfiniteScrollingText
                    text={"СОКИ • ПРАВИЛЬНОЕ ПИТАНИЕ • ИМУННЫЕ НАПИТКИ • СМУЗИ"}
                    textSize="text-[2vw]"
                    backgroundSize={"p-6"}
                    speedPerChar={0.4}
                    background={true}
                />
            </div>
            <div className={"p-10 md:px-28"}>
                <div className={"flex ph:space-y-5 ph:flex-col md:flex-row md:justify-between"}>
                    <h1 className={"ph:text-2xl md:text-4xl"}>Почему мы?</h1>
                    <div
                        className={"flex flex-col text-deep-dark text-opacity-75 ph:max-w-[85vw] lg:text-xl lg:max-w-[51vw] 2xl:text-2xl 2xl:max-w-[43vw]"}>
                        <p>В Vitalis-life мы гордимся тем, что предлагаем продукты, которые не только
                            вкусные, но и полезные. Наши категории включают напитки для укрепления
                            иммунитета и разнообразные смузи, каждый из которых создан с использованием
                            натуральных ингредиентов.

                        </p>

                    </div>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-col space-y-5 pt-24"}>
                        <div
                            className={"flex flex-row items-center font-bold ph:text-xl lg:text-6xl 2xl:text-7xl space-x-7 italic"}>
                            <h1>СИЛА В КАЖДОМ РОСТКЕ</h1>
                            <img className={"ph:w-28 ph:h-auto md:w-72 md:h-auto"} src={smoothie} alt="smoothie"/>
                        </div>
                        <div
                            className={"flex flex-row items-center font-bold ph:text-xl lg:text-6xl 2xl:text-7xl space-x-7 italic md:pl-40 text-avocado"}>
                            <img className={"ph:w-10 ph:h-auto md:w-28 md:h-auto"} src={flower_icon} alt="flower_icon"/>
                            <h1>ЭНЕРГИЯ В КАЖДОМ ГЛОТКЕ</h1>

                        </div>
                    </div>

                    {/*
                    Тут будет выгрузка карточек с товарами*/
                    }
                    <div className="flex ph:flex-col ph:space-y-2 md:flex-row md:space-x-7 pt-24">
                        <div className="relative inline-block">
                            <img
                                src={category_card}
                                alt="Category"
                                className="block w-full h-auto"
                            />

                            {/* Текст в левом верхнем углу */}
                            <div className="absolute top-7 left-10">
                                <h1 className="text-3xl font-bold ">Соки из ростков</h1>
                                <h1 className="text-3xl font-bold">и корней пшеницы</h1>
                                <p className="text-lg mt-1 text-deep-dark text-opacity-75">Укрепление здоровья</p>
                            </div>

                            {/* Кнопка в левом нижнем углу */}
                            <button
                                className="absolute bottom-6 left-10 bg-black bg-opacity-20 hover:bg-opacity-30 w-28 h-11 rounded-lg transition-all">
                                Смотреть
                            </button>
                        </div>

                        <div className="relative inline-block">
                            <img
                                src={category_card_2}
                                alt="Category"
                                className="block w-full h-auto"
                            />

                            {/* Текст в левом верхнем углу */}
                            <div className="absolute top-7 left-10">
                                <h1 className="text-3xl font-bold ">Топпинги</h1>
                                <p className="text-lg mt-1 text-deep-dark text-opacity-75">Разнообразие вкусов</p>
                            </div>

                            {/* Кнопка в левом нижнем углу */}
                            <button
                                className="absolute bottom-6 left-10 bg-black bg-opacity-20 hover:bg-opacity-30 w-28 h-11 rounded-lg transition-all">
                                Смотреть
                            </button>
                        </div>
                        <div className="relative inline-block">
                            <img
                                src={category_card_3}
                                alt="Category"
                                className="block w-full h-auto"
                            />

                            {/* Текст в левом верхнем углу */}
                            <div className="absolute top-7 left-10">
                                <h1 className="text-3xl font-bold ">Смузи</h1>
                                <p className="text-lg mt-1 text-deep-dark text-opacity-75">Расслабление и здоровье</p>
                            </div>

                            {/* Кнопка в левом нижнем углу */}
                            <button
                                className="absolute bottom-6 left-10 bg-black bg-opacity-20 hover:bg-opacity-30 w-28 h-11 rounded-lg transition-all">
                                Смотреть
                            </button>
                        </div>
                    </div>
                    <div className={"flex ph:flex-col md:flex-row ph:pt-10 md:pt-24 space-x-16"}>
                        {isMobile ? (
                            <>
                                <div className={"flex flex-col space-y-7 "}>
                                    <h1 className={"2xl:text-5xl lg:text-4xl font-medium "}>История Vitalis-life</h1>
                                    <img className={" h-auto"} src={card} alt="card"/>
                                    <p className={" 2xl:text-2xl lg:text-xl text-deep-dark text-opacity-75 "}>Каждый
                                        продукт
                                        Vitalis-life
                                        создан из
                                        тщательно подобранных натуральных ингредиентов.
                                        Мы верим в силу природы и стремимся обеспечить Вас самыми полезными элементами
                                        для поддержания здоровья. Откройте для себя натуральные
                                        решения для улучшения самочувствия.</p>
                                </div>

                            </>
                        ) : (
                            <>
                                <div className={"flex flex-col space-y-7 max-w-[25vw]"}>
                                    <h1 className={"2xl:text-5xl lg:text-4xl font-medium "}>История Vitalis-life</h1>
                                    <p className={" 2xl:text-2xl lg:text-xl text-deep-dark text-opacity-75 "}>Каждый
                                        продукт
                                        Vitalis-life
                                        создан из
                                        тщательно подобранных натуральных ингредиентов.
                                        Мы верим в силу природы и стремимся обеспечить Вас самыми полезными элементами
                                        для поддержания здоровья. Откройте для себя натуральные
                                        решения для улучшения самочувствия.</p>
                                </div>
                                <img className={"w-[45vw] h-auto"} src={card} alt="card"/>
                            </>
                        )}
                    </div>
                </div>

            </div>
            <div className="px-4 lg:px-16 2xl:px-44 bg-deep-dark bg-opacity-5 relative">
                {/*<h1 className="pt-12 lg:pt-16 2xl:pt-24 text-2xl lg:text-3xl 2xl:text-3xl text-center lg:text-left">Наши*/}
                {/*    отзывы</h1>*/}

                {/* Основной контейнер с отзывами */}
                {/*<div className="relative">*/}
                {/*    <div*/}
                {/*        className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-x-8 lg:gap-y-8 xl:gap-x-12 xl:gap-y-10 2xl:gap-x-16 mt-6 lg:mt-9 pb-12">*/}
                {/*        {reviews.map((review, index) => (*/}
                {/*            <ReviewCard*/}
                {/*                key={index}*/}
                {/*                text={review.text}*/}
                {/*                author={review.author}*/}
                {/*                avatarSrc={review.avatarSrc}*/}
                {/*            />*/}
                {/*        ))}*/}
                {/*    </div>*/}

                {/*    /!* Эффект тумана *!/*/}
                {/*    /!*<div*!/*/}
                {/*    /!*    className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[rgba(245,245,245,0.9)] to-transparent pointer-events-none mix-blend-overlay"></div>*!/*/}
                {/*</div>*/}
                <div className={"flex ph:flex-col md:flex-row md:justify-around pt-24"}>
                    <div className={"flex flex-col space-y-5 md:max-w-[45vw]"}>
                        <h1 className={"text-3xl"}>Часто задаваемые вопросы</h1>
                        <p className={"text-deep-dark text-opacity-75 text-lg"}>Здесь вы найдете ответы на самые
                            популярные вопросы о нашем продукте.
                            Узнайте больше, чтобы эффективно использовать всё, что мы предлагаем!</p>
                    </div>
                    <div className={"flex flex-col space-y-2 ph:pt-10 ph:space-y-5"}>
                        <ExpandableMenu
                            title="Как правильно употреблять сок из ростков и корней пшеницы?"
                            content={`Здоровому человеку достаточно 30 мл. сока ростков пшеницы или корней пшеницы (1 баночка) в день,
                             детям до 12 лет - 15 мл. При желании, через месяц после адаптации организма, Вы можете смешивать 30 мл.
                              сока ростков пшеницы с 30 мл. соком корней пшеницы. Детям до 12 лет не рекомендуется превышать объема 15 мл.
                               В период лечения заболеваний взрослому человеку рекомендуется принимать сок ростков пшеницы 30 мл. дважды в день. Для лечения раковых заболеваний и в период химиотерапии,
                                сок из ростков пшеницы 30 мл. принимается три раза в день.В одной порции 30 мл. Витграсса столько же полезных веществ, сколько их в 1,5-2 кг. свежих овощей фруктов и зелени. Напиток обладает тонизирующим эффектом, поэтому его надо пить в первой половине дня. Желательно пить его до завтрака за 15-20 мин., но не воспрещается после приема пищи через 1,5-2 ч.,
                                 выбирайте вариант по ощущению комфорта для организма. Свежевыжатый сок подвергается быстрой шоковой заморозке, при таком методе 
                                 он сохраняет абсолютно все свои полезные свойства. Размораживать сок необходимо естественным способом, нельзя разогревать в микроволновой печи.
                                 ##Способы разморозки:## 
                                 Самый эффективный способ разморозки, это медленная разморозка, когда вы оставляете с вечера 
                                 замороженный сок из ростков и корней пшеницы в холодильнике. 
                                 Рекомендуем залить соусник с соком  теплой водой комнатной температуры. После того как сок растает,
                                  раскройте соусник и разбавьте в стакане теплой водой или соком, можно пить сок в концентрированном виде, либо добавить топпинг. Откройте соусник и опустите замороженный сок в стакан с теплой водой комнатной температуры, периодически помешивайте деревянной палочкой до полной разморозки. Употребить не позднее 10 мин. после размораживания и разведения. 
                                  Исключите контакт сока с металлом. Перемешивать сок рекомендуется деревянной палочкой, нужное количество Вы найдете в Вашем заказе.
`}
                            arrowUp={arrow_up}
                            arrowDown={arrow_down}
                        />

                        <ExpandableMenu
                            title="Как правильно хранить сок из ростков и корней пшеницы?"
                            content={`Сок из ростков и корней пшеницы необходимо хранить в морозильной камере, при температуре -18С.
                         Срок годности сока из ростков и корней пшеницы в морозильной камере не более 12 мес.
                          без повторного замораживания. 
`}
                            arrowUp={arrow_up}
                            arrowDown={arrow_down}
                        />

                        <ExpandableMenu
                            title="Как правильно употреблять топпинг?"
                            content={`Топпинги предназначены для добавления их в соки из ростков и корней пшеницы для добавления вкусовых оттенков. Также Вы можете употреблять их как самостоятельный продукт. Топпинг подвергается быстрой шоковой заморозке, при таком методе он сохраняет все свои полезные свойства.
                            Размораживать топпинг необходимо естественным способом, нельзя разогревать в микроволновой печи.
                            ##Способы разморозки:##
                            Самый эффективный способ разморозки, это медленная разморозка, когда вы оставляете с вечера замороженный топпинг в холодильнике. Рекомендуем залить соусник с топпингом теплой водой комнатной температуры. После того как он растает, раскройте соусник и разбавьте в стакане теплой водой или добавьте его к соку из ростков и корней пшеницы, можно пить топпинг в концентрированном виде. Откройте соусник и опустите топпинг в стакан с теплой водой комнатной температуры, периодически помешивайте деревянной палочкой до полной разморозки. 
                             Употребить не позднее 10 мин. после размораживания и разведения. Исключите контакт сока с металлом. 
                             Перемешивать топпинг рекомендуется деревянной палочкой, нужное количество Вы найдете в Вашем заказе.
`}
                            arrowUp={arrow_up}
                            arrowDown={arrow_down}
                        />
                        <ExpandableMenu
                            title="Как правильно хранить топпинг?"
                            content={`Топпинг необходимо хранить в морозильной камере, при температуре -18С. Срок годности топпинга в морозильной камере не более 12 мес. без повторного замораживания. 

`}
                            arrowUp={arrow_up}
                            arrowDown={arrow_down}
                        />
                        <ExpandableMenu
                            title="Как правильно употреблять смузи?"
                            content={`Смузи 300 мл. на основе семян чиа и семян льна являются легким и полезным приемом пищи во время детокс-программ, желания обрести крепкое здоровье, стройность, омолодить организм и напитать его полезными веществами. Смузи удобно взять с собой. Перед употреблением просто хорошо встряхните, т.к. это густой напиток из фруктов, ягод, овощей, зелени, измельченных и взбитых в блендере до однородной массы. Смузи подвергается быстрой шоковой заморозке, при таком методе сохраняются все полезные свойства. Размораживать смузи необходимо естественным способом, нельзя разогревать в микроволновой печи.
                            ##Способы разморозки:##
                            Самый эффективный способ разморозки, это медленная разморозка, когда вы оставляете с вечера замороженный смузи в холодильнике. Рекомендуем залить смузи теплой водой комнатной температуры.
                            Употребить в течении 2-3 ч. после размораживания. Также после размораживания Вы можете хранить в холодильнике при температуре от 0°С до +6°, срок хранения составляет 72 ч. 
                            После вскрытия упаковки хранить при температуре от 0°С до +6°С не более суток.
                            Избегайте попадания прямых солнечных лучей.
 

`}
                            arrowUp={arrow_up}
                            arrowDown={arrow_down}
                        />
                        <ExpandableMenu
                            title="Как правильно хранить смузи?"
                            content={`Смузи необходимо хранить в морозильной камере, при температуре -18С. Срок годности смузи в морозильной камере не более 12 мес. без повторного замораживания. 
                            После размораживания хранить в холодильнике
                            при температуре от 0°С до +6°, срок хранения составляет 72 ч. 
                            После вскрытия упаковки хранить при температуре от 0°С до +6°С не более суток.
 

`}
                            arrowUp={arrow_up}
                            arrowDown={arrow_down}
                        />
                    </div>

                </div>
                <div className="relative pt-16 ph:pb-96 md:pb-0"> {/* Фиксированная высота вместо pt-24 */}
                    <img
                        src={section_form}
                        alt="Фоновая картинка"
                        className="w-full h-full object-cover" /* Заполняем весь контейнер */
                    />

                    {/* Центрирующий контейнер */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        {/* Текстовый блок */}
                        <div className="text-center px-4 mb-8 w-full max-w-2xl">
                            <h2 className="text-3xl md:text-5xl ph:text-base font-bold">Остались вопросы?</h2>
                            <p className="mt-4 md:mt-6 text-base ph:max-w-[56vw] md:text-lg text-opacity-80 2xl:max-w-[25vw] lg:max-w-[30vw] mx-auto">
                                Оставьте ваши контакты и мы свяжемся с вами в ближайшее время, чтобы обсудить все
                                нюансы.
                            </p>
                        </div>

                        {/* Блоки контактов */}
                        <div className="flex flex-col md:flex-row gap-4 w-full px-4 justify-center max-w-4xl">
                            {/* Email */}
                            <div
                                className="flex justify-between items-center p-4 border border-opacity-30 bg-opacity-10 rounded-lg md:w-[25vw] w-full hover:bg-opacity-20 transition">
                                <div className="flex flex-col min-w-0">
                                    <p className="text-sm text-opacity-70">Эл.почта</p>
                                    <a
                                        href="mailto:vitalis-life.rus@mail.ru"
                                        className="text-lg truncate hover:underline"
                                    >
                                        vitalis-life.rus@mail.ru
                                    </a>
                                </div>
                                <div>
                                    <img className="w-5 h-5" src={Arrow} alt="arrow"/>
                                </div>
                            </div>

                            {/* Телефон */}
                            <div
                                className="flex justify-between items-center p-4 border border-opacity-30 bg-opacity-10 rounded-lg md:w-[25vw] w-full hover:bg-opacity-20 transition">
                                <div className="flex flex-col min-w-0">
                                    <p className="text-sm text-opacity-70">Контактный телефон</p>
                                    <a
                                        href="tel:+79253337707"
                                        className="text-lg truncate hover:underline"
                                    >
                                        +7 (925) 333-77-07
                                    </a>
                                </div>
                                <div>
                                    <img className="w-5 h-5" src={Arrow} alt="arrow"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}