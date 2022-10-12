import React  from 'react'
import './HomeStyles.css'
import 'bootstrap/dist/css/bootstrap.css';
import titleImage from "../../images/title-image.png"
import mentorImage from "../../images/hierarchy/HassanIqbal_mentor.png"
import presidentImage from "../../images/hierarchy/TayyaburRehman_president.jpg"
import vicePresidentImage from "../../images/hierarchy/SanaRizvi_VicePresident.jpg"
import generalSecretaryImage from "../../images/hierarchy/AliRaza_GeneralSecretary.jpg"
import bloodDonationImage from "../../images/action/blood-donation.png"
import bloodRequestImage from "../../images/action/blood-request.png"
import donateMoneyImage from "../../images/action/donate-money.png"
import QalbeSaleem8 from "../../images/events/qalbesaleem8.jpg"
import QalbeSaleem7 from "../../images/events/qalbesaleem7.jpg"
import QuateAkhwat from "../../images/events/QuateAkhwat.jpg"
import navLogo from "../../images/nav-logo.png"
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <>
            <section class="white-section" id="title">
                <div class="row">
                    <div class="col-xl-6">
                        <img class="title-image" src={titleImage} alt="" />
                    </div>

                    <div class="col-xl-6 landing">
                        <h1 class="big-headings">
                            Donate Your Blood to Us, Save More Lives Together
                        </h1>
                        <p>
                            Donate blood, Save Lives. One blood donation can save up to three
                            lives. Your donation can make someone's life better. Together we can
                            make world more healthier and better.
                        </p>

                        <div>
                            <button class="button">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="hadith colored-section">
                <h1>وَ مَنْ اَحْیَاهَا فَكَاَنَّمَاۤ اَحْیَا النَّاسَ جَمِیْعًاؕ</h1>
                <h3>
                    "and whoever saves a life,<br />
                    it will be as if they saved all of humanity"
                </h3>
                <h5>Quran 5:32</h5>
            </section>

            <section class="white-section" id="aboutus">
                <div class="section-heading">
                    <h5>About Us</h5>
                    <div>
                        <h1>Air University Blood Donor Society</h1>
                        <button class="button">View More</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-8">
                        <p>
                            Air University Blood Donors Society is a team of highly motivated
                            students, who provide their blood and services for the sake of the
                            welfare of mankind and saving lives. This society's main aim is to
                            provide blood in Islamabad and Rawalpindi. In the hour of need, we
                            contact the volunteer with the required blood group and our team
                            serves as a link between the volunteer and the patient.
                        </p>
                        <ul class="tick">
                            <li><i class="fa-solid fa-check fa-lg"></i>Good Service</li>
                            <li><i class="fa-solid fa-check fa-lg"></i>Help People</li>
                            <li><i class="fa-solid fa-check fa-lg"></i>Raise Awareness</li>
                            <li><i class="fa-solid fa-check fa-lg"></i>24h Service</li>
                            <li><i class="fa-solid fa-check fa-lg"></i>BLood Donors</li>
                            <li><i class="fa-solid fa-check fa-lg"></i>Blood Bank</li>
                        </ul>
                    </div>
                    <div class="col-xl-4">
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100" src={mentorImage} alt="afaq" />
                                <Carousel.Caption>
                                    <h3 className='carousel_person_name'>Mr. Hassan Iqbal</h3>
                                    <p className='carousel_person_detail'>Mentor</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100" src={presidentImage} alt="afaq" />
                                <Carousel.Caption>
                                    <h3 className='carousel_person_name'>Tayyab-ur-rehman</h3>
                                    <p className='carousel_person_detail'>President</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100" src={vicePresidentImage} alt="afaq" />
                                <Carousel.Caption>
                                    <h3 className='carousel_person_name'>Sana Rizvi</h3>
                                    <p className='carousel_person_detail'>Vice President</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100" src={generalSecretaryImage} alt="afaq" />
                                <Carousel.Caption>
                                    <h3 className='carousel_person_name'>Hamza</h3>
                                    <p className='carousel_person_detail'>General Secretary</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </section>

            <section class="colored-section" id="services">
                <div class="row-container">
                    <div class="row-heading">
                        <div class="section-heading">
                            <h5>Services</h5>
                            <div>
                                <h1>Best Services</h1>
                                <button class="button">View More</button>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="column col-xl-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="action-img">
                                        <img src={bloodDonationImage} alt="" />
                                    </div>
                                    <div class="action-txt">
                                        <h2>Blood Donation</h2>
                                        <p>
                                            Register to be a blood donor for AUBDS by filling the form.
                                            Give blood and save lives together. Find out more about
                                            blood donation.
                                        </p>
                                        <a class="read-more" href="#none">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column col-xl-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="action-img">
                                        <img src={bloodRequestImage} alt="" />
                                    </div>
                                    <div class="action-txt">
                                        <h2>Request Blood</h2>
                                        <p>
                                            Please fill the form to post your blood request. We will
                                            inform our donors and will contact you soon. We hope the
                                            needy people recover soon.
                                        </p>
                                        <a class="read-more" href="#none">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="column col-xl-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="action-img">
                                        <img src={donateMoneyImage} alt="" />
                                    </div>
                                    <div class="action-txt">
                                        <h2>Donate Money</h2>
                                        <p>
                                            If you are unable to donate blood, you can still help our
                                            cause by donating money. Donated money will be used in our
                                            different projects ahead.
                                        </p>
                                        <a class="read-more" href="#none">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="black-section" id="achievement">
                <div class="achievements">
                    <h5>We Help People</h5>
                    <h1>Our Achievements</h1>
                    <p>
                        Successful projects: Qalb e Saleem, Project Sayebaan and Project Quat
                        e Akhwat.
                    </p>
                </div>

                <div class="counters">
                    <div>
                        <i class="bi bi-patch-check icon"></i>
                        <div class="counter-box">
                            <div class="counter" data-target="10">0</div>
                            <div class="plus">
                                <i class="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Year Experience</p>
                    </div>

                    <div>
                        <i class="bi bi-people icon"></i>
                        <div class="counter-box">
                            <div class="counter" data-target="50">0</div>
                            <div class="plus">
                                <i class="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Members</p>
                    </div>

                    <div>
                        <i class="bi bi-bag-plus icon"></i>
                        <div class="counter-box">
                            <div class="counter" data-target="1000">0</div>
                            <div class="plus">
                                <i class="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Blood-bags Collected</p>
                    </div>
                    <div>
                        <i class="bi bi-hospital icon"></i>
                        <div class="counter-box">
                            <div class="counter" data-target="8">0</div>
                            <div class="plus">
                                <i class="fa-solid fa-plus fa-lg"></i>
                            </div>
                        </div>
                        <p>Projects</p>
                    </div>
                </div>
            </section>

            <section class="white-section" id="events">
                <div class="section-heading">
                    <h5>Events</h5>
                    <div>
                        <h1>Blood Donation Events</h1>
                        <button class="button">View More</button>
                    </div>
                </div>

                <div class="row-container">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card">
                                <div class="event-img">
                                    <img src={QalbeSaleem8} alt="qalbesaleem8" />
                                </div>
                                <div class="event-description">
                                    <div class="event-date">
                                        <i class="bi bi-calendar-check"> March 16, 2022</i>
                                    </div>
                                    <div class="event-location">
                                        <i class="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div class="event-txt">
                                <h2>Qalb e Saleem 8</h2>
                                <p>
                                    The biggest event of AUBDS is Project Qalb e Saleem 8.
                                    A blood camp for those who are in dire need of your support through blood donation.
                                </p>
                                <a class="read-more" href="#none">Read more</a>
                            </div>
                        </div>


                        <div class="col-xl-4">
                            <div class="card">
                                <div class="event-img">
                                    <img src={QalbeSaleem7} alt="qalbesaleem7" />
                                </div>
                                <div class="event-description">
                                    <div class="event-date">
                                        <i class="bi bi-calendar-check"> October 4, 2021</i>
                                    </div>
                                    <div class="event-location">
                                        <i class="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div class="event-txt">
                                <h2>Qalb e Saleem 7</h2>
                                <p>
                                    AUBDS conducted a 3 day blood camp at Air University Islamabad campus. The event was
                                    succesful and we collected a lot of blood bags.
                                </p>
                                <a class="read-more" href="#none">Read more</a>
                            </div>
                        </div>

                        <div class="col-xl-4">
                            <div class="card">
                                <div class="event-img">
                                    <img src={QuateAkhwat} alt="QuateAkhwat" />
                                </div>
                                <div class="event-description">
                                    <div class="event-date">
                                        <i class="bi bi-calendar-check"> April 28, 2020</i>
                                    </div>
                                    <div class="event-location">
                                        <i class="bi bi-geo-alt-fill"> Air University</i>
                                    </div>
                                </div>
                            </div>
                            <div class="event-txt">
                                <h2>Quat e Akhwat</h2>
                                <p>
                                    During COVID-19 we destributed rations to 106 families across 16 cities of Pakistan, supported 10 families
                                    in medical bills, fees, rental payments etc.
                                </p>
                                <a class="read-more" href="#none">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="joinus">
                <div class="society">
                    <h5>Join Us</h5>
                    <h1>Become a Member</h1>
                    <p>
                        If you are a student of Air University Islamabad, click on join and
                        fill the form to become part of Air University Blood Donor Society.
                    </p>
                    <div>
                        <button>Join</button>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div class="u-footer">
                    <div class="l-footer">
                        <div class="logo">
                            <img src={navLogo} alt="" />
                            <h1>AUBDS</h1>
                        </div>
                        <p>Follow us on social media platforms.</p>
                        <div class="social">
                            <a href="https://www.facebook.com/AirUniBDS"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/au.bds/"><i class="fa fa-instagram"></i></a>
                            <a href="#none"><i class="fa fa-youtube"></i></a>
                            <a href="https://twitter.com/Aubds_"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>

                    <ul class="r-footer">
                        <li class="features">
                            <h3>Quick Links</h3>
                            <ul class="box">
                                <li><a href="#none">Become Donor</a></li>
                                <li><a href="#none">Request Blood</a></li>
                                <li><a href="#none">Donate Money</a></li>
                            </ul>
                        </li>
                        <li class="features">
                            <h3>Useful Links</h3>
                            <ul class="box">
                                <li><a href="#none">About Us</a></li>
                                <li><a href="#none">Become a member</a></li>
                                <li><a href="#none">Events</a></li>
                            </ul>
                        </li>
                        <li class="features">
                            <h3>Contact</h3>
                            <ul class="box">
                                <li><a href="#none">Air University, Islamabad</a></li>
                                <li><a href="#none">+92 335 9344822</a></li>
                                <li><a href="#none">redirect@mail.com</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="b-footer">
                    <p>
                        All rights reserved. <br />
                        © Air University Blood Donor Society 2022
                    </p>
                </div>
            </footer>


        </>

    )
}

export default Home