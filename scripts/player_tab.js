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