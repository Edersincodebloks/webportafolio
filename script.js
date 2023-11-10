const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 55);

});

//For Focus on Contact Fomr //
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll(".contact-input");

    inputs.forEach((ipt) => {
        ipt.addEventListener("focus", () => {

            ipt.parentNode.classList.add("focus");
            ipt.parentNode.classList.add("not-empty");
        });

        ipt.addEventListener("blur", () => {
            if (ipt.value == "") {
                ipt.parentNode.classList.remove("not-empty");
            }
            ipt.parentNode.classList.remove("focus");
        });

        const storeadValue = localStorage.getItem(ipt.name);

        if (storeadValue) {
            ipt.value = storeadValue;
            ipt.parentNode.classList.add("not-empty");
        }

        ipt.addEventListener("input", () => {
            localStorage.setItem(ipt.name.value);
        })
    })

})