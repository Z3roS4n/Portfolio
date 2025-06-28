class LoadSkills {
    async loadSkills() {
        const response = await fetch('assets/portfolio-data/skills.json');
        const data = await response.json();
        return data;
    }

    async createList(all) {
        const skillsData = await this.loadSkills();
        const skillsContainer = document.querySelector('#skills > .container');
        
        const limit = all != -1 || all != null ? 5 : -1

        this.loadSkillsList(skillsContainer, skillsData.skills, limit);
    } 

    loadSkillsList(element, skills, limit) {
        for(let i = 0; i < skills.length; i++) {

            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');
            if(limit != -1 && i > limit) {
                skillElement.classList.add('hidden');
            }
            skillElement.id = `skill-${i}`;
            element.appendChild(skillElement);

            const skillName = document.createElement('span');
            skillName.innerHTML = `<i class='${skills[i].iconClass}'></i> ${skills[i].name}`;
            skillElement.appendChild(skillName);

            const barContainer = document.createElement('div');
            barContainer.classList.add('bar-container');
            skillElement.appendChild(barContainer);

            const barElement = document.createElement('div');
            barElement.classList.add('bar');
            barElement.classList.add(`${skills[i].bar}`);
            barElement.innerHTML = `${skills[i].level} - ${skills[i].experience}`;
            barContainer.appendChild(barElement);
        }
    }

    showAll() {
        const elements = document.querySelectorAll('.hidden');
        elements.forEach((element) => {
            element.classList.remove('hidden');
        });
    }
}

const skills = new LoadSkills();
skills.createList(5);

const showAllButton = document.querySelector('#showAllButton');
showAllButton.addEventListener('click', () => {
    skills.showAll();
    showAllButton.classList.add('hidden');
});