function sendMail(contactForm) {
	emailjs.send("gmail", "erica", {
		from_name: contactForm.name.value,
		from_email: contactForm.emailaddress.value,
		project_request: contactForm.projectsummary.value,
	})
	.then(
		function (response) {
			console.log("SUCCESS", response);
            document.getElementById("form-rest").reset();
		},
		function (error) {
			console.log("FAILED", error);
		}
	);
	return false;
}
