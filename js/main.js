const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

//Select tab content item
function selectItem(e){
    //Calling Function to remove border
    removeBorder();
    //Calling Function to remove items content
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

//Function to remove border
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

//Function to remove items content
function removeShow(){
    tabContentItem.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));