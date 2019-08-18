import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public dateUpdated: string;
    public summarys: Summary[];

    constructor() { }

    ngOnInit() {
        this.dateUpdated = '17 Aug, 2019';
        this.summarys = [{
            name: 'MailChimp',
            icon: 'mailchimp.ico',
            description: 'contacts',
            values: [{
                year: 2019,
                month: 'August',
                value: 4
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
                month: 'August',
                value: 28
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
                month: 'August',
                value: 119
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
                month: 'August',
                value: 1
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
                month: 'August',
                value: 259
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
                month: 'August',
                value: 87.8
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
                month: 'August',
                value: 5
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
                month: 'August',
                value: 510
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
                month: 'August',
                value: 13
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
