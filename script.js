// ---------------------------------------------
// Abrir a secção de "informações" quando clicar
// ---------------------------------------------
// Get all buttons with the class 'learn-more-btn'
const buttons = document.querySelectorAll('.learn-more-btn');
// Loop through each button and add an event listener
buttons.forEach(button => {
	button.addEventListener('click', () => {
		// Toggle the 'active' class on the parent .campaign div
		const campaign = button.closest('.campaign');
		campaign.classList.toggle('active');
	});
});