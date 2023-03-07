import LogTableBuilder from './LogTableBuilder'

export default class LogViewer {
    protected startDate: Date;

    protected endDate: Date;

    protected offset: Number = 0;

    protected limit: Number = 50;

    protected tableBuilder: LogTableBuilder;

    constructor() {
        this.endDate = new Date();
        this.startDate = new Date((new Date).setDate(this.endDate.getDate() - 7));
    }

    async load() {
        let data = {
            startDate: this.startDate.toUTCString(),
            endDate: this.endDate.toUTCString(),
            limit: this.limit,
            offset: this.offset,
        };
        const response = await fetch("/laravel-logger", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "X-CSRF-TOKEN": (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content,
            },
            body: JSON.stringify(data)
        })
        return response.json();
    }


    update(startDate: Date, endDate: Date, limit: Number, offset: Number) {
        if (startDate) this.startDate = startDate;
        if (endDate) this.endDate = endDate;
        if (limit) this.limit = limit;
        if (offset) this.offset = offset;
        this.load().then((res) => {
            this.tableBuilder.setData(res).buildBody();
        });
    }

    async build(dom: HTMLElement, enableFilter: boolean = true, enableChart: boolean = true) {
        this.tableBuilder = new LogTableBuilder(dom);
        this.load().then((res) => {
            this.tableBuilder
                .setHeaders(Object.keys(res[0]))
                .setData(res)
                .buildHeaders()
                .buildBody()
                .buildFooter();

            if (enableFilter) this.tableBuilder.buildButtons(this.startDate, this.endDate);

            if (enableChart) this.tableBuilder.buildChart();

            this.tableBuilder.listenEvents();

            document.getElementById('laravel-logger-filter').addEventListener('click', () => {
                const startDate = (document.getElementById('laravel-logger-start-date') as HTMLInputElement).value;
                const endDate = (document.getElementById('laravel-logger-end-date') as HTMLInputElement).value;
                const offset = (document.getElementById('laravel-logger-offset') as HTMLInputElement).value;
                const limit = (document.getElementById('laravel-logger-limit') as HTMLInputElement).value;
                this.update(new Date(startDate), new Date(endDate), parseInt(limit), parseInt(offset));
            });
        })
    }
}
