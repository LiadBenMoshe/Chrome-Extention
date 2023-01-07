import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import PublicIcon from "@material-ui/icons/Public";
import AddPinIcon from "@material-ui/icons/AddCircle";
import "./WebList.css";
import backgroundImage from "./backgroundPhoto/Background_for_website_addresses.png";
import Container from "./Container/index";
const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundImage})`,
    minHeight: "500px",
  },
};

const WebList = () => {
  const triggerText = "Add New Page";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  const [showResults, setShowResults] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const [myList, setMyList] = useState([
    "999XXXXXXX",
    "8575XXXXXX",
    "99XXXXXXXX",
  ]);

  const handleChange = (event, newValue) => {
    if (newValue == 0) {
      setMyList(["999XXXXXXX", "8575XXXXXX", "99XXXXXXXX"]);
      document.getElementById("mylist").style.display = "block";
      setShowResults(false);
      setValue(0);
    } else {
      document.getElementById("mylist").style.display = "none";
      setValue(1);
      setShowResults(true);
    }
  };

  return (
    <div
      style={{
        marginLeft: "5%",
        marginRight: "5%",
      }}
    >
      <Paper elevation={10} style={styles.paperContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab
            icon={<PublicIcon style={{ color: "#101112" }} />}
            aria-label="phone"
          />
          <Tab
            icon={<AddPinIcon style={{ color: "#101112" }} />}
            aria-label="add"
          />
        </Tabs>
        <div>
          <br></br>
          <br></br>
          {showResults ? (
            <Container triggerText={triggerText} onSubmit={onSubmit} />
          ) : null}
        </div>

        <ul id="mylist">
          <li>{myList[0]}</li>
          <li>{myList[1]}</li>
          <li>{myList[2]}</li>
        </ul>
      </Paper>
    </div>
  );
};

export default WebList;
