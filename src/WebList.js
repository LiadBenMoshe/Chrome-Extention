import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import PublicIcon from "@material-ui/icons/Public";
import AddPinIcon from "@material-ui/icons/AddCircle";
import "./WebList.css";
import backgroundImage from "./backgroundPhoto/Background_for_website_addresses.png";
import Container from "./Container/index";
import DataList from "./DataList";
import { addNew, getFiveUrls } from "./MongoDB";

const styles = {
  paperContainer: {
    backgroundImage: `url(${backgroundImage})`,
    minHeight: "494px",
  },
};

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function isNotEmptyString(str) {
  return str.trim().length > 0;
}

const WebList = () => {
  const triggerText = "Add New Page";
  const onSubmit = (event) => {
    event.preventDefault(event);
    let newObject = {
      websiteName: event.target.nameOfWebsite.value,
      urlAddress: event.target.email.value,
      advertiser: event.target.yourName.value,
    };
    if (
      isValidUrl(newObject.urlAddress) &&
      isNotEmptyString(newObject.websiteName) &&
      isNotEmptyString(newObject.advertiser)
    ) {
      console.log(newObject);
    } else {
      console.log("The details are not valid");
    }

    //addNew(newObject);
  };

  const [showResults, setShowResults] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (newValue == 0) {
      document.getElementById("myDataList").style.display = "block";
      setShowResults(false);
      setValue(0);
    } else {
      document.getElementById("myDataList").style.display = "none";
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
        <div id="myDataList">
          <DataList></DataList>
        </div>
      </Paper>
    </div>
  );
};

export default WebList;
