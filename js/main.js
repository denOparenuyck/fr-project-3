
const listItem = document.querySelectorAll('.list-item'),
    selectNumber = document.querySelector('#count-rows select'),
    selectType = document.querySelector('#select-type select');


if(listItem){
    showItem();

    selectNumber.addEventListener('change', function(){
        let getValue = this.value;
        hideItem();
        showItem(getValue);
    }); 
    
    
    function showItem(n = 5){
        for(let i = 0; i < n; i++){
            listItem[i].style.display = 'flex';
        }
    }
    
    function hideItem(){
        listItem.forEach(item => {
            item.style.display = 'none';
        });
    }
    
    
    
    selectType.addEventListener('change', function(){
        let getValue = this.value;
        listItem.forEach(item => {
            if(item.getAttribute('data-type') != getValue){
                item.style.display = 'none';
            }else{
                item.style.display = 'flex';
            }
        });
    });
}


