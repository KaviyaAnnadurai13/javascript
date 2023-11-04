split=()=>{
    let amount = document.getElementById('one');
    let persons = document.getElementById('two');
    
    let result = (amount.value / persons.value).toFixed(1);
    let finalResult = result + ' Rs each!';
    
    

    amount.value='';
    persons.value='';
    document.getElementById('result').innerText = finalResult;
}
