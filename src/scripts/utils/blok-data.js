import grave from '../data/graveAPI'
import getInitial from './get-blok-initial'

export const getBlokData = async () => {
  const bloks = await grave.getAllBlok()
  const blokData = {}
  let allBlok = null
  let unavailableBlok = null

  Object.keys(bloks).forEach(key => {
    const initial = getInitial(key)
    const all = bloks[key].length
    const unavailable = getUnavailable(bloks[key])

    blokData[key] = {
      initial,
      all,
      unavailable
    }
    allBlok += all
    unavailableBlok += unavailable
  })

  const data = {
    allBlok,
    unavailableBlok,
    blokData
  }

  return data
}

const getUnavailable = (slots) => {
  return slots.filter(item => item.available === false).length
}
