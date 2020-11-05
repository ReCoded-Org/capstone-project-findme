import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const RouterPages = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact  component={''} />
                <Route path="/missing_people"  exact  component={''} />
                <Route path="/missing_people_details"  exact  component={''} />
                <Route path="/search" exact  component={''} />
                <Route path="/add_post" exact  component={''} />
                <Route path="/about_us" exact   component={''} />
                <Route path="/contact_us" exact  component={''} />
            </Switch>
        </Router>
    )

}


export default RouterPages