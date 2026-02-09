export function render(container) {
    container.innerHTML = `

    <h2>Basic Table</h2>

    <ifx-basic-table 
        cols='[{"headerName":"ID","field":"id","sortable":true,"sort":"desc","unSortIcon":true},{"headerName":"Item","field":"item","sortable":true,"unSortIcon":true},{"headerName":"Price","field":"price"},{"headerName":"Date","field":"date"}]' 
        rows='[{"id":1,"item":"Item 1","price":356,"date":"2025-05-11"},{"id":2,"item":"Item 2","price":55,"date":"2025-03-26"},{"id":3,"item":"Item 3","price":24},{"id":4,"item":"Item 4","price":874,"date":"2025-04-30"},{"id":5,"item":"Item 5","price":689,"date":"2025-09-14"},{"id":6,"item":"Item 6","price":46},{"id":7,"item":"Item 7","price":421,"date":"2026-07-25"},{"id":8,"item":"Item 8","price":17,"date":"2026-06-28"},{"id":9,"item":"Item 9","price":752},{"id":10,"item":"Item 10","price":73,"date":"2026-01-27"},{"id":11,"item":"Item 11","price":94,"date":"2026-10-31"},{"id":12,"item":"Item 12","price":846}]'
        table-height='auto'
        row-height='default'
        variant='default'>
    </ifx-basic-table>

    <br><br>

    <h3 style="text-decoration: underline;">Controls</h3>
    <ifx-button variant="secondary" id="toggle-variant">Toggle Variant</ifx-button>

    <br><br>

    <span><b>Variant:</b> <span id="state-variant"></span></span><br>
  `;

    const table = container.querySelector('ifx-basic-table');
    const variantState = container.querySelector('#state-variant');

    const variants = ["default", "zebra"];

    variantState.textContent = table.variant;

    container.querySelector('#toggle-variant').onclick = () => {
        const currentIndex = variants.indexOf(table.variant);
        const nextIndex = (currentIndex + 1) % variants.length;
        table.variant = variants[nextIndex];
        variantState.textContent = table.variant;
    }
}