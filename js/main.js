const slideshowContainer = document.querySelector('.slideshow-container');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

const textArray = [
    "er morsomst",
    "tror den selv er morsomst",
    "har kommet flest ganger",
    "har mest kjendisfaktor",
    "du får de fineste barna med",
    "har den sprekeste outfiten",
    "har vært ute flest vinternetter",
    "kan fakta om alt",
    "er deiligst i rommet",
    "SKÅL!",
    "har hatt sex med den yngste personen",
    "kommer raskest",
    "har de største føttene",
    "blir den beste forelderen",
    "den du ville vært på en øde øy med",
    "er den beste kysseren",
    "har hatt sex med flest nasjonaliteter",
    "liker å suge kuk",
    "har de sykeste fyllahistoriene",
    "SKÅL!",
    "har best musikksmak",
    "tar med seg noen hjem i kveld",
    "blir fullest i kveld",
    "har sjel som en 80 år gammel dame",
    "hvem har pult flest",
    "er mest fornøyd med eget utseende",
    "lukter best",
    "er mest sporty",
    "har de fineste leggene",
    "SKÅL!",
    "tar seg mest på sine egne pupper",
    "runker mest",
    "er flinkest til å suge",
    "slipper de verste fisene",
    "er mest fotogen",
    "er villest i senga",
    "ligner mest på en modell",
    "oftest blueballer gutter",
    "fingrer mest",
    "SKÅL!",
    "har høyest kjendisfaktor",
    "har de fineste leppene",
    "googler seg selv oftest",
    "ligner mest på en taco",
    "har opplevd de kleineste tingene på kjærlighetsfronten",
    "har de sykeste lydene i senga",
    "har den kuleste klesstilen",
    "alltid havner alene på byen",
    "har brukt fake-id",
    "SKÅL!",
    "har størst lommebok",
    "har shavet og er forberedt på alt",
    "er mest nerd",
    "du kunne slikket fra topp til tå",
    "er mest avhengig av sosiale medier",
    "har knust flest iphoner",
    "har de mest spennende brystene",
    "har de fineste formene",
    "får kjæreste i år",
    "SKÅL!",
    "helst kunne vært med på PH",
    "er best til å få folk til å åpne seg",
    "har penest øyne",
    "ser mest på porno",
    "har hatt sex med noen i dette rommet",
    "du har et godt øye til",
    "har hatt sex med flest eldre",
    "den som har utført HLR",
    "spyr i kveld",
    "SKÅL!",
    "holder ut lengst i senga",
    "synger finest",
    "synger jævligst",
    "tar meg seg noen hjem i kveld",
    "har den sykeste latteren",
    "gir best strippeshow",
    "har hatt trekant",
    "har de rikeste foreldrene",
    "slutter på studiet",
    "SKÅL!",
    "er den minst kresne på sexpartnere",
    "er flinkest på instumenter",
    "gir mest til veldedighet",
    "har hatt flest jobber",
    "har blitt pumpa",
    "er den mest kresne på sexpartnere",
    "sprer mest glede",
    "ligner mest på ei høne",
    "rir best (tolk det som du vil)",
    "SKÅL!",
    "har hatt kjønnssykdommer",
    "er en svettgamer",
    "har hatt flest sexpartnere",
    "juksa mest på skolen",
    "tror på spøkelser",
    "har hatt sex i et telt",
    "er flink i mest ting",
    "lukter best",
    "bruker lengst tid på do",
    "skal ta bonski med deg",
    "SKÅL!"
];


// Create slides
textArray.forEach((text, index) => {
    const slide = document.createElement('div');
    slide.classList.add('text-slide');
    slide.textContent = text;
    if (index === 0) slide.classList.add('active-slide');
    slideshowContainer.appendChild(slide);
});

let startX;

function slideHandler(direction) {
    let activeSlide = document.querySelector('.active-slide');
    if (direction === 'left') {
        let nextSlide = activeSlide.nextElementSibling;
        if (nextSlide && nextSlide.classList.contains('text-slide')) {
            activeSlide.classList.remove('active-slide');
            nextSlide.classList.add('active-slide');
        }
    } else if (direction === 'right') {
        let prevSlide = activeSlide.previousElementSibling;
        if (prevSlide && prevSlide.classList.contains('text-slide')) {
            activeSlide.classList.remove('active-slide');
            prevSlide.classList.add('active-slide');
        }
    }
}

// Swipe functionality for touch devices
slideshowContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slideshowContainer.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diffX = startX - endX;
    if (diffX > 50) slideHandler('left');
    else if (diffX < -50) slideHandler('right');
});

// Swipe functionality for desktop
slideshowContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    e.preventDefault();
});

slideshowContainer.addEventListener('mouseup', (e) => {
    let endX = e.clientX;
    let diffX = startX - endX;
    if (diffX > 50) slideHandler('left');
    else if (diffX < -50) slideHandler('right');
});

// Button functionality
nextButton.addEventListener('click', () => slideHandler('left'));
previousButton.addEventListener('click', () => slideHandler('right'));
