const getStoredList = () => {
        // read list
        const storedListStr = localStorage.getItem('read-list')
        if(storedListStr){
            const storedList = JSON.parse(storedListStr);
            console.log('I am working')
            return storedList
        }
        else{
            return [];
        }
        
}
const addToStoredList = (id) =>{
    const storedList = getStoredList();
    console.log('I get your id ',id)
    
    console.log(typeof(id))
    if(storedList.includes(id)){
        
        console.log(id,'already exist');

    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-item',storedListStr)
       
    }
} 
addToStoredList()
export  {addToStoredList}