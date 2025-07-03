const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

const showMorebtn = document.querySelector(".btn")
const workProject = document.querySelectorAll(".work")


const showOtherProject= () => {
    workProject.forEach((ele) => {
        if (ele.classList.contains("show") === true) {
            ele.classList.toggle("hidden")
        }

    })
}

showMorebtn.addEventListener("click", () => {
    showOtherProject()
})

function opentab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}