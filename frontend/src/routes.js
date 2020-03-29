import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './views/Logon';
import Register from './views/Register';
import Profile from './views/Profile';
import NewIncident from './views/NewIncident';
 
function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Profile path="/profile" component={Profile} />
                <NewIncident path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;

