import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public summarys: Summary[];

    constructor() { }

    ngOnInit() {
        this.summarys = [{
            name: 'MailChimp',
            value: '15',
            description: 'subscribers'
        }, {
            name: 'Analytics',
            value: '44',
            description: 'users'
        }, {
            name: 'Analytics',
            value: '190',
            description: 'pageviews'
        }, {
            name: 'Search',
            value: '1',
            description: 'click'
        }, {
            name: 'Search',
            value: '287',
            description: 'impressions'
        }, {
            name: 'Search',
            value: '85.7',
            description: 'page rank'
        }, {
            name: 'Twitter',
            value: '6',
            description: 'tweets'
        }, {
            name: 'Twitter',
            value: (126 + 96 + 133 + 66 + 84 + 66).toString(),
            description: 'impressions'
        }, {
            name: 'Twitter',
            value: (4 + 0 + 1 + 3 + 4 + 5).toString(),
            description: 'engagement'
        }, {
            name: 'LinkedIn',
            value: '3',
            description: 'posts'
        }, {
            name: 'LinkedIn',
            value: (262 + 358 + 1361).toString(),
            description: 'views'
        }, {
            name: 'LinkedIn',
            value: (7 + 3 + 23).toString(),
            description: 'reactions'
        }, {
            name: 'GumRoad',
            value: '1',
            description: 'pre-order'
        }, {
            name: 'GumRoad',
            value: '$89',
            description: 'revenue'
        }
        ];
    }

}
