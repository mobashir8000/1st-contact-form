const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//show error
function showError(input, message){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control error';
    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
//show success
function showSuccess(input){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success';
}
//email validation
function checkEmail(input){
    const re = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input,"email is not valid");
    }
    

};
//check required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    })
}
//check length
function checkLength(input,min,mix){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be al lest${min} characters`)
    }
    else if(input.value.length>mix){
        showError(input,`${getFieldName(input)} must be at less ${mix} characters`)
    }
    else{
        showSuccess(input);
    }
}
//check password match
function checkPasswordMatch(input1, input2){
    if (input1.value!==input2.value){
        showError(input2,`password do not match`);
    }
    else{
        showSuccess(input);
    }
}
//get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}
// event listerner
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,20);
    
    checkEmail(email);
    checkPasswordMatch(password,password2);
});