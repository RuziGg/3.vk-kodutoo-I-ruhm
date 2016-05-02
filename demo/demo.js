var calendars = {};

$(document).ready( function() {
    console.info(
        'Welcome to the CLNDR demo. Click around on the calendars and' +
        'the console will log different events that fire.');

    var thisMonth = moment().format('YYYY-MM');
    var eventArray = [
        {
            title: 'Multi-Day Event',
            endDate: thisMonth + '-14',
            startDate: thisMonth + '-10'
        }, {
            endDate: thisMonth + '-23',
            startDate: thisMonth + '-21',
            title: 'Another Multi-Day Event'
        }, {
            date: thisMonth + '-27',
            title: 'Single Day Event'
        }
    ];

    calendars.clndr1 = $('.cal1').clndr({
        events: eventArray,
        clickEvents: {
            click: function (target) {
                console.log('Cal-1 clicked: ', target);
            },
            today: function () {
                console.log('Cal-1 today');
            },
            nextMonth: function () {
                console.log('Cal-1 next month');
            },
            previousMonth: function () {
                console.log('Cal-1 previous month');
            },
            onMonthChange: function () {
                console.log('Cal-1 month changed');
            },
            nextYear: function () {
                console.log('Cal-1 next year');
            },
            previousYear: function () {
                console.log('Cal-1 previous year');
            },
            onYearChange: function () {
                console.log('Cal-1 year changed');
            },
            nextInterval: function () {
                console.log('Cal-1 next interval');
            },
            previousInterval: function () {
                console.log('Cal-1 previous interval');
            },
            onIntervalChange: function () {
                console.log('Cal-1 interval changed');
            }
        },
        multiDayEvents: {
            singleDay: 'date',
            endDate: 'endDate',
            startDate: 'startDate'
        },
        showAdjacentMonths: true,
        adjacentDaysChangeMonth: false
    });

    calendars.clndr2 = $('.cal2').clndr({
        lengthOfTime: {
            days: 14,
            interval: 7
        },
        events: eventArray,
        multiDayEvents: {
            singleDay: 'date',
            endDate: 'endDate',
            startDate: 'startDate'
        },
        template: $('#template-calendar').html(),
        clickEvents: {
            click: function (target) {
                console.log('Cal-2 clicked: ', target);
            },
            nextInterval: function () {
                console.log('Cal-2 next interval');
            },
            previousInterval: function () {
                console.log('Cal-2 previous interval');
            },
            onIntervalChange: function () {
                console.log('Cal-2 interval changed');
            }
        }
    });

    calendars.clndr3 = $('.cal3').clndr({
        lengthOfTime: {
            months: 2,
            interval: 1
        },
        events: eventArray,
        multiDayEvents: {
            endDate: 'endDate',
            startDate: 'startDate'
        },
        clickEvents: {
            click: function (target) {
                console.log('Cal-3 clicked: ', target);
            },
            nextInterval: function () {
                console.log('Cal-3 next interval');
            },
            previousInterval: function () {
                console.log('Cal-3 previous interval');
            },
            onIntervalChange: function () {
                console.log('Cal-3 interval changed');
            }
        },
        template: $('#template-calendar-months').html()
    });


    $(document).keydown( function(e) {
        if (e.keyCode == 37) {
            calendars.clndr1.back();
            calendars.clndr2.back();
            calendars.clndr3.back();
        }

        if (e.keyCode == 39) {
            calendars.clndr1.forward();
            calendars.clndr2.forward();
            calendars.clndr3.forward();
        }
    });
});