let x = document.getElementById("user_password")
let y = document.getElementById("user_password_cnf")


//x = "fghjkl"
//y = ""


y.addEventListener("input",updateValue)

function updateValue(e){
    //console.log("chk")
    if(x.value != y.value){
        document.getElementById("mism").innerHTML = "Passwords do not match"
        x.setAttribute("invalid","1")
        y.setAttribute("invalid","1")
    }
    else{
        document.getElementById("mism").innerHTML = ""
        x.setAttribute("valid","1")
        y.setAttribute("valid","1")
    }
}


