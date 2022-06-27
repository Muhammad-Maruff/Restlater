import Graves from '../../utils/dashboard-init/dashboard-graves-init'
import Transactions from '../../utils/dashboard-init/dashboard-transactions-init'
import Users from '../../utils/dashboard-init/dashboard-users-init'
import { createLayoutDashboard } from '../template dashboard/template-dashboard'
import editGraveA from './dashboard-edit/blokA-grave-edit'
import CrudGraveBlokA from './dashboard-edit/grave-blokA-edit'

const dashboard = {
  render () {
    document.title = 'Restlater | Dashboard'
    $('body').addClass('nav-main')
    $('#dashboard').hide()
    return createLayoutDashboard()
  },

  afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    $('.dropdown1').click(() => {
      if ($('.submenu').css('display') === 'none') {
        $('.submenu').slideDown('slow')
        return
      }
      $('.submenu').slideUp()
    }
    )

    // pindah isian dashboard
    $('#dashboard-user').on('click', event => {
      event.preventDefault()
      Users()
      // $('a').classList.remove('.active')
    })

    $('#dashboard-transaction').on('click', event => {
      event.preventDefault()
      Transactions()
      // $('a').classList.remove('.active')
    })

    $('.dropdown1').on('click', event => {
      event.preventDefault()
      Graves()
    })

    // Edit dashboard grave
    $('#dashboard-blok-a').on('click', event => {
      event.preventDefault()
      CrudGraveBlokA()
    })

    $('#dashboard-blok-a').on('click', event => {
      event.preventDefault()
      editGraveA()
    })
  }
}

export default dashboard
