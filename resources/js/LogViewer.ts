import LogTableBuilder from './LogTableBuilder'
import LogChartBuilder from "./LogChartBuilder";
import {Carbon} from "js-utils";

export default class LogViewer {
    protected startDate: Date;

    protected endDate: Date;

    protected offset: Number = 0;

    protected limit: Number = 50;

    protected tableBuilder: LogTableBuilder;

    protected chartBuilder: LogChartBuilder;

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
            this.chartBuilder.update(res);
        });
    }

    async build(dom: HTMLElement, enableFilter: boolean = true, enableChart: boolean = true) {
        this.tableBuilder = new LogTableBuilder(dom);
        this.chartBuilder = new LogChartBuilder(dom);
        this.load().then((res) => {
            if (enableChart) this.chartBuilder.build(res);

            if (enableFilter) this.buildButtons(dom, this.startDate, this.endDate);

            this.tableBuilder
                .setupTable()
                .setData(res)
                .setHeaders(Object.keys(res[0]))
                .buildHeaders()
                .buildBody()
                .buildFooter();

            this.tableBuilder.listenEvents();
        })
    }

    convertToDateString(date: Date) {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        const appendZero = (num: number) => {
            if (num < 10) return `0${num}`;
            return num;
        }
        return `${year}-${appendZero(month)}-${appendZero(day)}`
    }


    buildButtons(dom: HTMLElement, startDate: Date, endDate: Date) {
        const filterBox = document.createElement('div');
        filterBox.classList.add("flex", "gap-x-2", "py-4")

        filterBox.innerHTML += `<input value="${this.convertToDateString(startDate)}" type="date" id="laravel-logger-start-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="Start Date"/>`;
        filterBox.innerHTML += `<input value="${this.convertToDateString(endDate)}" type="date" id="laravel-logger-end-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="End Date"/>`;
        // offset and limit
        filterBox.innerHTML += `<input type="number" id="laravel-logger-offset" class="laravel-logger-input border rounded px-2 py-1" placeholder="Offset - (Default: 10)"/>
                               <input type="number" id="laravel-logger-limit" class="laravel-logger-input border rounded px-2 py-1" placeholder="Limit - (Default: 10)"/>`;
        // filter button
        filterBox.innerHTML += `<button id="laravel-logger-filter" class="px-4 py-2 rounded border bg-indigo-500 text-white">Filter</button>`

        dom.prepend(filterBox);

        document.getElementById('laravel-logger-filter').addEventListener('click', () => {
            const startDate = (document.getElementById('laravel-logger-start-date') as HTMLInputElement).value;
            const endDate = (document.getElementById('laravel-logger-end-date') as HTMLInputElement).value;
            const offset = (document.getElementById('laravel-logger-offset') as HTMLInputElement).value;
            const limit = (document.getElementById('laravel-logger-limit') as HTMLInputElement).value;
            this.update(new Date(startDate), new Date(endDate), parseInt(limit), parseInt(offset));
        });

        return this;
    }
}
