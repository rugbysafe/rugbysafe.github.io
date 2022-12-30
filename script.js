import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.2.3";

const injury_panel = document.getElementById('injury_panel');
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

function _hideall() {
	var panels = document.getElementsByClassName("overlay-panel");
	for (var i = 0; i < panels.length; i++) {
    	panels[i].classList.remove('overlay-show')
  	}
}
injuryDateInput.addEventListener('focus', () => {
	_hideall();
	injury_panel.classList.add("overlay-show");
});

stage1DateInput.addEventListener('focus', () => {
	_hideall();
	stage1_panel.classList.add("overlay-show");
});

stage2aDateInput.addEventListener('focus', () => {
	_hideall();
	stage2a_panel.classList.add("overlay-show");
});
stage2bDateInput.addEventListener('focus', () => {
	_hideall();
	stage2b_panel.classList.add("overlay-show");
});
stage3DateInput.addEventListener('focus', () => {
	_hideall();
	stage3_panel.classList.add("overlay-show");
});

stage4DateInput.addEventListener('focus', () => {
	_hideall();
	stage4_panel.classList.add("overlay-show");
});
stage5DateInput.addEventListener('focus', () => {
	_hideall();
	stage5_panel.classList.add("overlay-show");
});
stage6DateInput.addEventListener('focus', () => {
	_hideall();
	stage6_panel.classList.add("overlay-show");
});

injuryDateInput.addEventListener('keyup',({key}) => {
	if (key === "Enter") {
		calculateDates();
	}
});

injuryDateInput.addEventListener('focusout',() => {
	calculateDates();
});

function calculateDates() {
		var txt = injuryDateInput.value;
		var dt = new Date(txt);

		var DateTime = luxon.DateTime;
		var injuryDate = DateTime.fromFormat(txt,"dd/MM/yy");
		
		injuryDateInput.value = injuryDate.toFormat("dd/MM/yyyy");
				
		var stage1Date = injuryDate.plus({days:1});
		stage1DateInput.value = stage1Date.toFormat("dd/MM/yyyy");
		
		var stage2aDate = stage1Date.plus({days:2});
		stage2aDateInput.value = stage2aDate.toFormat("dd/MM/yyyy");
	
		//add the 48 hrs to the stage 2a date
		var stage2bDate = stage1Date.plus({days:14});
		stage2bDateInput.value = stage2bDate.toFormat("dd/MM/yyyy");

		//add the 48 hrs to the stage 2b date
		var stage3Date = stage2bDate.plus({days:2});
		stage3DateInput.value = stage3Date.toFormat("dd/MM/yyyy");

		//add the 48 hrs to the stage 3 date
		var stage4Date = stage3Date.plus({days:2});
		stage4DateInput.value = stage4Date.toFormat("dd/MM/yyyy");
		
		//add the 48 hrs to the stage 4 date
		var stage5Date = stage4Date.plus({days:2});
		stage5DateInput.value = stage5Date.toFormat("dd/MM/yyyy");

		//add the 48 hrs to the stage 5 date
		var stage6Date = stage5Date.plus({days:2});
		stage6DateInput.value = stage6Date.toFormat("dd/MM/yyyy");
		
};
