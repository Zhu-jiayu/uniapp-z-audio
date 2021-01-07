export declare function formatSeconds(seconds: number | string): string;
export declare function throttle(action: Function, delay: number): Function;
export declare class EventBus {
    private _events;
    constructor();
    protected on(event: any, action: string, fn: any): void;
    private has;
    protected emit(event: any, data?: any): void;
    protected off(event: any, action: any): void;
}
