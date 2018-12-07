export interface IMeterConfig {
    value: number;
    min: number;
    max: number;
    unit: string;
    format: MeterFormat;
}

export enum MeterFormat {
    currency = 'currency'
}
