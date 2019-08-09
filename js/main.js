window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName == "back")
            try {
                //tizen.application.getCurrentApplication().exit();
            		window.history.back()
            } catch (ignore) {}
    });
};

$(function() {
	$.ajax({
        url: "https://neti-galaxywatch-nora2.azurewebsites.net/api/GetPatientResource",
        headers: { "x-functions-key": "2ZbTI46j2QTBuo3t11IvQPGfF2cBIuvHt1hnXICWkoaqMtbQKLQHkw==" },

        // type: "POST",
        success: function(data) {
        		$('.result').html(data.patientName);  
        }
     });
});

