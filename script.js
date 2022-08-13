
document.querySelector('button').onclick = (event) =>{

    event.preventDefault();

    let nameUser = document.querySelector('.name');

    let surnameUser = document.querySelector('.surname');

    let phoneUser = document.querySelector('.phone');

    let inputAll = document.querySelectorAll('input');

    for (let i= 0; i < inputAll.length; i++){
        if (inputAll[i].value == ""){
            inputAll[i].value = 'не указано'
        }
    }

    let arr = {
        'Имя ' : nameUser.value,
        'Фамилия ' : surnameUser.value,
        'Номер телефона' : phoneUser.value,
    }
    
    let order="";
    
    for (let key in arr){
        order+= key + ": " + arr[key] + '\n'
    }
    
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            nameUser.value = "";
            surnameUser.value = "";
            phoneUser.value = "";
        }
    } 
    xhttp.open('POST','https://api.telegram.org/bot5428806638:AAFD2kqbSUyFEh9HHW3ClxR7yjKw-0Uo-AE/sendMessage?',false)
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    xhttp.send(`chat_id=-682711054&text=${order}`)

}

document.querySelector('.form__icon').onclick = function(){
    document.querySelector('.form__container').classList.toggle('close');
}


document.querySelector('.form__order').onclick = function(){
    document.querySelector('.form__container').classList.remove('close')
}



