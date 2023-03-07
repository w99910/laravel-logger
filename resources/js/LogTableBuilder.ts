import {scaleTime, extent, timeParse, scaleLinear, max, area, axisLeft, axisBottom, select} from 'd3';

export default class LogTableBuilder {

    protected table: HTMLTableElement;

    protected headers: Array<string> = null;

    protected data: Array<any> = null;

    protected paginatedCount: number = 10;

    protected currentPage: number = 1;

    constructor(protected container: HTMLElement) {
        this.setupTable();
    }

    setPaginatedCount(count: number) {
        this.paginatedCount = count;
        return this;
    }

    setHeaders(headers: Array<string>) {
        this.headers = headers;
        return this;
    }

    setData(data: Array<any>) {
        this.data = data;
        return this;
    }

    getCurrentData() {
        if (!this.data) throw new Error('Data not set');
        const startIndex = (this.currentPage - 1) * this.paginatedCount;
        const endIndex = startIndex + this.paginatedCount;
        return this.data.slice(startIndex, endIndex);
    }

    protected setupTable() {
        this.table = document.createElement('table');
        this.table.classList.add('border', 'border-solid', 'rounded-md',)
        this.table.style.borderCollapse = 'separate';
        this.container.appendChild(this.table)
    }

    buildHeaders() {
        if (!this.headers) throw new Error('Headers not set');
        const thead = document.createElement('thead')
        thead.classList.add('laravel-logger-header',);
        let html = '<tr class="bg-gray-100 laravel-logger-header-row">';
        for (let header of this.headers) {
            const index = this.headers.indexOf(header)
            html += `<th data-index="${index}" data-is-descended="${index === 0 ? 'true' : 'false'}" class="laravel-logger-header-attribute select-none cursor-pointer p-4 text-gray-600 capitalize">${header}</th>`
        }
        html += '</tr>';
        thead.innerHTML = html
        this.table.appendChild(thead);
        return this;
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

    buildButtons(startDate: Date, endDate: Date) {
        const filterBox = document.createElement('div');
        filterBox.classList.add("flex", "gap-x-2", "py-4")

        filterBox.innerHTML += `<input value="${this.convertToDateString(startDate)}" type="date" id="laravel-logger-start-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="Start Date"/>`;
        filterBox.innerHTML += `<input value="${this.convertToDateString(endDate)}" type="date" id="laravel-logger-end-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="End Date"/>`;
        // offset and limit
        filterBox.innerHTML += `<input type="number" id="laravel-logger-offset" class="laravel-logger-input border rounded px-2 py-1" placeholder="Offset"/>
                               <input type="number" id="laravel-logger-limit" class="laravel-logger-input border rounded px-2 py-1" placeholder="Limit"/>`;
        // filter button
        filterBox.innerHTML += `<button id="laravel-logger-filter" class="px-4 py-2 rounded border bg-indigo-500 text-white">Filter</button>`

        this.container.prepend(filterBox);

        return this;
    }

    buildChart() {
        const infoLogData = [];
        const errorLogData = [];
        for (let datum of this.data) {
            let date = (new Date(datum.date)).toUTCString();
            if (datum.statusCode && datum.statusCode >= 200 && datum.statusCode < 300) {
                let entries = infoLogData.filter((entry) => entry.index === date);
                // @ts-ignore
                entries.length > 0 ? entries[0].count += 1 : infoLogData.push({
                    index: date,
                    date: new Date(date),
                    count: 1
                });
            } else {
                let entries = errorLogData.filter((entry) => entry.index === date);
                // @ts-ignore
                entries.length > 0 ? entries[0].count += 1 : errorLogData.push({
                    index: date,
                    date: new Date(date),
                    count: 1
                });
            }
        }
        // define properties
        const width = 800;
        const height = 400;
        // // create svg
        const container = document.createElement('div');
        this.container.appendChild(container)
        const svg = select(container)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g');
        const populateData = (data, fillColor, strokeColor) => {
            const x = scaleTime()
                .domain(extent(data, function ({date}) {
                    return date;
                }))
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(axisBottom(x));

            const y = scaleLinear()
                .domain([0, max(data, function ({count}) {
                    return +count;
                })])
                .range([height, 0]);
            svg.append("g")
                .call(axisLeft(y));
            svg.append("path")
                .datum(data)
                .attr("fill", fillColor)
                .attr("stroke", strokeColor)
                .attr("stroke-width", 1.5)
                .attr("d", area()
                    .x(function (d) {
                        // @ts-ignore
                        return x(d.date)
                    })
                    .y0(y(0))
                    .y1(function (d) {
                        // @ts-ignore
                        return y(d.count)
                    })
                )
        }

        populateData(infoLogData, '#cce5df', '#69b3a2');
        // populateData(errorLogData, '#ff5d5d', '#69b3a2');
    }

    buildBody() {
        const data = this.getCurrentData();
        if (this.table.querySelector('tbody')) {
            this.table.querySelector('tbody').remove();
        }
        const tbody = document.createElement('tbody');
        tbody.classList.add('laravel-logger-body', 'text-sm');
        for (let index = 0; index < data.length; index++) {
            if (index > this.paginatedCount) break;
            let entry = data[index];
            let row = document.createElement('tr');
            row.classList.add('laravel-logger-row');
            row.setAttribute('data-index', index.toString());
            if (index % 2 === 0) {
                row.classList.add('bg-gray-200')
            }
            for (let attribute of Object.keys(entry)) {
                let value = this.truncateWords(entry[attribute], 20);
                row.innerHTML += `<td class="px-4 py-3 laravel-logger-attribute" title="${entry[attribute]}">${value}</td>`
            }
            row.innerHTML += '</tr>';
            tbody.appendChild(row)
        }
        this.table.appendChild(tbody);
        return this;
    }

    buildFooter() {
        const footer = document.createElement('tfoot')
        footer.classList.add('laravel-logger-footer', 'text-sm');
        let html = `<tr><th>Showing ${this.paginatedCount} of ${this.data.length}</th>`
        if (this.headers.length > 0 && this.data.length > 0) {
            html += `<td class="p-4 text-right" colspan="${this.headers.length - 1}">`
            html += `<button id="laravel-logger-footer-previous" class="px-4 py-2 rounded border bg-indigo-500 text-white">Previous</button>`
            html += `<button id="laravel-logger-footer-next" class="px-4 py-2 rounded border bg-indigo-500 text-white">Next</button>`
            html += '</td>'
        }
        html += '</tr>'
        footer.innerHTML = html;
        this.table.appendChild(footer);
        return this;
    }

    paginate(index) {
        if (index < 1) {
            return;
        }
        if (index > this.data.length / this.paginatedCount) {
            return;
        }
        this.currentPage = index;
        this.buildBody();
    }

    sort(index: number, isDesc = true) {
        if (!this.data) {
            return;
        }
        // sort array in descending order
        const attribute = this.headers[index]
        const sortedData = this.data.sort((a, b) => {
            if (a[attribute] > b[attribute]) {
                return isDesc ? -1 : 1;
            }
            if (a[attribute] < b[attribute]) {
                return isDesc ? 1 : -1;
            }
            return 0;
        })
        this.buildBody()
    }

    listenEvents() {
        // sort event
        this.table.querySelectorAll('.laravel-logger-header-attribute').forEach((element) => {
            element.addEventListener('click', (e) => {
                const header = e.target as HTMLElement
                const index = header.getAttribute('data-index');
                const isDesc = header.getAttribute('data-is-descended') === 'true';
                if (isDesc) {
                    header.setAttribute('data-is-descended', 'false');
                    this.sort(parseInt(index), false)
                    return;
                }
                header.setAttribute('data-is-descended', 'true');
                this.sort(parseInt(index));
            })
        })

        // paginate event
        this.table.querySelector('#laravel-logger-footer-next').addEventListener('click', (e) => {
            this.paginate(this.currentPage + 1);
        })
        this.table.querySelector('#laravel-logger-footer-previous').addEventListener('click', (e) => {
            this.paginate(this.currentPage - 1);
        })

        return this;
    }

    truncateWords(data: Function | string, cutoff) {
        if (typeof data === 'function') {
            data = data();
        }
        if (!data) {
            return 'NA';
        }
        data = data.toString();

        return data.length > cutoff ?
            data.substring(0, cutoff) + '…' :
            data;
    }
}
