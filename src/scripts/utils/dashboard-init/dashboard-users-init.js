/* eslint-disable no-undef */
import user from '../../data/userAPI'
import { createDashboardUserTableTemplate, createSearchFilterDataTemplate } from '../../views/template dashboard/template-dashboard'
import { deleteAlert } from '../popup/swal-delete-popup'
import { searchData } from '../search-data'

const Users = async () => {
  if (!$('#data-container').length) {
    createSearchFilterDataTemplate()
  }
  const renderUser = await user.getAllUsers()
  $('#user-dashboard').addClass('active')
  $('#list_table').empty()
  $('#list_table').append(createDashboardUserTableTemplate())
  searchData()

  Object.keys(renderUser).forEach(user => {
    $('#userListTable').append(`
    <tr>
      <td>${renderUser[user].uid}</td>
      <td>${renderUser[user].displayName}</td>
      <td>${renderUser[user].email}</td>
      <td>${renderUser[user].phone ? renderUser[user].phone : '-'}</td>
      <td>${renderUser[user].address ? renderUser[user].address : '-'}</td>
      <td>
        <button id='user-edit' class='edit-button dashboard-button'>Edit</button>
        <button id='user-delete' class='delete-button dashboard-button'>Delete</button>
      </td>
    </tr>`)
  })

  buttonInit()
}

const buttonInit = () => {
  $(document).on('click', '#user-edit', (e) => {
    const parentChild = e.target.parentElement.parentElement.children

    changeColumnInput(parentChild)
  })

  $(document).on('click', '#user-delete', (e) => {
    const parentChild = e.target.parentElement.parentElement.children
    const uid = parentChild[0].innerText
    deleteAlert(user.removeUserById, Users, uid, 'User')
  })
}

const changeColumnInput = (parentChild) => {
  const displayName = parentChild[1].innerText
  $(parentChild[1]).html(`
    <input type='text' value='${displayName}' id='edit-displayName' class='edit-input'>
  `)

  const email = parentChild[2].innerText
  $(parentChild[2]).html(`
    <input type='text' value='${email}' id='edit-email' class='edit-input'>
  `)

  const phone = parentChild[3].innerText
  $(parentChild[3]).html(`
    <input type='text' value='${phone}' id='edit-phone' class='edit-input'>
  `)

  const address = parentChild[4].innerText
  $(parentChild[4]).html(`
    <input type='text' value='${address}' id='edit-address' class='edit-input'>
  `)

  const actions = parentChild[5]
  $(actions).html(`
    <button id='user-submit' class='submit-button dashboard-button'>Submit</button>
    <button id='user-cancel' class='cancel-button dashboard-button'>Cancel</button>
  `)

  $(document).on('click', '#user-submit', (e) => {
    const parentChild = e.target.parentElement.parentElement.children
    const uid = parentChild[0].innerText
    const displayName = parentChild[1].children[0].value
    const email = parentChild[2].children[0].value
    const phone = parentChild[3].children[0].value
    const address = parentChild[4].children[0].value

    user.setUserById(uid, {
      uid,
      displayName,
      email,
      phone,
      address
    })
    Users()
  })

  $(document).on('click', '#user-cancel', () => {
    Users()
  })
}

export default Users
