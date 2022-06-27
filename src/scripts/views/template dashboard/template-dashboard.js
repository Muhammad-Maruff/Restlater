const createLayoutDashboard = () => `
    <div id='dashboard-container'>
        <section class="sidebar">
        <div class="sidebar-menu">
            <ul>
            <li>
                <div class="active">
                <span class="las la-igloo"></span>
                <span>Dashboard</span>
                </div>
            </li>

            <li class='menu' id='dashboard-user'>
                <div><span class="las la-users"></span><span>Users</span></div>
            </li>

            <li class="dropdown1 menu">
                <div>
                <span class="las la-book"></span>
                Graves
                <span id="sub1" class="las la-caret-down"></span>
                </div>
            </li>
            <ul class="submenu">
                <li id='dashboard-blok-a'><div>Blok A</div></li>
                <li id='dashboard-blok-b'><div>Blok B</div></li>
                <li id='dashboard-blok-c'><div>Blok C</div></li>
                <li id='dashboard-blok-d'><div>Blok D</div></li>
                <li id='dashboard-blok-e'><div>Blok E</d></li>
            </ul>

            <li class='menu' id='dashboard-transaction'>
            <div>
                <span class="las la-shopping-bag">
                </span>
                Transactions
            </div>
            </li>
            </ul>
        </div>
        </section>

        <section id="dashboard-main">
        </section>

    </div>
`

const createSearchFilterDataTemplate = () => {
  $('#dashboard-main').append(
      `
        <div class="search">
        <div class="search-wrapper">
        <span class="las la-search"></span>
        <input type="search" id='search-input' placeholder="Search here">
        </div>
        </div>

        <div class="filter">
            <span>Filter</span><i id="sub2" class="las la-caret-down"></i>
        </div>

        <div id="data-container"><div id="list_table" class="list_table"></div></div>
      `
  )
}

const createDashboardUserTableTemplate = () => `
<h2>List Users</h2>
<table id="userListTable" class='table-data'>
    <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Action</th>
    </tr>
</table>
`

const createDashboardTransactionTableTemplate = () => `
<h2>List Transactions</h2>
<table id="transactionListTable" class='table-data'>
<tr>
    <th>Transaction ID</th>
    <th>User Name</th>
    <th>Booked Graves</th>
    <th>Total Price</th>
    <th>Date</th>
    <th>Action</th>
</tr>
</table>
`
const createDashboardGravesTableTemplate = () => `
    <h2>Booked Graves</h2>
    <table id="graveListTable" class='table-data'>
        <tr id="graveA">
            <th>Graves A</th>
        </tr>
        <tr id="graveB">
            <th>Graves B</th>
        </tr>
        <tr id="graveC">
            <th>Graves C</th>
        </tr>
        <tr id="graveD">
            <th>Graves D</th>
        </tr>
        <tr id="graveE">
            <th>Graves E</th>
        </tr>
    </table>
`

const createEditGravesDashboardTemplate = (tomb) => `
    <h2>Edit Blok A Graves</h2>
    <input type="hidden" id="hfRowIndex" value="" />
    <table id="editGravesA" class="table-data">
        <tr>
            <th>ID</th>
            <th>Available</th>
            <th>Action</th>
        </tr>
    </table>
`

export {
  createLayoutDashboard,
  createDashboardUserTableTemplate,
  createDashboardTransactionTableTemplate,
  createDashboardGravesTableTemplate,
  createEditGravesDashboardTemplate
  createSearchFilterDataTemplate
}
