let minute = parseInt(document.getElementsByClassName("minute")[0].innerText),
    second = parseInt(document.getElementsByClassName("second")[0].innerText),
    btnStart = document.getElementsByTagName("button")[0],
    btnPause = document.getElementsByTagName("button")[1],
    num = 0;


    let timer = function(){
      let secTimer = setInterval(()=>{
          second --;
          console.log(second);
          document.getElementsByClassName("second")[0].innerText = second;
          if(minute != 0 && second < 0){
            second = 59;
            document.getElementsByClassName("second")[0].innerText = second;
            if(minute >=1) document.getElementsByClassName("minute")[0].innerText = minute - 1;
          }else if(document.getElementsByClassName("minute")[0].innerText == 0 && document.getElementsByClassName("second")[0].innerText== 0) clearInterval(secTimer);
      },1000);



      btnPause.onclick = () =>{
        clearInterval(secTimer);
        btnPause.innerText = "CONTINUE";
        btnPause.onclick = () =>{
          if(btnPause.innerText == "PAUSE"){
            clearInterval(secTimer);
            btnPause.innerText = "CONTINUE";
          }else if (btnPause.innerText == "CONTINUE"){
            timer();
            btnPause.innerText = "PAUSE";
          }
        }
      }
      if(btnStart.innerText == "RESTART"){
        btnStart.onclick = () =>{
          clearInterval(secTimer);
          document.getElementsByClassName("minute")[0].innerText = 1;
          minute = 1;
          document.getElementsByClassName("second")[0].innerText = 40;
          second = 40;
          btnStart.innerText = "START";
          btnStart.onclick = () => {
            if(btnStart.innerText == "START"){
              btnStart.innerText = "RESTART";
              timer();

            }
          }
        }
      }
    }

    btnStart.onclick = () => {
      if(btnStart.innerText == "START"){
        btnStart.innerText = "RESTART";
        timer();

      }
    }
