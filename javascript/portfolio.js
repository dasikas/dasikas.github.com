function onClickHome() {		
	changeButtonClass("#homeButton");
	$("#homeId").show();
	$("#aboutId").hide();
	$("#skillSetsId").hide();
	$("#designSamplesId").hide();
	$("#usefulLinksId").hide();			
}

function onClickAbout() {		
	changeButtonClass("#aboutButton");
	$("#homeId").hide();
	$("#aboutId").show();
	$("#skillSetsId").hide();
	$("#designSamplesId").hide();
	$("#usefulLinksId").hide();			
}

function onClickSkillSets() {	
	changeButtonClass("#skillSetsButton");
	$("#homeId").hide();
	$("#aboutId").hide();
	$("#skillSetsId").show();
	$("#designSamplesId").hide();
	$("#usefulLinksId").hide();			
}

function onClickDesignSamples() {		
	changeButtonClass("#designSamplesButton");
	$("#homeId").hide();
	$("#aboutId").hide();
	$("#skillSetsId").hide();
	$("#designSamplesId").show();
	$("#usefulLinksId").hide();			
}

function onClickUsefulLinks() {		
	changeButtonClass("#usefulLinksButton");
	$("#homeId").hide();
	$("#aboutId").hide();
	$("#skillSetsId").hide();
	$("#designSamplesId").hide();
	$("#usefulLinksId").show();			
}
function changeButtonClass(id) {
	$(id).removeClass("menuButton").addClass("menuButtonOnHover");
	if(id == "#homeButton") {
		$("#aboutButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#skillSetsButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#designSamplesButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#usefulLinksButton").removeClass("menuButtonOnHover").addClass("menuButton");
	}
	if(id == "#aboutButton") {
		$("#homeButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#skillSetsButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#designSamplesButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#usefulLinksButton").removeClass("menuButtonOnHover").addClass("menuButton");
	}
	if(id == "#skillSetsButton") {
		$("#homeButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#aboutButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#designSamplesButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#usefulLinksButton").removeClass("menuButtonOnHover").addClass("menuButton");
	}
	if(id == "#designSamplesButton") {
		$("#homeButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#aboutButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#skillSetsButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#usefulLinksButton").removeClass("menuButtonOnHover").addClass("menuButton");
	}
	if(id == "#usefulLinksButton") {
		$("#homeButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#aboutButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#skillSetsButton").removeClass("menuButtonOnHover").addClass("menuButton");
		$("#designSamplesButton").removeClass("menuButtonOnHover").addClass("menuButton");
	}
	
}