export function openSaveModal() {
    const btn = document.createElement('button');
    btn.classList.add('visually-hidden');
    document.body.appendChild(btn);
    btn.dataset.path = 'modal-save-data';
    btn.click();
}

window.openSaveModal = openSaveModal;