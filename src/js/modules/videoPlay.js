export default () => {
  const playButtons = document.querySelectorAll('article > figure > button');

  if(playButtons.length < 1) return;

  Array.from(playButtons).forEach(playButton => {
    playButton.addEventListener("click", function() {
      let video = playButton.closest('figure').querySelector('video');
      playButton.classList.add('visually-hidden');
      video.setAttribute("controls","controls")
      video.play();
    });
  })

}
