var info = document.getElementById("info");
var blocker = document.getElementById("blocker");
var welcome = document.getElementById("welcome");
var ply1 = document.getElementById("ply1");
var ply2 = document.getElementById("ply2");
// blocker.innerHTML = "";
// console.log(blocker.innerHTML);




function appendMe(box) {
    
    if(ply1.value=="" && ply2.value == "") {
        welcome.innerHTML = "You have to enter your names to Start Playing";
    } else {
        welcome.innerHTML = "Welcome to " + ply1.value + " and " + ply2.value;
        let assist = document.getElementById("assist");
        if(box.innerHTML !== "") {
            return;
        }
        if(assist.value == "one") {
            box.innerHTML = "X";
            assist.value = "two";
        }
    
        else if(assist.value == "two") {
            box.innerHTML = "O";
            assist.value = "one";
        }

    }

    if((box1.innerHTML == box2.innerHTML) && (box2.innerHTML == box3.innerHTML)
     && box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "") {
         if(box1.innerHTML == "X") {
             welcome.innerHTML = "player " + ply1.value + " won.";
            } else {
                welcome.innerHTML = "player " + ply2.value + " won.";
            }
            blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;


    } else if((box4.innerHTML == box5.innerHTML) && (box5.innerHTML == box6.innerHTML)
    && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== "") {
        
        
        if(box4.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;

    }else if((box7.innerHTML == box8.innerHTML) && (box8.innerHTML == box9.innerHTML)
    && box7.innerHTML !== "" && box8.innerHTML !== "" && box9.innerHTML !== ""){ 
       
        if(box7.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;

    }
    else if((box1.innerHTML == box4.innerHTML) && (box4.innerHTML == box7.innerHTML)
    && box1.innerHTML !== "" && box4.innerHTML !== "" && box7.innerHTML !== ""){ 
        
        if(box1.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;

    }else if((box2.innerHTML == box5.innerHTML) && (box5.innerHTML == box8.innerHTML)
    && box2.innerHTML !== "" && box5.innerHTML !== "" && box8.innerHTML !== ""){ 
        
        if(box2.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;

    }else if((box3.innerHTML == box6.innerHTML) && (box6.innerHTML == box9.innerHTML)
    && box3.innerHTML !== "" && box6.innerHTML !== "" && box9.innerHTML !== ""){ 
        
        if(box3.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;

    } 
    else if((box1.innerHTML == box5.innerHTML) && (box5.innerHTML == box9.innerHTML)
    && box1.innerHTML !== "" && box5.innerHTML !== "" && box9.innerHTML !== "") {
        
        if(box1.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
        info.innerHTML = welcome.innerHTML;

    }else if((box3.innerHTML == box5.innerHTML) && (box5.innerHTML == box7.innerHTML)
    && box3.innerHTML !== "" && box5.innerHTML !== "" && box7.innerHTML !== "") {

        if(box3.innerHTML == "X") {
            welcome.innerHTML = "player " + ply1.value + " won.";
        } else {
            welcome.innerHTML = "player " + ply2.value + " won.";
        }
        blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;

    } else {
        if(box1.innerHTML == "" || box2.innerHTML == "" || box3.innerHTML ==""
            || box4.innerHTML == "" || box5.innerHTML == "" || box6.innerHTML == ""
            || box7.innerHTML == "" || box8.innerHTML == "" || box9.innerHTML == "") {
                return;
            } else {
                welcome.innerHTML = "This Game is a Draw.";
            }
            blocker.classList.add("active");
            info.innerHTML = welcome.innerHTML;
    }
}