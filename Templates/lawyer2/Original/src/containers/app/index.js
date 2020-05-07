import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage'
import AutoAccidentsPage from '../Pages/AutoAccidentsPage'
import PremisesLiabilityPage from '../Pages/PremisesLiabilityPage'
import ConstructionAccidentsPage from '../Pages/ConstructionAccidentsPage'
import ChildCareNegligencePage from '../Pages/ChildCareNegligencePage'
import ElderCareNegligencePage from '../Pages/ElderCareNegligencePage'
import MedicalMalpracticePage from '../Pages/MedicalMalpracticePage'
import WrongfulDeathPage from '../Pages/WrongfulDeathPage'
import WorkersCompensationPage from '../Pages/WorkersCompensationPage'
import RealEstateLitigationPage from '../Pages/RealEstateLitigationPage'
import BusinessDisputesPage from '../Pages/BusinessDisputesPage'
import AttorneysPage from '../Pages/AttorneysPage'
import StevenShakhnevichPage from '../Pages/StevenShakhnevichPage'
import MarthaTabachnikovaPage from '../Pages/MarthaTabachnikovaPage'
import ContactPage from '../Pages/ContactPage'
import './App.css';

class App extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <ToastContainer autoClose={2500} position="top-center" />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/auto-accidents" component={AutoAccidentsPage} />
                        <Route exact path="/premises-liability" component={PremisesLiabilityPage} />
                        <Route exact path="/construction-accidents" component={ConstructionAccidentsPage} />
                        <Route exact path="/child-care-negligence" component={ChildCareNegligencePage} />
                        <Route exact path="/elder-care-negligence" component={ElderCareNegligencePage} />
                        <Route exact path="/medical-malpractice" component={MedicalMalpracticePage} />
                        <Route exact path="/wrongful-death" component={WrongfulDeathPage} />
                        <Route exact path="/workers-compensation" component={WorkersCompensationPage} />
                        <Route exact path="/real-estate" component={RealEstateLitigationPage} />
                        <Route exact path="/business-law" component={BusinessDisputesPage} />
                        <Route exact path="/our-attorneys" component={AttorneysPage} />
                        <Route exact path="/our-attorneys/steven-shakhnevich" component={StevenShakhnevichPage} />
                        <Route exact path="/our-attorneys/martha-tabachnikova" component={MarthaTabachnikovaPage} />
                        <Route exact path="/contact" component={ContactPage} />

                    </Switch>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
