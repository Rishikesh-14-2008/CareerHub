function openMenu(){
    document.body.classList += " menu--open"
}

function closeMenu(){
    document.body.classList.remove('menu--open')

}
document.addEventListener("DOMContentLoaded", () => {
    const words = ["Students", "Learners", "Explorers", "Achievers"];
    let currentWordIndex = 0;
    const changingWordElement = document.getElementById("changing-word");

    function changeWord() {
        // Simulate typing out the word
        changingWordElement.textContent = "";
        let currentWord = words[currentWordIndex];
        let letters = currentWord.split("");

        letters.forEach((letter, index) => {
            setTimeout(() => {
                changingWordElement.textContent += letter;
            }, index * 100); // Adjust speed here (100ms per letter)
        });

        // After typing out, wait a bit and then delete the word
        setTimeout(() => {
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    changingWordElement.textContent = currentWord.substring(0, currentWord.length - index - 1);
                }, index * 100); // Adjust speed here (100ms per letter)
            });

            // After deleting, move to the next word
            setTimeout(() => {
                currentWordIndex = (currentWordIndex + 1) % words.length;
                changeWord(); // Recursive call to continue the cycle
            }, letters.length * 100 + 500); // Wait a bit longer after deleting
        }, letters.length * 1000); // Wait longer after typing out
    }

    // Initial call to start the word changing cycle
    changeWord();
}); 


