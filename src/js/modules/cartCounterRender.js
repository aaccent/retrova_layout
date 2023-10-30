export default () => {
  const controlBtns = document.querySelectorAll('.control-btn');

  if(controlBtns.length < 1) return;

  controlBtns.forEach(btn => {
    if(btn.dataset.count && (btn.dataset.count !== 0)) {
      btn.querySelector('.control-btn__counter').textContent = btn.dataset.count;
      btn.classList.add('control-btn--show-counter');
    }
  })
}
