declare interface Summary {
    name: string;
    icon?: string;
    isAverage?: boolean;
    description?: string;
    valuePrefix?: string;
    values?: SummaryDetail[];
}

declare interface SummaryDetail {
    year: number;
    month: string;
    value: number;
}