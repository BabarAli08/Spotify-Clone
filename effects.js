document.querySelectorAll(".songlist li").forEach((li) => {
    li.addEventListener("mousemove", (e) => {
        let rect = li.getBoundingClientRect();
        let x = e.clientX - rect.left; // Mouse X position inside element
        let y = e.clientY - rect.top; // Mouse Y position inside element
        li.style.setProperty("--x", `${x}px`);
        li.style.setProperty("--y", `${y}px`);
    });
});
