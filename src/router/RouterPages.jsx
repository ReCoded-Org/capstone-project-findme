import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const RouterPages = () => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact  component={Home} />
                {/* <Route path="/missing_people"  exact  component={MissingPeoplePage} /> */}
                {/* <Route path="/missing_people_details"  exact  component={MissingPeopleDetails} /> */}
                <Route path="/search" exact  component={Search} />
                {/* <Route path="/add_post" exact  component={AddPost} /> */}
                <Route path="/about_us" exact   component={AboutUs} />
                {/* <Route path="/contact_us" exact  component={ContactUs} /> */}
            </Switch>
        </Router>
    )

}

const Home = ()=>{
    return(   <div>
        <h1>Home
            </h1>    </div>)
 
}
const Search = ()=>{
    return(  
    <div>
  <h1>Search
    </h1> 
    </div> )
}
const AboutUs = ()=>{
    return(  
    <div>
      <h1>AboutUs
    </h1> 
    </div>)
}
export default RouterPages