import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Main from './pages/Main.js';
import BookingView from './pages/BookingView.js';
import { useEffect, useState } from 'react';
import './styles/App.scss';

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
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/booking"
            element={
              <BookingView
                availableTimes={availableTimes}
                setSelectedDate={setSelectedDate}
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
