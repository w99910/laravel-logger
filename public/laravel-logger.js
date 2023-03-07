class u {
  constructor(e) {
    this.container = e, this.headers = null, this.data = null, this.buildButtons(), this.setupTable();
  }
  setupTable() {
    this.table = document.createElement("table"), this.table.classList.add("border", "border-solid", "rounded-md"), this.table.style.borderCollapse = "separate", this.container.appendChild(this.table);
  }
  buildHeaders(e) {
    this.headers = e;
    const a = document.createElement("thead");
    a.classList.add("laravel-logger-header");
    let t = '<tr class="bg-gray-100 laravel-logger-header-row">';
    for (let l of e) {
      const r = e.indexOf(l);
      t += `<th data-index="${r}" data-is-descended="${r === 0 ? "true" : "false"}" class="laravel-logger-header-attribute select-none cursor-pointer p-4 text-gray-600 capitalize">${l}</th>`;
    }
    t += "</tr>", a.innerHTML = t, this.table.appendChild(a);
  }
  buildButtons() {
    const e = document.createElement("div");
    e.classList.add("flex", "gap-x-2", "py-4");
    const a = new Date(), t = new Date(new Date().setDate(a.getDate() - 1)), l = (r) => {
      const s = r.getFullYear();
      let n = r.getMonth() + 1, c = r.getDate();
      const i = (d) => {
        if (d < 10)
          return `0${d}`;
      };
      return `${s}-${i(n)}-${i(c)}`;
    };
    e.innerHTML += `<input value="${l(t)}" type="date" id="laravel-logger-start-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="Start Date"/>`, e.innerHTML += `<input value="${l(a)}" type="date" id="laravel-logger-end-date" class="laravel-logger-input border rounded px-2 py-1" placeholder="End Date"/>`, e.innerHTML += `<input type="number" id="laravel-logger-offset" class="laravel-logger-input border rounded px-2 py-1" placeholder="Offset"/>
                               <input type="number" id="laravel-logger-limit" class="laravel-logger-input border rounded px-2 py-1" placeholder="Limit"/>`, e.innerHTML += '<button id="laravel-logger-filter" class="px-4 py-2 rounded border bg-indigo-500 text-white">Filter</button>', this.container.appendChild(e);
  }
  buildBody(e) {
    this.data = e, this.table.querySelector("tbody") ? this.table.querySelector("tbody").remove() : this.listenEvents();
    const a = document.createElement("tbody");
    a.classList.add("laravel-logger-body", "text-sm");
    for (let t = 0; t < e.length; t++) {
      let l = e[t], r = document.createElement("tr");
      r.classList.add("laravel-logger-row"), r.setAttribute("data-index", t.toString()), t % 2 === 0 && r.classList.add("bg-gray-200");
      for (let s of Object.keys(l)) {
        let n = this.truncateWords(l[s], 20);
        r.innerHTML += `<td class="px-4 py-3 laravel-logger-attribute" title="${l[s]}">${n}</td>`;
      }
      r.innerHTML += "</tr>", a.appendChild(r);
    }
    this.table.appendChild(a);
  }
  sort(e, a = !0) {
    if (!this.data)
      return;
    const t = this.headers[e], l = this.data.sort((r, s) => r[t] > s[t] ? a ? -1 : 1 : r[t] < s[t] ? a ? 1 : -1 : 0);
    this.buildBody(l);
  }
  listenEvents() {
    this.table.querySelectorAll(".laravel-logger-header-attribute").forEach((e) => {
      e.addEventListener("click", (a) => {
        const t = a.target, l = t.getAttribute("data-index");
        if (t.getAttribute("data-is-descended") === "true") {
          t.setAttribute("data-is-descended", "false"), this.sort(parseInt(l), !1);
          return;
        }
        t.setAttribute("data-is-descended", "true"), this.sort(parseInt(l));
      });
    });
  }
  truncateWords(e, a) {
    return typeof e == "function" && (e = e()), e ? (e = e.toString(), e.length > a ? e.substring(0, a) + "…" : e) : "NA";
  }
}
class h {
  constructor() {
    this.offset = 0, this.limit = 10, this.endDate = new Date(), this.startDate = new Date(new Date().setDate(this.endDate.getDate() - 1));
  }
  async load() {
    let e = {
      startDate: this.startDate.toUTCString(),
      endDate: this.endDate.toUTCString(),
      limit: this.limit,
      offset: this.offset
    };
    return (await fetch("/laravel-logger", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify(e)
    })).json();
  }
  update(e, a, t, l) {
    e && (this.startDate = e), a && (this.endDate = a), t && (this.limit = t), l && (this.offset = l), this.load().then((r) => {
      this.tableBuilder.buildBody(r);
    });
  }
  async build(e) {
    this.tableBuilder = new u(e), this.load().then((a) => {
      this.tableBuilder.buildHeaders(Object.keys(a[0])), this.tableBuilder.buildBody(a), document.getElementById("laravel-logger-filter").addEventListener("click", () => {
        const t = document.getElementById("laravel-logger-start-date").value, l = document.getElementById("laravel-logger-end-date").value, r = document.getElementById("laravel-logger-offset").value, s = document.getElementById("laravel-logger-limit").value;
        this.update(new Date(t), new Date(l), parseInt(s), parseInt(r));
      });
    });
  }
}
export {
  h as default
};
