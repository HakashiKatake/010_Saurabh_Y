
document.addEventListener('DOMContentLoaded', () => {
   
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            
            const fullImgSrc = item.getAttribute('data-full');
            const altText = item.getAttribute('alt');
            
            
            lightboxImg.src = fullImgSrc;
            caption.textContent = altText;
            
            
            lightbox.style.display = 'flex';
        });
    });
    
    
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            lightbox.style.display = 'none';
        }
    });
});
