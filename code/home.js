let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Lăn xuống: ẩn menu
        navbar.style.top = "-100px";
    } else {
        // Lăn lên: hiện menu
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

let currentSlideIndex = 0;
const customSlides = document.querySelectorAll('.custom-slide');

function showCustomSlide(index) {
    customSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextCustomSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % customSlides.length;
    showCustomSlide(currentSlideIndex);
}

// Hiển thị slide đầu tiên
showCustomSlide(currentSlideIndex);

// Chuyển slide mỗi 4 giây
setInterval(nextCustomSlide, 4000);

const carousel = document.querySelector('.product-carousel');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 220, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -220, behavior: 'smooth' });
});
function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = 320; // khoảng cách trượt (px)
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
const photos = document.querySelectorAll('.photo img');
const fullscreenImg = document.getElementById('fullscreen-img');

photos.forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImg.src = img.src;
    fullscreenImg.style.display = 'block';
    openFullscreen(fullscreenImg);
  });
});

fullscreenImg.addEventListener('click', () => {
  closeFullscreen(); // Khi click ảnh thì thoát fullscreen
});

// Khi thoát fullscreen thì ẩn ảnh lại
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    fullscreenImg.style.display = 'none';
  }
});

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000); 


const slide = document.querySelectorAll('.custom-slide');
let index = 0;

function showSlide() {
  slide.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
  index = (index + 1) % slide.length;
}

setInterval(showSlide, 3000);
