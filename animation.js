document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar .skillper');

    const animateSkills = () => {
        const triggerBottom = window.innerHeight * 0.8;

        skillBars.forEach((bar) => {
            const barTop = bar.getBoundingClientRect().top;

            if (barTop < triggerBottom) {
                bar.style.width = bar.getAttribute('per');
            } else {
                bar.style.width = '0';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); 
});

