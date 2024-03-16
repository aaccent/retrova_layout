export default () => {
  const counter = document.querySelector('.js-images-count');
  const list = document.querySelector('.modal-lifestyle__body > ul');

  if(!counter && !list) return;

  console.log(list);

  const targetNode = document.querySelector('.modal-lifestyle__body > ul');

  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

  // Later, you can stop observing
  observer.disconnect();
}
