import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

    @Input() summary: Summary;

    constructor() { }

    ngOnInit() {
    }

    totalValue(summarys: SummaryDetail[]) {
        return summarys.map(s => s.value).reduce((p, c) => p + c, 0);
    }

    averageValue(summarys: SummaryDetail[]) {
        return (this.totalValue(summarys) / summarys.length).toFixed(2);
    }

}
