function toggleSolution(btn) {
    const solution = btn.nextElementSibling;
    if (solution.style.display === "none") {
        solution.style.display = "block";
        btn.textContent = "Hide Solution";
        btn.style.background = "#4e8c5a";
        btn.style.color = "#fff";
    } else {
        solution.style.display = "none";
        btn.textContent = "Show Solution";
        btn.style.background = "";
        btn.style.color = "";
    }
}