import { useEffect, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import './where.css';

const weekday = [
  "Sunday hours:<br />10:00 AM - 4:00 PM",
  "Monday hours:<br />9:00 AM - 6:00 PM",
  "Tuesday hours:<br />9:00 AM - 6:00 PM",
  "Wednesday hours:<br />9:00 AM - 6:00 PM",
  "Thursday hours:<br />9:00 AM - 6:00 PM",
  "Friday hours:<br />9:00 AM - 7:00 PM",
  "Saturday hours:<br />10:00 AM - 5:00 PM"
];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const holidayHours = [
  { name: "New Year's Day", date: new Date('2024-01-01'), hours: 'Closed' },

  { name: "Memorial Day", date: new Date('2024-05-27'), hours: 'Open 9:00 AM - 2:00 PM' }, // Last Monday in May for 2024
  { name: "Independence Day", date: new Date('2024-07-04'), hours: 'Closed' },
  { name: "Labor Day", date: new Date('2024-09-02'), hours: 'Open 9:00 AM - 2:00 PM' }, // First Monday in September for 2024
  { name: "Columbus Day", date: new Date('2024-10-14'), hours: 'Open regular hours' }, // Second Monday in October for 2024
  { name: "Veterans Day", date: new Date('2024-11-11'), hours: 'Open 10:00 AM - 4:00 PM' },
  { name: "Thanksgiving Day", date: new Date('2024-11-28'), hours: 'Closed' }, // Fourth Thursday in November for 2024
  { name: "Christmas Eve", date: new Date('2024-12-24'), hours: 'Open 9:00 AM - 2:00 PM' },
  { name: "Christmas Day", date: new Date('2024-12-25'), hours: 'Closed' },
  { name: "New Year's Eve", date: new Date('2024-12-31'), hours: 'Open 9:00 AM - 4:00 PM' },
];


const loader = new Loader({
  apiKey: "AIzaSyCbGfvKtbF957oCWQTc4TpORZ3DhgLmaL4",
  version: "weekly",
});

export default function Where() {
  const [currentDayIndex, setCurrentDayIndex] = useState(new Date().getDay());
  const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);
  const [showday, setShowday] = useState(() => findNearestHoliday() || { name: 'No upcoming holidays', hours: '' });

  const getDay = (offset = 0) => {
    const dayIndex = (currentDayIndex + offset + 7) % 7;
    return weekday[dayIndex];
  };

  const handleDayChange = (offset) => {
    const newDayIndex = (currentDayIndex + offset + 7) % 7;
    setCurrentDayIndex(newDayIndex);
    setShowday({ name: dayNames[newDayIndex], hours: weekday[newDayIndex] });
  };

  const getDayName = (offset) => {
    const dayIndex = (currentDayIndex + offset + 7) % 7;
    return dayNames[dayIndex];
  };

  useEffect(() => {
    let map;

    loader.importLibrary("maps").then((googleMaps) => {
      map = new googleMaps.Map(document.getElementById("map"), {
        center: { lat: 44.476, lng: -73.212 },
        zoom: 16,
      });
    }).catch(e => {
      console.error("Error loading Google Maps: ", e);
    });
  }, []);

  function findNearestHoliday() {
    const today = new Date();
    let nearestHoliday = null;
    let smallestDiff = Infinity;

    holidayHours.forEach(holiday => {
      const holidayDate = new Date(holiday.date);
      console.log(holidayDate)
      const timeDiff = holidayDate - today;

      // Only consider future holidays
      if (timeDiff >= 0 && timeDiff < smallestDiff) {
        smallestDiff = timeDiff;
        nearestHoliday = holiday;
      }
    });

    return nearestHoliday;
  }

  const handleHolidayChange = () => {
    const nextHolidayIndex = (currentHolidayIndex + 1) % holidayHours.length;
    setCurrentHolidayIndex(nextHolidayIndex);
    setShowday(holidayHours[nextHolidayIndex]);
  };

  return (
    <>
      <div id="map" style={{ height: "500px", width: "100%" }}></div>
      <div className="center">
        <div className='hours'>
          {weekday.map((day, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: day }}></div>
          ))}
        </div>
        <div className='buttonsandstuff'>
          {showday ? (
            <>
              <h1>{showday.name}</h1>
              <h2>hours: {showday.hours}</h2>
            </>
          ) : (
            <h1>No upcoming holidays</h1>
          )}
          <button onClick={handleHolidayChange}>Next Holiday</button>
        </div>
      </div>
    </>
  );
}
