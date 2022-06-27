import grave from '../../data/graveAPI'

const EditButtonInitiator = {
  async init ({ editButtonContainer, tomb }) {
    this._editButtonContainer = editButtonContainer
    this._tomb = tomb

    await this._renderButton()
  },

  async _renderButton () {
    this._editButton()
  },

  async _editButton () {
    const editButton = document.querySelector('.btnEdit')
    editButton.addEventListener('click', async () => {
      await grave.putBlokAById(this._tomb)
    })
  }
}

export default EditButtonInitiator
