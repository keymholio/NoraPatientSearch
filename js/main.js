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

var pos = 0;
//page = document.getElementById("main");

document.addEventListener('rotarydetent', function(ev) {
    /* Get the direction value from the event */
//	var popupTarget = ev.target;
//	var popup = popupTarget.getElementById('main');
    var direction = ev.detail.direction;
    var SCROLL_STEP = 50;

    if (direction == 'CW') {
        /* Add behavior for clockwise rotation */
    		//$(window).scrollTop(y);
    		pos = pos + 50;
    		$('#main').scrollTop(pos);
        console.log('clockwise' +  pos);
    } else if (direction == 'CCW') {
        /* Add behavior for counter-clockwise rotation */
        
        //$(window).scrollTop(y);
    		pos = pos - 50;
        $('#main').scrollTop(pos);
        console.log('counter-clockwise' + pos);
    }
});




