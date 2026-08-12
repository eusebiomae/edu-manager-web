import Swal from "sweetalert2";

export const alerts = {
  success(message: string) {
    return Swal.fire({
      icon: "success",
      title: "Sucesso",
      text: message,
      timer: 2000,
      showConfirmButton: false,
    });
  },

  error(message: string) {
    return Swal.fire({
      icon: "error",
      title: "Erro",
      text: message,
    });
  },
};
