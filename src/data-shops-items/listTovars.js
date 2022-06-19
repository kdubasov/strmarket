const listTovars = {
    tovar1:{
      nazvanie: 'АККУМУЛЯТОРНАЯ ДРЕЛЬ-ШУРУПОВЕРТ DEWALT DCD777D2T',
      price:15890,
      opisanie: 'Шуруповерт аккумуляторный DeWalt DCD777D2T средней и малой мощности подойдет для домашнего ремонта. Бесщеточный двигатель медленно изнашивается из-за отсутствия трения на щетках. Li-Ion блок питания дольше держит заряд и не снижает свою емкость. ',
      nalichie: 'dostupno',
      image: '/images/tovars-images/t001.jpeg',
    },
    tovar2:{
        nazvanie: 'ЛОБЗИК REDVERG BASIC JS450',
        price:1590,
        opisanie: 'Лобзик RedVerg Basic JS450 является бюджетным вариантом инструмента, предназначенным для периодического выполнения несложных работ. Его основной аудиторией являются домашние мастера и представители бизнеса, для которых распилочные мероприятия не являются основной сферой деятельности.',
        nalichie: 'nedostupno',
        image: '/images/tovars-images/t002.jpg',
    },
    tovar3:{
        nazvanie: 'ЛОБЗИК ИНТЕРСКОЛ МП-55/500Э',
        price:2980,
        opisanie: 'Лобзик ИНТЕРСКОЛ МП-55/500Э предназначен для домашних мастеров и нерегулярного выполнения задач по распиловке материалов. Он является самым легким и компактным в категории. Этот инструмент не вызывает у мастера усталости. С его помощью вы сможете периодически выполнять несложную работу.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t003.jpg',
    },
    tovar4:{
        nazvanie: 'ПЕРФОРАТОР REDVERG BASIC RH2-22',
        price:2990,
        opisanie: 'Недорогой перфоратор RedVerg Basic RH2-22 предназначен для сверления бетона или кирпича. В режиме дрели он также может использоваться при работе с металлом и деревом. У инструмента удобная эргономичная рукоятка. На ней расположена большая клавиша включения, которую можно нажимать одним или двумя пальцами.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t004.jpg',
    },
    tovar5:{
        nazvanie: 'ЗАКЛЕПОЧНИК АККУМУЛЯТОРНЫЙ MAKITA DRV150Z (Б/АКК,Б/ЗУ)',
        price:61189,
        opisanie: 'Заклепочник аккумуляторный Makita DRV150Z (б/акк,б/зу) имеет эргономичную конструкцию, удобную рукоять и большую пусковую клавишу для комфортной работы. Питается от литий-ионного аккумулятора с напряжением 18 В. Аккумуляторная технология позволяет применять оборудование в любой локации вне зависимости от расположения электро розетки и длины сетевого провода.',
        nalichie: 'nedostupno',
        image: '/images/tovars-images/t005.jpg',
    },
    tovar6:{
        nazvanie: 'СТЕПЛЕР АККУМУЛЯТОРНЫЙ MAKITA DST112Z (Б/АКК,Б/ЗУ)',
        price:21890,
        opisanie: 'Степлер аккумуляторный Makita DST112Z (б/акк,б/зу) удобный в эксплуатации инструмент, который питается от литий-ионной аккумуляторной батареи с напряжением 18 В. Может использоваться в любой локации и не зависит от расположения сетевой розетки и длины электрического провода.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t006.jpg',
    },
    tovar7:{
        nazvanie: 'ПИЛА МОНТАЖНАЯ АККУМУЛЯТОРНАЯ MAKITA DLW140Z (Б/АКК,Б/ЗУ)',
        price:33099,
        opisanie: 'Пила монтажная аккумуляторная Makita DLW140Z (б/акк,б/зу) с удобной D-образной ручкой и широкой клавишей пуска, работает на основе двух литий-ионных аккумуляторов с напряжением 18 В каждый. Общее напряжение 36 В. Число оборотов 3800 об/мин. Инструмент оснащен электронной защитой привода от перегрузки со шкалой индикации.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t007.jpg',
    },
    tovar8:{
        nazvanie: 'ПАЯЛЬНИК ГАЗОВЫЙ DREMEL VERSATIP (2000-6)',
        price:3605,
        opisanie: 'Один инструмент для 6 разных операций: запаивание, термоусадка, расплавление, горячая резка,  выжигание (пирография) и удаление краски.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t008.jpg',
    },
    tovar9:{
        nazvanie: 'МАШИНА ОТРЕЗНАЯ MAKITA 4112HS',
        price:41390,
        opisanie: 'Совершенная система вентиляции, усиленная пылезащита, металлический корпус редуктора - все это свидетельствует о том, что угловая шлифовальная машина Макита 4112HS рассчитана на интенсивную эксплуатацию при экстремальных нагрузках и не боится перегревов.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t009.jpg',
    },
    tovar10:{
        nazvanie: 'РАДИОПРИЕМНИК DEWALT DCR020',
        price:18490,
        opisanie: 'Радиоприемник DeWalt DCR020 предназначен для использования в любых погодных условиях, также данная модель имеет крепкий корпус, которому не страшны падения и вода.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t010.jpg',
    },
    tovar11:{
        nazvanie: 'ШТИФТОЗАБИВАТЕЛЬ MAKITA DFN350ZJ(Б/АКК,Б/ЗУ)',
        price:31390,
        opisanie: 'Гвоздезабиватель Makita DFN350ZJ без шланга. Встроенный компрессор при забивании гвоздей обеспечивает такие же возможности, что и пневматический гвоздезабиватель. Подходит для этапа финишной обработки и обшивки, включая установку панелей и отделочных материалов.',
        nalichie: 'dostupno',
        image: '/images/tovars-images/t011.jpg',
    },
}

export default listTovars