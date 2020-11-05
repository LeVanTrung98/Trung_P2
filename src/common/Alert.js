import React from 'react'
import Swal from 'sweetalert2';
export  function Alert(title) {
    return (
        Swal.fire({
            position: 'top-end',
            icon: title,
            title: title,
            showConfirmButton: false,
            timer: 500,
            width : "25rem",
        })
    )
}

export function Comfirm(title){
    return Swal.fire({
        title: title,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
}