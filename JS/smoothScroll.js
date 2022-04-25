const smoothScroll = () => {
    const navbar = document.querySelector('.header__nav');
    const links = navbar.querySelectorAll('a');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            const section = document.querySelector(link.getAttribute('href'));
            event.preventDefault();
            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            }
        });
    })
}

smoothScroll()
