# workday-scheduler
# Starting Workday Scheduler Assignment
# time clock is displayed under work-day-schedulr header
# Bootstrap col-md-3, col-md-6 and col-md-3 are used
# to display, time of the day, textarea and save buttons, respectively
# Each <div class="row"> conatines time heading <h6> and spanned over 3-columns,
# then each textarea is spanned over 6-columns and save button over rest of the 12-columns sapn.
# each textarea has an id  in the form of "#-plan" ( from 9:00 am to 6:00 pm ), 
# and 9-plan to 18-plan , respectively,.
# Save buttons ids are from 9-btn to 18-btn.
# Textarea "id" is split using Jquery "split method"
# then the "for loop" is used to get stored messages 
# clicking on the save buttons on each time.
# background textareas' colors are also changed based on current, past and future timings.
# using CSS past, present and future classes.
# See detailed comments in the Javascript files on
# split method and concatenating the # and "-plan" id,
# and then using this logic for storing and retrieving 
# messages from the local storage.


