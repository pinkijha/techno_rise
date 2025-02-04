import { Provider } from "react-redux";
import Body from "./JobPost/components/Body";
import store from "./JobPost/utils/redux/appStore";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Overview from "./JobPost/components/pages/Overview";
import Dashboard from "./JobPost/components/Dashboard/Dashboard";
import MainSetting from "./JobPost/components/pages/settings/MainSetting";
import Applications from "./JobPost/components/Applications"

const Home = () => <h1>Home</h1>;
const FindCandidate = () => <h1>FindCandidate</h1>;
const MyJobs = () => <h1>MyJobs</h1>;
// const Applications = () => <h1>Applications</h1>;
const CustomerSupports = () => <h1>CustomerSupports</h1>;

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Body>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-candidate" element={<FindCandidate />} />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="overview" element={<Overview />} />
                <Route path="settings" element={<MainSetting/>} />
              </Route>
              <Route path="/my-jobs" element={<MyJobs />} />
              <Route path="/applications" element={<Applications/>} />
              <Route path="/customer-supports" element={<CustomerSupports />} />
            </Routes>
          </Body>
        </Router>
      </Provider>
    </>
  );
}

export default App;
