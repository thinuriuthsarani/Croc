document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        { "fact": "Crocodiles are large aquatic reptiles found in tropical regions of Africa, Asia, the Americas, and Australia." },
        { "fact": "They are members of the order Crocodylia, which also includes alligators, caimans, and gharials." },
        { "fact": "Crocodiles have a V-shaped snout, whereas alligators have a U-shaped snout." },
        { "fact": "They are carnivorous and have a powerful bite, capable of taking down large prey." },
        { "fact": "Crocodiles can live both in freshwater and saltwater environments." },
        { "fact": "They have a lifespan of 70 to 100 years in the wild." },
        { "fact": "Crocodiles are known for their ability to stay submerged underwater for up to an hour." },
        { "fact": "They have a unique heart structure with four chambers, similar to birds and mammals." },
        { "fact": "Crocodiles communicate with each other through vocalizations, including growls, hisses, and roars." },
        { "fact": "They are excellent swimmers, using their tails to propel themselves through the water." }
    ];

    const factDisplay = document.getElementById('fact-display');
    const factButton = document.getElementById('fact-button');

    factButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.style.opacity = 0;
        setTimeout(() => {
            factDisplay.textContent = facts[randomIndex].fact;
            factDisplay.style.opacity = 1;
        }, 500);
    });
});
