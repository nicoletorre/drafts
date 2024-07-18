document.addEventListener("DOMContentLoaded", function() {
    const names = ["Nicole Patrice Torrero", "Web Developer"];
    const typedNameElement = document.getElementById("typed-name");
    let nameIndex = 0; 
    let charIndex = 0; 

    function typeText() {
        let currentName = names[nameIndex];
        if (charIndex < currentName.length) {
            typedNameElement.textContent += currentName.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        let currentName = names[nameIndex];
        if (charIndex > 0) {
            typedNameElement.textContent = currentName.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            nameIndex = (nameIndex + 1) % names.length;
            setTimeout(typeText, 500); 
        }
    }

    setTimeout(typeText, 1200);
});

// swiping right effect for my educ and skills 
document.getElementById('education-link').addEventListener('click', function(event) {
    event.preventDefault();
    const educationSection = document.getElementById('education-details');
    const experienceSection = document.getElementById('experience-details');

    educationSection.classList.add('swipeRight');
    educationSection.classList.add('visible');

    experienceSection.classList.remove('swipeRight');
});

document.getElementById('experience-link').addEventListener('click', function(event) {
    event.preventDefault();
    const educationSection = document.getElementById('education-details');
    const experienceSection = document.getElementById('experience-details');

    experienceSection.classList.add('swipeRight');
    experienceSection.classList.add('visible');
    educationSection.classList.remove('swipeRight');
});


// Ensure the initial active class is set correctly
document.querySelectorAll('.glide__slide').forEach((slide, index) => {
    if (index === glide.index % glide.length) {
        slide.classList.add('active');
    } else {
        slide.classList.remove('active');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const educationLink = document.getElementById("education-link");
    const experienceLink = document.getElementById("experience-link");
    const educationSection = document.getElementById("education-details");
    const experienceSection = document.getElementById("experience-details");

    educationLink.addEventListener("click", function(event) {
        event.preventDefault();
        educationSection.style.display = 'block';
        experienceSection.style.display = 'none';
        educationLink.classList.add('active-link');
        experienceLink.classList.remove('active-link');
    });

    experienceLink.addEventListener("click", function(event) {
        event.preventDefault();
        educationSection.style.display = 'none';
        experienceSection.style.display = 'block';
        educationLink.classList.remove('active-link');
        experienceLink.classList.add('active-link');
    });
});


