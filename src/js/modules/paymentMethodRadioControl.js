export default () => {
  const paymentLabels = document.querySelectorAll('[data-role="payment-method-radio"]');

  if(paymentLabels.length < 1) return;

  let items = document.querySelectorAll('.payment-method__radio');



  // initial check radio
  paymentLabels[0].querySelector('input[type="radio"]').checked = true;
  paymentLabels[0].closest('.payment-method__radio').classList.add('payment-method__radio--open');

  Array.from(paymentLabels).forEach( label => {
    label.querySelector('input[type="radio"]').addEventListener('input', () => {
      items.forEach(item => item.classList.remove('payment-method__radio--open'))

      label.closest('.payment-method__radio').classList.add('payment-method__radio--open');
    })
  })
}
