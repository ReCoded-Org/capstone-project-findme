import React from 'react'
// import Router
import { BrowserRouter as Router, Link } from 'react-router-dom'

// import footer.scss
import './footer.scss'


// import img svg 
import email from '../../images/footer/envelope.svg'
import twitter from '../../images/footer/twitter.svg'
import facebook from '../../images/footer/facebook.svg'
import instagram from '../../images/footer/instagram.svg'

// Footer Section
const Footer = () => {
    return (
        <Router>
            <div>
                <div className="footer">
                    <div className="container m-auto p-6 md:px-10 lg:px-24 ">
                        <div class=" footerTop mb-8 p-2 w-full flex flex-wrap  ">
                            {/* About Section */}
                            <div class="   w-full md:w-1/2 lg:w-1/2 px-12 ">
                                <h1 className="text-white text-xl font-medium">About us</h1>
                                <p className="text-white"> Our website is a service that connects lost people with anyone who
                                is looking for them. We have two scenarios on our website of loss, the first type is
                                a lost person and the other type is people who are found but missing their relatives
                                or anyone that takes care of them.
                    </p>
                            </div>
                            <div class=" linkSection  w-full md:w-1/2 lg:w-1/2 px-12 mt-4  md:mt-0">
                                {/* links */}
                                <h3 className="text-white">links</h3>
                                <div className="flex pl-2">
                                    <div className="links  pr-10 ">
                                        <Link to='/'>
                                            <LinkFooter nameLink='Home' />
                                        </Link>
                                        <Link to='/Missingpeople'>
                                            <LinkFooter nameLink='Missing people' />
                                        </Link>
                                        <Link to='/About'>
                                            <LinkFooter nameLink='About' />
                                        </Link>
                                    </div>
                                    <div className="links  ">
                                        <Link to='/Search'>
                                            <LinkFooter nameLink='Search' />
                                        </Link>
                                        <Link to='/Post'>
                                            <LinkFooter nameLink='Post' />
                                        </Link>
                                        <Link to='/Privacy Policy'>
                                            <LinkFooter nameLink='Privacy Policy' />
                                        </Link>
                                    </div></div>
                            </div>
                        </div>
                        {/* footerButton */}
                        <div className=" mb-8 p-2 w-full flex flex-wrap mt-4 ">
                            {/* Email */}
                            <div className=" w-full md:w-1/2 lg:w-1/2 px-12 ">
                                <a href="#" className="text-white">
                                    <Icon srcName={email} srcAlt='email' />
                                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                                </a>
                            </div>
                            {/* Social Media */}
                            <div className=" w-full  mt-4 md:w-1/2 md:mt-0 lg:w-1/2 px-12 pr-0  ">
                                <p className="text-white uppercase	">  <span className="mr mr-3 md:mr-5">follow us : </span>
                                    <Icon srcName={facebook} srcAlt='facebook' />
                                    <Icon srcName={twitter} srcAlt='twitter' />
                                    <Icon srcName={instagram} srcAlt='instagram' />
                                </p>
                            </div>
                        </div>
                        {/* copyRight */}
                        <div className="  text-white p-3 text-center border-t-solid border-t border-t-gray-600">
                            <p>Desiged by Recoded &copy;2020 Alright are reseved to findme </p>
                        </div>
                    </div></div></div>
                    
                    
                    // </Router>
    )
}
const LinkFooter = (props) => {
    return (
        <a  className="block text-white text-base hover:opacity-75 underline">{props.nameLink}</a>
    )
}
const Icon = (props) => {
    return (
        <a href="#"><img src={props.srcName} alt={props.srcAlt} className='icon mr-5 md:mr-5 hover:opacity-75 ' /></a>
    )
}
export default Footer