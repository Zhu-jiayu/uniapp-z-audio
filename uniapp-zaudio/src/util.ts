export function formatSeconds(seconds: number | string): string {
    var result = typeof seconds === "string" ? parseFloat(seconds) : seconds;
    if (isNaN(result)) return "";
    let h: any =
        Math.floor(result / 3600) < 10
            ? "0" + Math.floor(result / 3600)
            : Math.floor(result / 3600);
    let m: any =
        Math.floor((result / 60) % 60) < 10
            ? "0" + Math.floor((result / 60) % 60)
            : Math.floor((result / 60) % 60) + h * 60;
    let s: any =
        Math.floor(result % 60) < 10
            ? "0" + Math.floor(result % 60)
            : Math.floor(result % 60);
    return `${m}:${s}`;
}

export function throttle(action: Function, delay: number): Function {
    var statTime: number = 0;
    return function (this: any, ...args: any) {
        var currTime = +new Date();

        if (currTime - statTime > delay) {
            action.apply(this, args);
            statTime = currTime;
        }
    }
}

export class EventBus {
    private _events: any;
    constructor() {
        this._events = new Map();
    }
    protected on(event: any, action: string, fn: any): void {
        if (event !== undefined && action !== undefined) {
            let arr = this._events.get(event);

            let hasAction = arr
                ? arr.findIndex((i: { action: string }) => i.action == action)
                : -1;
            if (hasAction > -1) {
                return;
            }
            this._events.set(event, [
                ...(this._events.get(event) || []),
                {
                    action,
                    fn,
                },
            ]);
        }
    }
    private has(event: any): boolean {
        return this._events.has(event);
    }
    protected emit(event: any, data?: any): void {
        if (!this.has(event)) {
            return;
        }
        let arr = this._events.get(event);
        arr.forEach((i: { fn: (arg0: any) => void }) => {
            i.fn(data);
        });
    }
    protected off(event: any, action: any): void {
        if (!this.has(event)) {
            return;
        }
        let arr = this._events.get(event);
        let newdata = arr.filter((i: { action: any }) => i.action !== action);
        this._events.set(event, [...newdata]);
    }
}