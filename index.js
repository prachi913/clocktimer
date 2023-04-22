        let hourelement = document.getElementById("hour");
        let minuteelement = document.getElementById("minute");
        let secondelemet = document.getElementById("second");
let ampmelement = document.getElementById("ampm");
        
function updateclock() {
    let h = new Date().getHours()
        let m = new Date().getMinutes();

        let s = new Date().getSeconds();
    let ampm = "AM"
    if (h > 12) {
        h = h - 12;
        ampm="PM"
    }
    h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;

        s = s < 10 ? "0" + s : s;


    hourelement.innerText = h;
    minuteelement.innerText = m;
    secondelemet.innerText = s;
    ampmelement.innerText= ampm;
   setTimeout(() => {
     updateclock();
   }, 1000);

}
updateclock();







