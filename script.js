// ---------------------------------------------
// Abrir a secção de "informações" quando clicar
// ---------------------------------------------
const buttons = document.querySelectorAll('.info');
buttons.forEach(button => {
	button.addEventListener('click', () => {
		const campaign = button.closest('.campaign');
		campaign.classList.toggle('active');
	});
});
