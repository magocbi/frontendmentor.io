const faqList = document.querySelector('.question-list');
const faqItems = faqList.querySelectorAll('.question');

const clickHandler = (e) => {
  const target = e.target.closest('li');
  if (target) {
    faqItems.forEach((item) => item.classList.remove('selected'));
    target.classList.add('selected');
  }
};

faqList.addEventListener('click', clickHandler);
