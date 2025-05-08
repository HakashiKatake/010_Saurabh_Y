const themeToggleBtn = document.querySelector('.hero button');
  
  function toggleTheme() {
    const body = document.body;
    console.log(body);
    

    body.classList.toggle('light-mode');
    
    
    if (body.classList.contains('light-mode')) {
      themeToggleBtn.innerHTML.textContent = 'Dark Mode';
    } else {
      themeToggleBtn.innerHTML.textContent = 'Light Mode';
    }
  }
  

 
themeToggleBtn.addEventListener('click', toggleTheme);
