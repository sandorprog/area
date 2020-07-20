function calcNum() {
    let num1 = document.querySelector("input[name='number1']");
    let num2 = document.querySelector("input[name='number2']");
    
    let cub1 = 25;
    let cub2 = 25;
    
    let showAll = document.querySelector("span#show-am");
    let showAllKer = document.querySelector("span#show-am2");
    let all = parseInt(num1.value) * parseInt(num2.value);
    let allKer = parseInt(num1.value)*2 + parseInt(num2.value)*2;
    showAll.innerHTML = all;
    showAllKer.innerHTML = allKer;
    
    let zumCub = parseInt(num1.value) * cub1;
    let zumCub1 = parseInt(num2.value) * cub2;
    
    document.querySelector(".cube").style.width = zumCub1 + "px";
    document.querySelector(".cube").style.height = zumCub + "px";
    }

    function timeClick(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        document.querySelector("#time").innerHTML = (hours + " óra "  + minutes + " perc " + seconds + " másodperc "); 
    }
    
    function dateClick(){
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        document.querySelector("#date").innerHTML = (year + " - "  + month + " - " + day); 
    }

    function calcNumCircle() {
        let circleNumber = document.querySelector("#circle");
        const piNumber = 3.141592;

        let circleKer = parseInt(circleNumber.value) * parseInt(circleNumber.value) * piNumber;
        let showAll2 = document.querySelector("span#show-am3");
        showAll2.innerHTML = circleKer;

        let circleTer = parseInt(circleNumber.value) * 2 * piNumber;
        let showAll3 = document.querySelector("span#show-am4");
        showAll3.innerHTML = circleTer;

        let circlePixel = 25;
        let circlePix1 = parseInt(circleNumber.value) * circlePixel;

        document.querySelector(".circle-box").style.width = circlePix1 * 2 + "px";
        document.querySelector(".circle-box").style.height = circlePix1 * 2 + "px";
    }

    function carShow() {
        let carNameShow = document.querySelector("#car");
        let showCarName = document.querySelector("span#carSpan");
        showCarName.innerHTML = carNameShow.value;
    }