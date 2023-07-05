        // JavaScript for the slideshow
        let slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showSlide(n) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none' ;
            }
            slides[n].style.display = 'block';
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000); // Change slide every 3 seconds
    
