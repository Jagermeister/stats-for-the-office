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
            value: '14',
            description: 'subscribers'
        }, {
            name: 'Analytics',
            value: '38',
            description: 'users'
        }, {
            name: 'Analytics',
            value: '161',
            description: 'pageviews'
        }, {
            name: 'Search',
            value: '1',
            description: 'click'
        }, {
            name: 'Search',
            value: '138',
            description: 'impressions'
        }, {
            name: 'Search',
            value: '85.1',
            description: 'page rank'
        }, {
            name: 'Twitter',
            value: '6',
            description: 'tweets'
        }, {
            name: 'Twitter',
            value: '430',
            description: 'impressions'
        }, {
            name: 'Twitter',
            value: '12',
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
