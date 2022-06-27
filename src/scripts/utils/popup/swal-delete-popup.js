/* eslint-disable no-undef */
export const deleteAlert = (callback, refresh, ref, target, slots, freeSlots) => {
  swal({
    title: `Delete This ${target}?`,
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    buttons: ['Cancel', 'Delete'],
    dangerMode: true
  })
    .then((willLogout) => {
      if (willLogout) {
        callback(ref)
        if (slots) {
          freeSlots(slots)
        }
        refresh()
        swal(`${target} has been deleted!`, {
          icon: 'success'
        })
      } else {
        return undefined
      }
    })
}
