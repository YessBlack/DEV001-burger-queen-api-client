import { Route } from 'react-router-dom';

export const PrivateRoute = ({component:Component, user, ...rest}) => {
    return(
        
        <Route {...rest}>{user? <Component/> : <Redirect to ='/login'/>}</Route>
    )
}
