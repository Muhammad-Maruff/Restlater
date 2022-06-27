import grave from '../../data/graveAPI'
import { createEditGravesDashboardTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'
import { searchData } from '../search-data'
import transaction from '../../data/transactionAPI'

const dashboardBlok = async (initial) => {
  if (!$('#data-container').length) {
    createSearchFilterDataTemplate()
  }

  const data = await grave.getAllBlok()
  $('#list_table').empty()
  $('#list_table').append(createEditGravesDashboardTemplate(initial))
  searchData()

  const targetBlok = `blok${initial}`
  const bloks = data[targetBlok]
  console.log(bloks)
  bloks.forEach(blok => {
    const availability = blok.available ? 'available' : 'reserved'
    $('#blokListTable').append(`
    <tr>
        <td>${blok.id}</td>
        <td id="graveAvailable">${availability.toLocaleUpperCase()}</td>
        <td>
          <button id="${blok.id}.${blok.available}" class='availability-edit ${availability} dashboard-button'>Edit Availability</button>
        </td>
    </tr>
    `)
  })

  buttonInit()
}

const buttonInit = () => {
  $(document).on('click', '.availability-edit', (e) => {
    const parentChild = e.target.parentElement.parentElement.children
    const slot = []
    slot.push(parentChild[0].innerText)
    const initial = parentChild[0].innerText.slice(0, 1)

    if (parentChild[1].innerText === 'AVAILABLE') {
      transaction.setslots(slot, initial)
      dashboardBlok(initial)
    } else {
      transaction.freeSlots(slot, initial)
      dashboardBlok(initial)
    }
  })
}

export default dashboardBlok
