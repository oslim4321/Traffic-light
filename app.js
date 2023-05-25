let red=document.getElementById('red')
let yellow=document.getElementById('yellow')
let green=document.getElementById('green')
let show=document.getElementById('show')
let color=['red', 'yellow', 'green']




let time =15;


    

function traffic(){
    let count=setInterval(() => {
        time--
        show.innerHTML=time;
        if(time ==5){
            yellow.style.background=color[1];
            red.style.background='grey'
        }
        else if(time==0 && time<= 30){
            time++
            green.style.background=color[2]
            yellow.style.background='grey'
             clearInterval(count);
             show.innerHTML='GO'
             time++
            // made();
        }
        // if(time ==0){
        //     time=30
        //     green.style.background=color[2]
        //     red.style.background='grey'
        //     yellow.style.background='grey'
        // }
    
    }, 1000);
   
}
traffic()



// function made(){
//    sel=10;
//   let sel=setInterval(() => {
//         sel--
//         show.innerHTML=sel
//         green.style.background=color[2]
//         if(sel==0){
//             sel=15;
//         }
//     }, 1000);
// }
