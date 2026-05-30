 function showModule(n) {
    // hide home
    document.getElementById('view-home').classList.remove('active');
    // show detail wrapper
    const detail = document.getElementById('view-detail');
    detail.classList.add('active');
    // hide all mod-contents, show the right one
    document.querySelectorAll('.mod-content').forEach(el => el.style.display = 'none');
    const target = document.getElementById('mod-' + n);
    target.style.display = 'block';
    // animate
    target.querySelectorAll('.detail-header, .module-intro, .section, .evidence-section, footer')
      .forEach((el, i) => {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = `fadeUp .4s ease ${i * 0.06}s both`;
      });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goHome() {
    document.getElementById('view-detail').classList.remove('active');
    document.querySelectorAll('.mod-content').forEach(el => el.style.display = 'none');
    document.getElementById('view-home').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }