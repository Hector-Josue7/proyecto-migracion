
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./auth/AuthProvider";

export default function App(){

    return(
  <div>


<AuthProvider>

      <AppRouter />
</AuthProvider>
      
  </div>
    );
}