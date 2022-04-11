export default function ({ store, redirect }) {
  const userRole = store.state.user.user

  if (userRole === null || userRole === undefined) {
    return
  } else if (userRole.role.adminRole) {
    redirect("/admin/Dashboard")
  } else if (userRole.role.costumer) {
    console.log("Estamos con user")
  }
}