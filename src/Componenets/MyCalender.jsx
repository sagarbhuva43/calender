import React from "react";
import { useEffect, useState } from "react";
// import MyData from "./MyData";
import { CircularProgress } from "@mui/material";
import CardData from "./CardData";
import Styles from "./CardData.module.css";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function MyCalender() {
  const [mydata, setMyData] = useState([]);
  const [day, setDay] = useState([]);
  const [num, setNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setNum(num + value);
    if (num > 11 || num < 0) {
      setNum(0);
    }
  };
  var months = month[num];
  useEffect(() => {
    getData();
  }, [months]);

  let getData = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://v1.igpods.com/api/social_calendar/get/${months}`
      );
      let data = await res.json();
      console.log(data.days);
      setMyData(data);
      setDay(data.days)
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  };
  const { calendar_banner_style, calendar_banner_text, calendar_banner_url, days } =
    mydata;

  return (
    <div>
        <div Style={calendar_banner_style} className="background">
          {loading && <CircularProgress className="loading" />}
          <div className="headline">
            <div className="leftside">
              <iconify-icon
                 width="40" height="40"
                icon="bi:arrow-left-circle-fill"
                onClick={() => handleChange(-1)}
              ></iconify-icon>
            </div>
            {calendar_banner_text}
            <span className="rightside">
              <iconify-icon
                width="40" height="40"
                icon="bi:arrow-right-circle-fill"
                onClick={() => handleChange(1)}
              ></iconify-icon>
          </span>
          {error && <p>Data is not fatching properly</p>}
          </div>
      </div>
      {/* {mydata !== null && <CardData mydata={mydata} />} */}
      <div className="cssgrid">
        {day.map((el) => (
          <CardData daysdata={el} key={el._id} />
        ))};
      </div>
    </div>
  );
}
export default MyCalender;
