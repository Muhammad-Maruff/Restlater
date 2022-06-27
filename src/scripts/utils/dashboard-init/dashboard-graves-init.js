import grave from '../../data/graveAPI'
import { createDashboardGravesTableTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'

const Graves = async () => {
  const renderGrave = await grave.getAllBlok()
  if (!$('#data-container').length) {
    createSearchFilterDataTemplate()
  }

  $('#grave-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardGravesTableTemplate())

  Object.keys(renderGrave).forEach((blok) => {
    let commaFlag = true
    renderGrave[blok].forEach((slot) => {
      if (!slot.available) {
        let comma = ','

        if (commaFlag) {
          comma = ''
          commaFlag = false
        }

        $(`#${blok}-data`).append(`<span>${comma} ${slot.id}</span>`)
      }
    })
  })

  $('#search-input').on('keyup', searchslots)
}

const searchslots = () => {
  const value = $('#search-input').val().toLowerCase()
  $('#list_table td span').filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    return undefined
  }
  )
}

export default Graves
