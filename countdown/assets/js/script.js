var run = function(countdownid, noteid, year, month, day) {
	
	var note = $('#' + noteid),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;
	}
	var end = new Date();
	end.setFullYear(year);
	end.setMonth(month - 1);
	end.setDate(day);
	end.setHours(0);
	end.setMinutes(0);
	end.setSeconds(0);
	$('#' + countdownid).countdown({
		timestamp	: end.valueOf(),
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			note.html(message);
		}
	});
}


