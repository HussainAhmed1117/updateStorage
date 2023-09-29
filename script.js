function getCall(){
    // e.prevenyDefault();
    alert("Thank you for registeration, You will receive a call shortly");
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    localStorage.setItem('UserName', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
    localStorage.setItem('Date', date);
    localStorage.setItem('Time', time);
    localStorage.getItem(key);
    let myObj = {
        Username : username,
        Email : email,
        Phone : phone,
        Date : date,
        Time : time
    }

     let myObj_str = JSON.stringify(myObj);
     localStorage.setItem(myObj.Email, myObj_str);
// POST data

    axios.post('paste_url', myObj)
    .then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

    showUserOnScreen(myObj);
}
window.onload = function(myObj){
    axios.get('paste_url', myObj)
    .then((res)=>{
        for(let user=0; user<res.data.length; user++){
            showUserOnScreen(res.data[user]);
        }
        console.log(res.data)})
        .catch((err)=>{console.log(err)});
    }
    // UPDATE request
    
    function updateEntry(){
        axios({
            url : `paste_url`,
            method : 'put',
        }).then((res => {console.log(res.data)})).catch((err) => {console.log(err)
        });
    
         showUserOnScreen(myObj);
    }


