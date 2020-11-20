function myFunction() {
    // console.log(document.getElementById("input_frm1").value);
    let iteration = document.getElementById("iteration").value
    let nTry = document.getElementById("nTry").value
    let chanceOfSuccess = document.getElementById("probability").value
    let output = monteCarlo(iteration, nTry, chanceOfSuccess)

    document.getElementById("output").innerHTML = output
}

document.getElementById("buttonSubmit").addEventListener("click", move);
document.getElementById("buttonSubmit").addEventListener("click", myFunction);



function monteCarlo (iteration, nTry, chanceOfSuccess) {
    let peoples = [] //successBool, numOfSuccess
    let arrNumOfSuccess = []
    let arrSuccessBool = []
    let output = ''
    
    for (let i = 0; i < iteration; i++) {

        // if (i%100 == 0) {
        //     document.getElementById("myProgress").innerHTML = i
        // }

        // peoples.push([false, 0])
        person = [false, 0]
    
        for (let j = 0; j < nTry; j++) {
            r = Math.random()
            if (r < chanceOfSuccess) {
                person[0] = true
                person[1] += 1          
            }
        }
        arrSuccessBool.push(person[0])
        arrNumOfSuccess.push(person[1])
    }
    
    let sortedArrSuccessBool = arrSuccessBool.sort()
    let sortedArrNumOfSuccess = arrNumOfSuccess.sort()
    
    output += `Number of people who are succeed: ${sortedArrSuccessBool.filter(x => x === true).length}<br>`
    output += `Number of people who are failed: ${sortedArrSuccessBool.filter(x => x === false).length}<br><br>`
    
    output += `Out of ${iteration} people who grinds the item ${nTry} time(s):<br>`
    let isAngkaAwalUdahMuncul = false
    for (let i = 1; i < 100; i++) {
        let countNumOfSuccess = sortedArrNumOfSuccess.filter(x => x === i).length
        if (countNumOfSuccess != 0) {
            isAngkaAwalUdahMuncul == true
            output += `Number of people who got that item ${i} time(s) is ${countNumOfSuccess}, or ${countNumOfSuccess*100/iteration}%<br>`
        }
        if (countNumOfSuccess == 0 && isAngkaAwalUdahMuncul == true) {break}
    }
    return output
}

// code below is uncompleted
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
} 