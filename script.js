import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";
const stage1 = document.getElementById('stage1');
const stage2a = document.getElementById('stage2a');
const stage2b = document.getElementById('stage2b');
const stage3 = document.getElementById('stage3');
const stage4 = document.getElementById('stage4');
const stage5 = document.getElementById('stage5');
const stage6 = document.getElementById('stage6');

const stage1_panel = document.getElementById('stage1_panel');
const stage2a_panel = document.getElementById('stage2a_panel');
const stage2b_panel = document.getElementById('stage2b_panel');
const stage3_panel = document.getElementById('stage3_panel');
const stage4_panel = document.getElementById('stage4_panel');
const stage5_panel = document.getElementById('stage5_panel');
const stage6_panel = document.getElementById('stage6_panel');

const injuryDateInput = document.getElementById("injurydate");
const stage1DateInput = document.getElementById("stage1");
const stage2aDateInput = document.getElementById("stage2a");
const stage2bDateInput = document.getElementById("stage2b");
const stage3DateInput = document.getElementById("stage3");
const stage4DateInput = document.getElementById("stage4");
const stage5DateInput = document.getElementById("stage5");
const stage6DateInput = document.getElementById("stage6");

stage1.addEventListener('focus', () => {
	stage1_panel.classList.add("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage2a.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.add("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage2b.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.add("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage3.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.add("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});

stage4.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.add("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage5.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.add("overlay-show");
	stage6_panel.classList.remove("overlay-show");
});
stage6.addEventListener('focus', () => {
	stage1_panel.classList.remove("overlay-show");
	stage2a_panel.classList.remove("overlay-show");
	stage2b_panel.classList.remove("overlay-show");
	stage3_panel.classList.remove("overlay-show");
	stage4_panel.classList.remove("overlay-show");
	stage5_panel.classList.remove("overlay-show");
	stage6_panel.classList.add("overlay-show");
});

injuryDateInput.addEventListener('keyup',({key}) => {
	if (key === "Enter") {
		var txt = injuryDateInput.value;
		var dt = new Date(txt);

		var DateTime = luxon.DateTime;
		var injuryDate = DateTime.fromFormat(txt,"dd/MM/yy")

		var stage1Date = injuryDate.plus({days:1});
		stage1DateInput.value = stage1Date.toFormat("dd/MM/yy");
		
		var stage2aDate = stage1Date.plus({days:2});
		stage2aDateInput.value = stage2aDate.toFormat("dd/MM/yy");
	
		//add the 48 hrs to the stage 2a date
		var stage2bDate = stage1Date.plus({days:14});
		stage2bDateInput.value = stage2bDate.toFormat("dd/MM/yy");

		//add the 48 hrs to the stage 2b date
		var stage3Date = stage2bDate.plus({days:2});
		stage3DateInput.value = stage3Date.toFormat("dd/MM/yy");

		//add the 48 hrs to the stage 3 date
		var stage4Date = stage3Date.plus({days:2});
		stage4DateInput.value = stage4Date.toFormat("dd/MM/yy");
		
		//add the 48 hrs to the stage 4 date
		var stage5Date = stage4Date.plus({days:2});
		stage5DateInput.value = stage5Date.toFormat("dd/MM/yy");

		//add the 48 hrs to the stage 5 date
		var stage6Date = stage5Date.plus({days:2});
		stage6DateInput.value = stage6Date.toFormat("dd/MM/yy");
		
		var returnDate = injuryDate.plus({days:23});
		console.log(returnDate.toFormat("dd/MM/yy"));
	}
});
