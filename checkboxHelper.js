(function(){

	var checkedState;

	function bindChangeHelper ( ) {

		$(document).on('mouseup.checkboxHelper keyup.checkboxHelper', 'input[type="checkbox"]', function( e ){

			// Fire the change event manually on click or spacebar.
			if ( this.indeterminate && (e.type !== 'keyup' || e.keyCode === 32) ) {
				$(this).trigger('change', ['fixed']);
			}
		});
	}

	function setup ( ) {

	// Create a unchecked checkbox with indeterminate state
	var changeHasFired = false,
		body = document.body,
		test = document.createElement("input");

		// Setup the test input.
		test.type = "checkbox";
		test.checked = false;
		test.indeterminate = true;
		//cache $(test)
		$test = $(test);
		//See the next links about selectors caching
		//https://ttmm.io/tech/selector-caching-jquery/
		//https://pseudosavant.com/blog/2014/01/30/js-101-cache-your-selectors/
		// Prevent clicks flowing into the document.
		$test.on("click", function(e) {
			e.stopPropagation();
			//No need to write $(test).on again
		}).on("change", function(e) {
			// Prevent changes flowing into the document. Keep track of state.
			changeHasFired = true;
			e.stopPropagation();
		});

		// Click the checkbox after dropping it in the document.
		body.appendChild(test);
		test.click();
		body.removeChild(test);

		// See if clicking the checkbox fired a change event.
		if ( !changeHasFired ) {
			bindChangeHelper();
		}

		// Check if the checkbox is now checked and cache the result
		if ( test.checked ) {
			checkedState = false;
		} else {
			checkedState = true;
		}
	}

	function isChecked ( n ) {
		return n.checked === true && n.indeterminate !== true;
	}

	function isDisabled ( n ) {
		return n.disabled === true;
	}

	function isIndeterminate ( n ) {
		return n.indeterminate === true;
	}

	function isOff ( n ) {
		return n.checked === false;
	}

	// Set/get the state of a checkbox
	function handleCheckBox ( state ) {

		// Can't use this[0] otherwise.
		if ( this.length ) {

			switch ( state ) {
				case ':checked':
					return isChecked(this[0]);
				case ':disabled':
					return isDisabled(this[0]);
				case ':indeterminate':
					return isIndeterminate(this[0]);
				case ':off':
					return isOff(this[0]);
			}
		}

		return this.filter(':checkbox').each(function(){

			switch ( state ){

				case 'disabled':
					this.indeterminate = false;
					this.checked = false;
					this.disabled = true;
					break;

				case 'off':
					this.removeAttribute('disabled');
					this.indeterminate = false;
					this.checked = false;
					break;

				case 'indeterminate':
					this.removeAttribute('disabled');
					this.checked = checkedState;
					this.indeterminate = true;
					break;

				case 'checked':
					this.removeAttribute('disabled');
					this.indeterminate = false;
					this.checked = true;
					break;
			}
		});
	}

	// Make available for jQuery
	$.fn.cb = handleCheckBox;

	setup();

}());
