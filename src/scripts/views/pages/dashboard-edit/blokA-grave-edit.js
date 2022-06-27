import grave from '../../../data/graveAPI'
import EditButtonInitiator from '../../../utils/dashboard-init/edit-button-initiator'
import { createEditGravesDashboardTemplate } from '../../template dashboard/template-dashboard'

const editGraveA = async () => {
  const tomb = await grave.getAllBlokA()
  $('#list_table').empty()
  $('#list_table').append(createEditGravesDashboardTemplate())

  tomb.forEach(tomb => {
    // if (!tomb.available) {
    //   tomb.available = 'No'
    // } else {
    //   tomb.available = 'Yes'
    // }
    $('#editGravesA').append(`
  <tr>
      <td id="graveId" data-id="${tomb.id}" >${tomb.id}</td>
      <td id="graveAvailable">${tomb.available}</td>
      <td>
      <button value="${tomb.id}" class="btnEdit">Edit</button>
      </td>
  </tr>
  `)
    EditButtonInitiator.init({
      editButtonContainer: document.querySelector('.btnEdit'),
      tomb: {
        id: tomb.id,
        available: tomb.available
      }
    })
  })

// $(document).ready(function () {
//   $('button').click(function () {
//     const graveId = $(this)
//     console.log(graveId.val())
//   })
// })
}
export default editGraveA
