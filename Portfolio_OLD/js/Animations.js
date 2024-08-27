class TextAnimations {
    presentation = "I'm Antonio Murabito,<br>your ";
    typeWriter(element, phrases = [], speed) {
        let i = 0, j = 0, currentPhrase = '', isDeleting = false;
        const typing = () => {
            if(i < phrases.length) {
                if(j <= phrases[i].length && !isDeleting) {
                    currentPhrase = phrases[i].substring(0, j);
                    element.innerHTML = this.presentation + currentPhrase + '|';
                    j++;
                } else if(j >= 0 && isDeleting) {
                    currentPhrase = phrases[i].substring(0, j);
                    element.innerHTML = this.presentation + currentPhrase + '|';
                    j--;
                } else {
                    isDeleting = !isDeleting;
                    if(!isDeleting)
                        i++;
                }
            } else
                i = 0;
        }

        setInterval(() => {
            typing();
        }, speed);
    }
}

const Animations = new TextAnimations();

Animations.typeWriter(document.querySelector('.type-writer'), ['Web Developer.', 'Photographer.', 'Tech Support.', 'Translator.', 'Photo Editor.'], 135);