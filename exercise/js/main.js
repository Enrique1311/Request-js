const $myBtn = document.querySelector(".my-btn"),
	$passedAmount = document.querySelector(".passed-amount"),
	$failedAmount = document.querySelector(".failed-amount");

const getData = async () => {
	try {
		let res = await axios("../asses/info.txt");
		let data = res.data;
		console.log(data);

		$passedAmount.textContent = data.passed;
		$failedAmount.textContent = data.failed;
	} catch (e) {
		document.querySelector(
			".error"
		).innerHTML = `<h3 class="error">API Error</h3>`;
	}
};

$myBtn.addEventListener("click", getData);
