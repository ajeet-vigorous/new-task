// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// function PrivateRoute({ component: Component, roles, ...rest }) {
//     return (
//         <Route {...rest} render={props => {
//             if (!localStorage.getItem('user')) {
//                 // not logged in so redirect to login page with the return url
//                 return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//             }

//             // logged in so return component
//             return <Component {...props} />
//         }} />
//     );
// }

// export { PrivateRoute };



import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={
        localStorage.getItem('user') ? (
          <Component />
        ) : (
          // Not logged in, redirect to the login page with the return URL
          navigate('/login', { state: { from: rest.location } })
        )
      }
    />
  );
}

export { PrivateRoute };
