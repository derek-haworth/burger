$(function() {
	$('.input-error').hide();

	// Submit Button - Add A New Burger
	$("#btnSubmit").on("click", function(event) {
		event.preventDefault();
		console.log("Submit Button was pressed.");
		let burgerName = $("#burgerName").val().trim()
		if (burgerName == "") {
			$('.input-error').show();
			return;
		}

		// Insert new burger name to the burger_name in the burgers table
		$.ajax("/api/burgers", {
			type: "POST",
			data: { 
				burgerName: burgerName 
			}
		}).then(
			function() {
				location.reload();
			}
		);
	});

	// Add To Menu button 
	$(".devour").on("click", function(event) {
		event.preventDefault();
		// console.log("Delete Button was pressed.");
		// Get the ID of the burger clicked
		let thisID = $(this).attr("data-id");
		// Update the attr of the correct burger (by id) to 1
		$.ajax("/api/burgers/" + thisID, {
			type: "PUT",
			data: { id: thisID }
		}).then(
			function() {
				location.reload();
			}
		);
	})
});