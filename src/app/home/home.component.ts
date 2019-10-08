import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public dday: Date;
    public dateUpdated: Date;
    public remainingDays: number;
    public summarys: Summary[];

    constructor() { }

    ngOnInit() {
        this.dday = new Date(2019, 10, 20);
        this.dateUpdated = new Date(2019, 8, 14);

        const millisecondsInADay = 1000 * 60 * 60 * 24;
        this.remainingDays = Math.max(
            Math.floor((this.dday.getTime() - this.dateUpdated.getTime()) / millisecondsInADay), 0);
        this.summarys = [{
            name: 'MailChimp',
            icon: 'mailchimp.ico',
            description: 'contacts',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 0
            }, {
                year: 2019,
                month: 'August',
                value: 5
            }, {
                year: 2019,
                month: 'July',
                value: 11
            }]
        }, {
            name: 'Analytics',
            icon: 'analytics.png',
            description: 'users',
            values: [{
                year: 2019,
                month: 'October',
                value: 1
            }, {
                year: 2019,
                month: 'September',
                value: 15
            }, {
                year: 2019,
                month: 'August',
                value: 34
            }, {
                year: 2019,
                month: 'July',
                value: 19
            }]
        }, {
            name: 'Analytics',
            icon: 'analytics.png',
            description: 'pageviews',
            values: [{
                year: 2019,
                month: 'October',
                value: 2
            }, {
                year: 2019,
                month: 'September',
                value: 25
            }, {
                year: 2019,
                month: 'August',
                value: 129
            }, {
                year: 2019,
                month: 'July',
                value: 71
            }]
        }, {
            name: 'Search',
            icon: 'search.png',
            description: 'click',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 1
            }, {
                year: 2019,
                month: 'August',
                value: 2
            }, {
                year: 2019,
                month: 'July',
                value: 0
            }]
        }, {
            name: 'Search',
            icon: 'search.png',
            description: 'impressions',
            values: [{
                year: 2019,
                month: 'October',
                value: 66
            }, {
                year: 2019,
                month: 'September',
                value: 273
            }, {
                year: 2019,
                month: 'August',
                value: 285
            }, {
                year: 2019,
                month: 'July',
                value: 28
            }]
        }, {
            name: 'Search',
            icon: 'search.png',
            description: 'page rank',
            isAverage: true,
            values: [{
                year: 2019,
                month: 'October',
                value: 55.5
            }, {
                year: 2019,
                month: 'September',
                value: 49.9
            }, {
                year: 2019,
                month: 'August',
                value: 85.2
            }, {
                year: 2019,
                month: 'July',
                value: 65.8
            }]
        }, {
            name: 'Twitter',
            icon: 'twitter-box.svg',
            description: 'tweets',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 3
            }, {
                year: 2019,
                month: 'August',
                value: 6
            }, {
                year: 2019,
                month: 'July',
                value: 1
            }]
        }, {
            name: 'Twitter',
            icon: 'twitter-box.svg',
            description: 'impressions',
            values: [{
                year: 2019,
                month: 'October',
                value: 62
            }, {
                year: 2019,
                month: 'September',
                value: 463
            }, {
                year: 2019,
                month: 'August',
                value: 709
            }, {
                year: 2019,
                month: 'July',
                value: 62
            }]
        }, {
            name: 'Twitter',
            icon: 'twitter-box.svg',
            description: 'engagement',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 5
            }, {
                year: 2019,
                month: 'August',
                value: 15
            }, {
                year: 2019,
                month: 'July',
                value: 4
            }]
        }, {
            name: 'LinkedIn',
            icon: 'linkedin-box.svg',
            description: 'posts',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 0
            }, {
                year: 2019,
                month: 'August',
                value: 3
            }, {
                year: 2019,
                month: 'July',
                value: 0
            }]
        }, {
            name: 'LinkedIn',
            icon: 'linkedin-box.svg',
            description: 'views',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 0
            }, {
                year: 2019,
                month: 'August',
                value: 262 + 358 + 1361
            }, {
                year: 2019,
                month: 'July',
                value: 0
            }]
        }, {
            name: 'LinkedIn',
            icon: 'linkedin-box.svg',
            description: 'reactions',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 0
            }, {
                year: 2019,
                month: 'August',
                value: 7 + 3 + 23
            }, {
                year: 2019,
                month: 'July',
                value: 0
            }]
        }, {
            name: 'GumRoad',
            icon: 'gumroad.ico',
            description: 'pre-order',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 0
            }, {
                year: 2019,
                month: 'August',
                value: 1
            }, {
                year: 2019,
                month: 'July',
                value: 0
            }]
        }, {
            name: 'GumRoad',
            icon: 'gumroad.ico',
            description: 'revenue',
            valuePrefix: '$',
            values: [{
                year: 2019,
                month: 'October',
                value: 0
            }, {
                year: 2019,
                month: 'September',
                value: 0
            }, {
                year: 2019,
                month: 'August',
                value: 89
            }, {
                year: 2019,
                month: 'July',
                value: 0
            }]
        }
        ];
    }

}
