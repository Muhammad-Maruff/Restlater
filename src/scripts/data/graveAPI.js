import { get, ref, update } from 'firebase/database'
import { db } from '../globals/firebase-init'

const grave = {
  async getAllBlok () {
    const bloks = ref(db, 'grave/')
    const snapshot = await get(bloks)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  },

  async getAllBlokA () {
    const bloks = ref(db, 'grave/blokA')
    const snapshot = await get(bloks)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  },

  async getBlokById (id) {
    const slots = ref(db, 'grave/' + id)
    const snapshot = await get(slots)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  },

  async putBlokAById ({ id, available }) {
    const newAvailable = available !== true
    const updateData = {}
    updateData['/grave/blokA/' + id] = newAvailable
    console.log(id)
    console.log(available)
    return update(ref(db), updateData)
    // update(ref(db, 'grave/blokA' + id), {
    //   available
    // })
    // const updateData = {
    //   id,
    //   available
    // }
    // const updates = {}
    // updates['/grave' + id] = updateData
    // return update(ref(db, 'grave/' + id), updates)
  },

  async getPrice () {
    const price = ref(db, 'price/')
    const snapshot = await get(price)
    if (snapshot.exists()) {
      return snapshot.val()
    }
    return null
  }
}

export default grave
