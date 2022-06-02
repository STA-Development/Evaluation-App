import Swal from 'sweetalert2'

const assignDateInvitation = (isPublish: boolean) => {
  if (isPublish) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Invitations are successfully sent',
      showConfirmButton: false,
      timer: 2500,
    })
  }
}

export default assignDateInvitation
