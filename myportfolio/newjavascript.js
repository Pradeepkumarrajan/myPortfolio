document.addEventListener("DOMContentLoaded", function() {
    const certificationsSection = document.querySelector('#certifications');
    
    const handleScroll = () => {
        const sectionPosition = certificationsSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Check if the section is visible (80% of it is visible)
        if (sectionPosition < screenHeight * 0.8 && sectionPosition > -certificationsSection.offsetHeight) {
            certificationsSection.classList.add('visible');
        } else {
            certificationsSection.classList.remove('visible');
        }
    };

    // Check on scroll and when content is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});


// Detect when the section is in the viewport and add the 'visible' class to trigger animation
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('#about');
    
    const handleScroll = () => {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Check if the section is visible (80% of it is visible)
        if (sectionPosition < screenHeight * 0.8 && sectionPosition > -aboutSection.offsetHeight) {
            aboutSection.classList.add('visible');
        } else {
            aboutSection.classList.remove('visible');
        }
    };

    // Check on scroll and when content is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const skillSection = document.querySelector('#skills');
    
    const handleScroll = () => {
        const sectionPosition = skillSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Check if the section is visible (80% of it is visible)
        if (sectionPosition < screenHeight * 0.8 && sectionPosition > -skillSection.offsetHeight) {
            skillSection.classList.add('visible');
        } else {
            skillSection.classList.remove('visible');
        }
    };

    // Check on scroll and when content is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
document.addEventListener("DOMContentLoaded", function() {
    const EXPSection = document.querySelector('#experience');
    
    const handleScroll = () => {
        const sectionPosition = EXPSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Check if the section is visible (80% of it is visible)
        if (sectionPosition < screenHeight * 0.8 && sectionPosition > -EXPSection.offsetHeight) {
            EXPSection.classList.add('visible');
        } else {
            EXPSection.classList.remove('visible');
        }
    };

    // Check on scroll and when content is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const PROSection = document.querySelector('#projects');
    
    const handleScroll = () => {
        const sectionPosition = PROSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Check if the section is visible (80% of it is visible)
        if (sectionPosition < screenHeight * 0.8 && sectionPosition > -PROSection.offsetHeight) {
            PROSection.classList.add('visible');
        } else {
            PROSection.classList.remove('visible');
        }
    };

    // Check on scroll and when content is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
document.addEventListener("DOMContentLoaded", function() {
    const cOnSection = document.querySelector('#contact');
    
    const handleScroll = () => {
        const sectionPosition = cOnSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Check if the section is visible (80% of it is visible)
        if (sectionPosition < screenHeight * 0.8 && sectionPosition > -cOnSection.offsetHeight) {
            cOnSection.classList.add('visible');
        } else {
            cOnSection.classList.remove('visible');
        }
    };

    // Check on scroll and when content is loaded
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
document.addEventListener("DOMContentLoaded", function() {
    const profileImage = document.querySelector('.profile-image');
    profileImage.classList.add('loaded');
});
window.onload = function () {
    var text = document.querySelector('.animated-title');
    var content = text.innerHTML;
    
    // Wrap each letter in a span tag
    text.innerHTML = content.split('').map(function(letter) {
        return letter === ' ' ? '&nbsp;' : '<span>' + letter + '</span>';
    }).join('');
};


document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Check if form fields are valid
    if (name && email && message) {
        // Simulate a message sent confirmation for now
        alert('Message sent successfully! We will get back to you soon.');

        // Normally, you'd send the data to a server here.
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                this.reset(); // Optionally reset the form
            } else {
                alert('Failed to send message, please try again later.');
            }
        }).catch(error => {
            alert('Error: ' + error.message);
        });
    } else {
        alert('Please fill out all the fields.');
    }
});

