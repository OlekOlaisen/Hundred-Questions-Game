const phrasesArray = [
    "Er morsomst",
    "Tror den selv er morsomst",
    "Har kommet flest ganger",
    "Har mest kjendisfaktor",
    "Du får de fineste barna med",
    "Har den sprekeste outfiten",
    "Har vært ute flest vinternetter",
    "Kan fakta om alt",
    "Er deiligst i rommet",
    "SKÅL!",
    "Har hatt sex med den yngste personen",
    "Kommer raskest",
    "Har de største føttene",
    "Blir den beste forelderen",
    "Den du ville vært på en øde øy med",
    "Er den beste kysseren",
    "Har hatt sex med flest nasjonaliteter",
    "Liker å suge kuk",
    "Har de sykeste fyllahistoriene",
    "SKÅL!",
    "Har best musikksmak",
    "Tar med seg noen hjem i kveld",
    "Blir fullest i kveld",
    "Har sjel som en 80 år gammel dame",
    "Hvem har pult flest",
    "Er mest fornøyd med eget utseende",
    "Lukter best",
    "Er mest sporty",
    "Har de fineste leggene",
    "SKÅL!",
    "Tar seg mest på sine egne pupper",
    "Runker mest",
    "Er flinkest til å suge",
    "Slipper de verste fisene",
    "Er mest fotogen",
    "Er villest i senga",
    "Ligner mest på en modell",
    "Oftest blueballer gutter",
    "Fingrer mest",
    "SKÅL!",
    "Har høyest kjendisfaktor",
    "Har de fineste leppene",
    "Googler seg selv oftest",
    "Ligner mest på en taco",
    "Har opplevd de kleineste tingene på kjærlighetsfronten",
    "Har de sykeste lydene i senga",
    "Har den kuleste klesstilen",
    "Alltid havner alene på byen",
    "Har brukt fake-id",
    "SKÅL!",
    "Har størst lommebok",
    "Har shavet og er forberedt på alt",
    "Er mest nerd",
    "Du kunne slikket fra topp til tå",
    "Er mest avhengig av sosiale medier",
    "Har knust flest iphoner",
    "Har de mest spennende brystene",
    "Har de fineste formene",
    "Får kjæreste i år",
    "SKÅL!",
    "Helst kunne vært med på PH",
    "Er best til å få folk til å åpne seg",
    "Har penest øyne",
    "Ser mest på porno",
    "Har hatt sex med noen i dette rommet",
    "Du har et godt øye til",
    "Har hatt sex med flest eldre",
    "Den som har utført HLR",
    "Spyr i kveld",
    "SKÅL!",
    "Holder ut lengst i senga",
    "Synger finest",
    "Synger jævligst",
    "Tar meg seg noen hjem i kveld",
    "Har den sykeste latteren",
    "Gir best strippeshow",
    "Har hatt trekant",
    "Har de rikeste foreldrene",
    "Slutter på studiet",
    "SKÅL!",
    "Er den minst kresne på sexpartnere",
    "Er flinkest på instumenter",
    "Gir mest til veldedighet",
    "Har hatt flest jobber",
    "Har blitt pumpa",
    "Er den mest kresne på sexpartnere",
    "Sprer mest glede",
    "Ligner mest på ei høne",
    "Rir best (tolk det som du vil)",
    "SKÅL!",
    "Har hatt kjønnssykdommer",
    "Er en svettgamer",
    "Har hatt flest sexpartnere",
    "Juksa mest på skolen",
    "Tror på spøkelser",
    "Har hatt sex i et telt",
    "Er flink i mest ting",
    "Lukter best",
    "Bruker lengst tid på do",
    "Skal ta bonski med deg",
    "SKÅL!"
];

const colorsArray = [
    '#ff2727', // Strong Red
    '#33FF57', // Vibrant Green
    '#3357FF', // Bright Blue
    '#FF33D1', // Pink
    '#FFD133', // Golden Yellow
    '#33FFF3', // Aqua
    '#8A33FF', // Purple
    '#FF8A33', // Orange
    '#33FF8A', // Lime Green
    '#5833FF'  // Indigo
];

const slideshowContainer = document.querySelector('.slideshow-container');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');



phrasesArray.forEach((text, index) => {
    const slide = document.createElement('div');
    slide.classList.add('text-slide');
    slide.textContent = text;
    // The modulus operator ensures we cycle through the colors if there are more slides than colors
    if (index === 0) slide.classList.add('active-slide');
    slideshowContainer.appendChild(slide);
});


function updateButtons() {
    let activeSlide = document.querySelector('.active-slide');
    let activeIndex = Array.from(slideshowContainer.children).indexOf(activeSlide);

    // If on the first slide, hide the previous button. Otherwise, show it.
    if (activeIndex === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'block';
    }
}

function slideHandler(direction) {
    let activeSlide = document.querySelector('.active-slide');
    
    // Prevent going back from the first slide
    if (activeSlide.textContent === phrasesArray[0] && direction === 'right') {
        return;
    }
    
    if (direction === 'left') {
        let nextSlide = activeSlide.nextElementSibling || slideshowContainer.firstChild;
        nextSlide.classList.add('from-right'); // New class for the starting position of the next slide
        activeSlide.classList.add('move-out-left'); // Move out to the left
        
        setTimeout(() => {
            activeSlide.classList.remove('active-slide', 'move-out-left');
            nextSlide.classList.remove('from-right');
            nextSlide.classList.add('active-slide');
            document.body.style.backgroundColor = colorsArray[phrasesArray.indexOf(nextSlide.textContent) % colorsArray.length];
        }, 200); // Match this with the transition time in CSS
    } else {
        let prevSlide = activeSlide.previousElementSibling || slideshowContainer.lastChild;
        prevSlide.classList.add('from-left'); // New class for the starting position of the previous slide
        activeSlide.classList.add('move-out-right'); // Move out to the right
        
        setTimeout(() => {
            activeSlide.classList.remove('active-slide', 'move-out-right');
            prevSlide.classList.remove('from-left');
            prevSlide.classList.add('active-slide');
            document.body.style.backgroundColor = colorsArray[phrasesArray.indexOf(prevSlide.textContent) % colorsArray.length];
        }, 200); // Match this with the transition time in CSS
    }

    // Update the visibility of the buttons at the end of the function
    updateButtons();
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


updateButtons();