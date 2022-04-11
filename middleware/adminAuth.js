export default function ({ store, redirect, route }) {
  const userRole = store.state.user.user;
  if (process.client && userRole === null && route.fullPath.includes("/admin"))
    return redirect("/");
}
