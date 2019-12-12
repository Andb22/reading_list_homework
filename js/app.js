document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const formElement = document.querySelector('#new-item-form');

const handleFormSubmit = function(event){
  event.preventDefault();
const formElementText = document.querySelector('ul');

const newListItem = document.createElement('li');
newListItem.textContent = `${event.target.title.value} ${event.target.author.value}
  ${event.target.category.value}`;

  formElementText.appendChild(newListItem);
  formElement.reset()

}

formElement.addEventListener('submit', handleFormSubmit);



const buttonElement = document.querySelector('#deleteButton');
  const handleButtonClick = function(){
    window.location.href=window.location.href;
    //event.preventDefault();
    console.log('has this worked?');

  }

  buttonElement.addEventListener('click', handleButtonClick);



})
