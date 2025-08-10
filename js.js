 <script>
    // Легкая подсветка при движении мыши
    document.querySelector('.card').addEventListener('mousemove', e => {
      const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left - width/2) / width * 2;
      const y = (e.clientY - top  - height/2)/ height* 2;
      e.currentTarget.style.transform = `rotateX(${ -y * 5 }deg) rotateY(${ x * 5 }deg)`;
    });
    document.querySelector('.card').addEventListener('mouseleave', e => {
      e.currentTarget.style.transform = `rotateX(0) rotateY(0)`;
    });
    </script>
