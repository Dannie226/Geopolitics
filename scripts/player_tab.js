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

    function playerSelect(id, id2){
        let playerID = document.getElementById(id);
        playerID.checked=true;
    // Dannie 1       See css Dannie1 first ---- This is where I tried working it out but failed

        // document.querySelectorAll(".diplomacyPlayerSelect")[0].style.backgroundColor = "red";
        // const nodeList2 = document.querySelectorAll(".diplomacyPlayerSelect > div:nth-child(4n)");
        // for (let i = 0; i < nodeList2.length; i++) {
        //     nodeList2[i].style.backgroundColor = "red";
        // }

        // document.getElementById(id2).style.backgroundColor = "blue";
    }



// NOTE, this is me just stealing W3 custom selector (:

    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "tradeCategory":*/
    x = document.getElementsByClassName("tradeSelect");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);