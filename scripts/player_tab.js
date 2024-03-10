function main() {
    const tabs = Array.from(document.getElementsByClassName("tab"));
    let prevPanel = tabs[0].children[0];
    let prevButton = tabs[0].children[1];
    tabs.forEach(elem => {
        const panel = elem.children[0];
        const button = elem.children[1];
 
 
        button.children[0].addEventListener("change", () => {
            if(prevPanel == panel) {
                prevPanel.classList.remove("animate");
                prevPanel.classList.add("return");
 
 
                prevButton.classList.remove("animate");
                prevButton.classList.add("return");
 
 
                prevPanel = null;
                return;
            } else if(prevPanel != null) {
                prevPanel.classList.remove("animate");
                prevPanel.classList.add("return");
 
 
                prevButton.classList.remove("animate");
                prevButton.classList.add("return");
            }
 
 
            panel.classList.remove("return");
            panel.classList.add("animate");
 
 
            button.classList.remove("return");
            button.classList.add("animate");
 
 
            prevPanel = panel;
            prevButton = button;
        });
    });
 }
 
 
 main();
 
 
    function changeTheme(backdrop, border, text, background) {
         document.body.style.background=backdrop;
         document.querySelectorAll('p').forEach(e=>e.style.border=border);
         document.querySelectorAll('p').forEach(e=>e.style.color=text);
         document.querySelectorAll('p').forEach(e=>e.style.background=background);
     }
 
 
  // Yes, you will prob find a better way of doing this...
    document.querySelector("#backdropStyle").addEventListener("input",backdropStyle);
    function backdropStyle(){
      let backdrop = document.getElementById("backdropStyle").value;
      document.body.style.background=backdrop;
    }
 
 
    document.querySelector("#borderStyle").addEventListener("input",borderStyle);
    function borderStyle(){
      let border = '4px solid'.concat(document.getElementById("borderStyle").value);
      document.querySelectorAll('p').forEach(e=>e.style.border=border);
    }
 
 
    document.querySelector("#backgroundStyle").addEventListener("input",backgroundStyle);
    function backgroundStyle(){
      let background = document.getElementById("backgroundStyle").value;
      document.querySelectorAll('p').forEach(e=>e.style.background=background);
    }
 
 
    document.querySelector("#textStyle").addEventListener("input",textStyle);
    function textStyle(){
      let text = document.getElementById("textStyle").value;
      document.querySelectorAll('p').forEach(e=>e.style.color=text);
    }
 

    // Industry Tab Note to dannny the manny -- Idk how to condense this into just one thing or if thats even possible (prob not)
    var medFlip = document.querySelector('.medicineFlip');
    medFlip.addEventListener( 'click', function() {
        medFlip.classList.toggle('is-flipped');
    });
    var sciFLip = document.querySelector('.scienceFlip');
    sciFLip.addEventListener( 'click', function() {
        sciFLip.classList.toggle('is-flipped');
    });
    var mineFlip = document.querySelector('.miningFlip');
    mineFlip.addEventListener( 'click', function() {
        mineFlip.classList.toggle('is-flipped');
    });
    var agrFlip = document.querySelector('.agricultureFlip');
    agrFlip.addEventListener( 'click', function() {
        agrFlip.classList.toggle('is-flipped');
    });
    var busFlip = document.querySelector('.businessFlip');
    busFlip.addEventListener( 'click', function() {
        busFlip.classList.toggle('is-flipped');
    });
    var enerFlip = document.querySelector('.energyFlip');
    enerFlip.addEventListener( 'click', function() {
        enerFlip.classList.toggle('is-flipped');
    });