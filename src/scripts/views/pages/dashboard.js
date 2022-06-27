import transaction from '../../data/transactionAPI'
import user from '../../data/userAPI'
import { add2zeros } from '../../utils/add2zeros'
import { getBlokData } from '../../utils/blok-data'
import dashboardBlok from '../../utils/dashboard-init/dashboard-blok-init'
import Graves from '../../utils/dashboard-init/dashboard-graves-init'
import Transactions from '../../utils/dashboard-init/dashboard-transactions-init'
import Users from '../../utils/dashboard-init/dashboard-users-init'
import { createLayoutDashboard } from '../template dashboard/template-dashboard'

const dashboard = {
  render () {
    document.title = 'Restlater | Dashboard'
    $('body').addClass('nav-main')
    $('#dashboard').hide()
    return createLayoutDashboard()
  },

  async afterRender () {
    const userCount = await user.getAllUsers()
    const data = await getBlokData()
    const availableSlots = data.allBlok - data.unavailableBlok
    const transactionData = await transaction.getTransaction()
    const transactionCount = transactionData.filter(item => item !== null).length
    $('#dashboard-main').empty()
    $('#dashboard-main').append(`
      <h1>DASHBOARD CATALOGUE</h1>
      <div id='dashboard-catalogue'>
        <div id='catalogue-user' class='catalogue-item'>
        <h2>User Count</h2>
        <h3>
          ${add2zeros(Object.keys(userCount).length)}
        </h3>
        </div>
        <div id='catalogue-grave' class='catalogue-item'>
        <h2>Available Slots</h2>
        <h3>
        ${add2zeros(availableSlots)}/${add2zeros(data.allBlok)}
        </h3>
        </div>
        <div id='catalogue-transaction' class='catalogue-item'>
        <h2>Transaction Count</h2>
        <h3>
          ${add2zeros(transactionCount)}
        </h3>
        </div>
      </div>
    `)

    $('.dropdown1').click(() => {
      $('#dashboard-main').empty()
      Graves()

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
      $('#dashboard-main').empty()
      Users()
    })

    $('#dashboard-transaction').on('click', event => {
      event.preventDefault()
      $('#dashboard-main').empty()
      Transactions()
    })

    // Edit dashboard grave
    $('.blok-submenu').on('click', event => {
      event.preventDefault()
      const blok = event.currentTarget.id.slice(-1)
      dashboardBlok(blok)
    })
  }
}

export default dashboard
