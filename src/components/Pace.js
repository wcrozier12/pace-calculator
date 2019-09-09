import React from "react";
import { Formik } from "formik";

const TotalTime = ({ setSelectedTotalTime}) => {
  const calculateTotalTimeInSeconds = values => {
    let seconds = 0;
    
    Object.keys(values).forEach(valType => {
      switch (valType) {
        case "hours":
          seconds += Number(values[valType]) * 60 * 60;
          break;
        case "minutes":
          seconds += Number(values[valType]) * 60;
          break;
        case "seconds":
          seconds += Number(values[valType]);
          break;
        default:
          break;
      }
    });
    return seconds;
  };
  return (
    <div>
      <Formik
        initialValues={{ hours: "00", minutes: "00", seconds: "00" }}
        onSubmit={(values, actions) => {}}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            {Object.keys(props.values).map(value => (
              <>
                <input
                  type="text"
                  onChange={e => {
                    props.handleChange(e);
                    setSelectedTotalTime(calculateTotalTimeInSeconds({...props.values, [value]: e.target.value}));
                  }}
                  onBlur={props.handleBlur}
                  value={props.values[value]}
                  name={value}
                />
                <span>{value}</span>
              </>
            ))}
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </form>
        )}
      />
    </div>
  );
};

export default TotalTime;
