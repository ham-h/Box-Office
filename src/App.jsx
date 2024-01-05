import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';
import Mainlayout from './components/Mainlayout';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout/>}>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/contacts" element={<div>contacts</div>}></Route> */}
      {/* the /contacts  something with / represents path,so v can change url accordingly*/}
      <Route path="/starred" element={<Starred/>}></Route>
      </Route>
      <Route path="*"element={<div>notn found</div>} ></Route>
      {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
