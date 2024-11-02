const service_para = document.querySelectorAll(".specific-service");
const allParagraph = document.querySelectorAll(".specific_services_paragraph");
const allCloseBtn = document.querySelectorAll(".fa-solid.fa-x.close");

if (window.innerWidth <= 600) {

	service_para.forEach((element) => {
		element.addEventListener("click", () => {
			console.log("click3")
			let paragraph = element.querySelector("p")
			let service = element
			let closeBtn = element.querySelector(".fa-solid.fa-x.close")
	
			allParagraph.forEach((element) => {
				element.style.display = "none"
			})
	
			allCloseBtn.forEach((element) => {
				element.style.display = "none"
			})
	
			service_para.forEach((element) => {
				element.style.width = "45%"
			})
	
			closeBtn.style.display = "block";
			paragraph.style.display = "block";
			service.style.width = "100%";
		})
	
	
	})
	
		allCloseBtn.forEach((element) => {
			element.addEventListener("click", (event) => {
				event.stopPropagation()
				console.log("click1")
				element.style.display = "none"
				let service = element.parentElement;
				if (service) {
					service.style.width = "45%"
					console.log("click2")
				}
				allParagraph.forEach((element) => {
					element.style.display = "none"
				})
			})
		})

}

