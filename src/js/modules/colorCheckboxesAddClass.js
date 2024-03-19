export default () => {
    const checkboxes = Array.from(document.querySelectorAll('.color-checkbox'));
    
    if(checkboxes.length > 0) {
        checkboxes.forEach((checkbox) => {
            if(checkbox.querySelector('.color-checkbox__text').style.backgroundColor === 'white') {
                checkbox.classList.add('color-checkbox--white')
            }
        })
    } else {
        return;
    }
}