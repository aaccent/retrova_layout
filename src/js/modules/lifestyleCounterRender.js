export default () => {
  const counter = document.querySelector('.js-images-count');
  const list = document.querySelector('.modal-lifestyle__body > ul');

  if(!counter && !list) return;

  const targetNode = document.querySelector('.modal-lifestyle__body > ul');
  const config = { childList: true };

  counter.textContent = document.querySelectorAll('.modal-lifestyle__body > ul > li').length;

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        counter.textContent = document.querySelectorAll('.modal-lifestyle__body > ul > li').length;
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}
