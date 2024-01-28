const files = document.getElementById("playerData");
const out = document.getElementById("jsonOut");
files.addEventListener("input", () => {
    const file = files.files[0];

    const reader = new FileReader();

    reader.onload = (ev) => {
        console.log(JSON.parse(ev.target.result));
    };

    reader.readAsText(file, "utf8");
});