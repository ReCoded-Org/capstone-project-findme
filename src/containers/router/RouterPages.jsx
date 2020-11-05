import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const RouterPages = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact  component={Home} />
                <Route path="/missing_people"  exact  component={MissingPeoplePage} />
                <Route path="/missing_people_details"  exact  component={MissingPeopleDetails} />
                <Route path="/search" exact  component={Search} />
                <Route path="/add_post" exact  component={AddPost} />
                <Route path="/about_us" exact   component={AboutUs} />
                <Route path="/contact_us" exact  component={ContactUs} />
            </Switch>
        </Router>
    )

}


export default RouterPages