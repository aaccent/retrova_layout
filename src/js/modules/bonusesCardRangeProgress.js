export default () => {
  const rangeLine = document.querySelectorAll('.bonuses-card__range-progress');

  if(rangeLine.length > 0) {
    rangeLine.forEach(line => {
      let data = line.dataset.range;

      line.style.width = data + '%';
    })
  }
}
