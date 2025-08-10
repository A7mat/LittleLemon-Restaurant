import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Main from './pages/Main.js';
import Bookings from './pages/bookings/index.js';
import ConfirmedBooking from './pages/bookings/ConfirmedBooking.js';
import { useEffect, useState } from 'react';
import './styles/App.scss';
import PageNotReady from './pages/PageNotReady.js';

function App() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        // const times = await fetchAPI(selectedDate);
        // console.log("TIMES:", times)
        // setAvailableTimes(times);
      } catch (error) {
        console.error("Error fetching available times:", error);
        setAvailableTimes([]); // fallback in case of error
      }
    };

    fetchTimes();
  }, [selectedDate]);

  return (
    <Router basename="/Little-Lemon-Restaurant">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/reservations"
            element={
              <Bookings
                availableTimes={availableTimes}
                setSelectedDate={setSelectedDate}
              />
            }
          />
          <Route
            path="/menu"
            element={ <PageNotReady/> }
          />
          <Route
            path="/order"
            element={ <PageNotReady/> }
          />
          <Route
            path="/login"
            element={ <PageNotReady/> }
          />
          <Route
            path="/confirmed-booking"
            element={ <ConfirmedBooking/> }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
