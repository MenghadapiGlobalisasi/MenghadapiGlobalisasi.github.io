if (window.innerWidth > 800) {
    let horizontalContainer = document.getElementById("horizontal-container");

    window.addEventListener("mouseover", function (event) {
        if (
            event.target.classList.contains("card-container") ||
            event.target.classList.contains("card")
        ) {
            event.target.addEventListener("wheel", function (event) {
                if (
                    horizontalContainer.scrollLeft +
                        horizontalContainer.offsetWidth <
                        horizontalContainer.scrollWidth ||
                    event.deltaY < 0
                ) {
                    event.preventDefault();
                    document.getElementById("horizontal-container").scrollTo({
                        top: 0,
                        left: horizontalContainer.scrollLeft + event.deltaY * 2,
                        behavior: "smooth",
                    });
                }
            });
        }
    });
}
