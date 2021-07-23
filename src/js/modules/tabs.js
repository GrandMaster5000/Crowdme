'use strict';

function viewTab(tabsSelector, tabsContentSelector) {
    const tabs = document.body.querySelectorAll(tabsSelector),
          tabsContent = document.body.querySelectorAll(tabsContentSelector);

    tabs.forEach(item => {
        item.addEventListener('click', e => {
           if(!e.currentTarget.classList.contains('active')) {
                item.classList.toggle('active');
                tabs.forEach(itemRemove => {
                    if(item != itemRemove)  {
                        itemRemove.classList.remove('active');
                    }
                });
                for (let content of tabsContent) {
                        if (content.dataset.text == item.getAttribute('id')) {
                            content.style.display = 'block';
                        } else {
                            content.style.display = 'none';
                        }
                }
           }
        });
    });
}

export default viewTab;