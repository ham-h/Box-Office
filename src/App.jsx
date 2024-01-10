import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';
import Mainlayout from './components/Mainlayout';
import Show from './pages/Show';
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

      <Route path='/show/:showid' element={<Show/>}/>
      {/* http://localhost:3000/show/hghkj now vill get what is inside show compo, http://localhost:3000/show it ll show not found
      now to retrieve that id and to use it in show component?--to take showid from url--*/}
      <Route path="*"element={<div>notn found</div>} ></Route>

      {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />//to make url dynamic//now current v cant predict what can v input in box
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
// "format":"prettier --write src/**/*.{js,jsx}"
// npm run format
// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.
// from reactrourter