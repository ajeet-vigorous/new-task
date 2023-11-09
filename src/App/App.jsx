// import React, { useEffect } from 'react';
// import { Router, Route, Routes} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { history } from '../_helpers';
// import { alertActions } from '../_actions';
// import { PrivateRoute } from '../_components';
// import { HomePage } from '../HomePage';
// import { LoginPage } from '../LoginPage';
// import { RegisterPage } from '../RegisterPage';

// function App() {
//     const alert = useSelector(state => state.alert);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         const unsubscribe = history.listen((location, action) => {
//             // clear alert on location change
//             dispatch(alertActions.clear());
//         });
    
//         return () => {
//             // Unsubscribe the listener when the component unmounts
//             unsubscribe();
//         };
//     }, [dispatch]);
    

//     return (
//         <div className="jumbotron">
//             <div className="container">
//                 <div className="col-md-8 offset-md-2">
//                     {alert.message &&
//                         <div className={`alert ${alert.type}`}>{alert.message}</div>
//                     }
//                     <Router history={history}>
//                         <Routes>
//                             <PrivateRoute exact path="/" component={HomePage} />
//                             <Route path="/login" component={<LoginPage/>} />
//                             <Route path="/register" component={RegisterPage} />
//                             {/* <Redirect from="*" to="/" /> */}
//                         </Routes>
//                     </Router>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export { App };






import React, { useEffect } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <Routes>
              <PrivateRoute exact path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* <Navigate from="*" to="/" /> */}
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export { App };
