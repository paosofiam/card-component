var number=[0,0,0,0];

myLoop("resultReaction",0);
myLoop("resultMemory",1);
myLoop("resultVerbal",2);
myLoop("resultVisual",3);
getAttribute();

function myLoop(ID,i) {
    document.getElementById(ID).innerHTML = number[i];
    number[i]++;
    setTimeout(function () {
      if (number[i] <= data[i].score) {
        myLoop(ID,i);
      }
    }, 15);
}

function getAttribute() {
    const elements = ['element1','element2','element3','element4'];
    const SRCs = ['img1','img2','img3','img4'];
    for(i=0;i<4;i++){
        document.getElementById(elements[i]).innerHTML = data[i].category;
        document.getElementById(SRCs[i]).src = data[i].icon;
    }
}