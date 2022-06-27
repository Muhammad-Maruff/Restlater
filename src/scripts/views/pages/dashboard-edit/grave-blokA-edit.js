import grave from '../../../data/grave-test'

const CrudGraveBlokA = () => {
  const renderGrave = grave
  const col = []
  $('#list_table').empty()

  const createTable = () => {
    for (let i = 0; i < renderGrave.length; i++) {
      for (const key in renderGrave[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key)
        }
      }
    }

    // Create Table
    const table = document.createElement('table')
    table.setAttribute('id', 'graveAEdit')

    const tr = table.insertRow(-1)

    for (let h = 0; h < col.length; h++) {
      const th = document.createElement('th')
      th.innerHTML = col[h].replace('_', ' ')
      tr.appendChild(th)
    }

    // add new row based on data
    for (let i = 0; i < renderGrave.length; i++) {
      const tr = table.insertRow(-1)
      for (let j = 0; j < col.length; j++) {
        const tabCell = tr.insertCell(-1)
        tabCell.innerHTML = renderGrave[i][col[j]]
      }

      this.td = document.createElement('td')

      // Cancel Option
      const lblCancel = document.createElement('label')
      lblCancel.innerHTML = '✖'

      lblCancel.setAttribute('onclick', 'CrudGraveBlokA.Cancel(this)')
      lblCancel.setAttribute('style', 'display:none;')
      lblCancel.setAttribute('title', 'Cancel')
      lblCancel.setAttribute('id', 'lbl' + i)

      this.td.appendChild(lblCancel)

      // Save Data
      tr.appendChild(this.td)
      const btnSave = document.createElement('input')

      btnSave.setAttribute('type', 'button')
      btnSave.setAttribute('value', 'Save')
      btnSave.setAttribute('id', 'Save' + i)
      btnSave.setAttribute('style', 'display:none;')
      btnSave.setAttribute('onclick', 'CrudGraveBlokA.Save(this)')

      this.td.appendChild(btnSave)

      // Update Data
      tr.appendChild(this.td)
      const btnUpdate = document.createElement('input')
      btnUpdate.setAttribute('type', 'button')
      btnUpdate.setAttribute('value', 'Update')
      btnUpdate.setAttribute('id', 'Edit' + i)
      btnUpdate.setAttribute('style', 'background-color:#44CCEB;')
      btnUpdate.setAttribute('onclick', 'CrudGraveBlokA.Update(this)')
      this.td.appendChild(btnUpdate)

      // Delete Data
      this.td = document.createElement('th')
      tr.appendChild(this.td)
      const btnDelete = document.createElement('input')
      btnDelete.setAttribute('type', 'button')
      btnDelete.setAttribute('value', 'Delete')
      btnDelete.setAttribute('style', 'background-color:#ED5650;')
      btnDelete.setAttribute('onclick', 'CrudGraveBlokA.Delete(this)')

      this.td.appendChild(btnDelete)
    }

    // create new row(add new data)
    tr = table.insertRow(-1)
    for (let j = 0; j < col.length; j++) {
      const newCell = tr.insertCell(-1)
      if (j >= 1) {
        const tBox = document.createElement('input')
        tBox.setAttribute('type', 'text')
        tBox.setAttribute('value', '')
        newCell.appendChild(tBox)
      }
    }

    this.td = document.createElement('td')
    tr.appendChild(this.td)

    const btnNew = document.createElement('input')
    btnNew.setAttribute('type', 'button')
    btnNew.setAttribute('value', 'Create')
    btnNew.setAttribute('id', 'New' + i)
    btnNew.setAttribute('style', 'background-color:#207DD1;')
    btnNew.setAttribute('onclick', 'crudApp.CreateNew(this)')
    this.td.appendChild(btnNew)

    const div = document.getElementById('container')
    div.innerHTML = ''
    div.appendChild(table)
  }

  // operation CRUD

  // Cancel
  const Cancel = (oButton) => {
    // hide button
    oButton.setAttribute('style', 'display:none; float:none;')

    const activeRow = oButton.parentNode.rowIndex
    // hide save button
    const btnSave = document.getElementById('Save' + (activeRow - 1))
    btnSave.setAttribute('style', 'display:none')
    // show update button

    const btnUpdate = document.getElementById('Edit' + (activeRow - 1))
    btnUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;')

    const tab = document.getElementById('graveAEdit').rows[activeRow]

    for (let i = 0; i < col.length; i++) {
      const td = tab.getElementsByTagName('td')[i]
      td.innerHTML = renderGrave[(activeRow - 1)][col[i]]
    }
  }

  // edit data
  const Update = (oButton) => {
    const activeRow = oButton.parentNode.parentNode.rowIndex
    const tab = document.getElementById('graveAEdit').rows[activeRow]

    for (let i = 1; i < 4; i++) {
      const td = tab.getElementsByTagName('td')[i]
      const ele = document.createElement('input')
      ele.setAttribute('type', 'text')
      ele.setAttribute('value', td.innerText)
      td.innerText = ''
      td.appendChild(ele)
    }

    const lblCancel = document.getElementById('lbl' + (activeRow - 1))
    lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;')

    const btnSave = document.getElementById('Save' + (activeRow - 1))
    btnSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;')

    oButton.setAttribute('style', 'display:none;')
  }

  // Delete

  const Delete = (obutton) => {
    const activeRow = obutton.parentNode.parentNode.rowIndex
    renderGrave.splice((activeRow - 1), 1)
    createTable()
  }

  // Save
  const Save = (oButton) => {
    const activeRow = oButton.parentNode.parentNode.rowIndex
    const tab = document.getElementById('graveAEdit').rows[activeRow]

    // update grave arrayy with values
    for (let i = 1; i < col.length; i++) {
      const td = tab.getElementsByTagName('td')[i]
      if (td.childNodes[0].getAttribute('type') === 'text') {
        renderGrave[(activeRow - 1)[col[i]] = td.childNodes[0].value]
      }
    }
    createTable()
  }

  // create new
  const CreateNew = (obutton) => {
    const activeRow = obutton.parentNode.parentNode.rowIndex
    const tab = document.getElementById('graveAEdit').rows[activeRow]
    const obj = {}

    // add new value to grave
    for (let i = 1; i < col.length; i++) {
      const td = tab.getElementsByTagName('td')[i]
      if (td.childNodes[0].getAttribute('type') === 'text') {
        const txtVal = td.childNodes[0].value
        if (txtVal !== '') {
          obj[col[i]] = txtVal.trim()
        } else {
          obj = ''
          alert('all fields are compulsory')
          break
        }
      }
    }
    obj[col[0]] = renderGrave.length + 1

    if (Object.keys(obj).length > 0) {
      renderGrave.push(obj)
      createTable()
    }
  }
}

export default CrudGraveBlokA
