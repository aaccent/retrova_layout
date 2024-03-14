export default () => {
  const playButtons = document.querySelectorAll('article > figure > button');
  const playButtons2 = document.querySelectorAll('.product-view__picture button');

  if(playButtons.length > 0) {
    Array.from(playButtons).forEach((playButton) => {
      playButton.addEventListener("click", function() {
        let video = playButton.closest('figure').querySelector('video');
        playButton.classList.add('visually-hidden');
        video.setAttribute("controls","controls")
        video.play();
      });
    })
  }

  if(playButtons2.length > 0) {
    Array.from(playButtons2).forEach((playButton) => {
      playButton.addEventListener("click", function() {
        let video = playButton.closest('.product-view__inner-wrapper').querySelector('video');
        playButton.classList.add('visually-hidden');
        video.setAttribute("controls","controls")
        video.play();
      });
    })
  }
}
