import { Avatar } from "@mui/material";
import { CardHeader } from "@mui/material";
import { getImageUrl } from "./GetImage";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./DataList.css";

export default function DataList(props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  let listItems;
  listItems = props.allData.map((website, index) => (
    <li key={website._id}>
      <CardHeader
        avatar={<Avatar src={getImageUrl()}></Avatar>}
        title={
          <p>
            <b>Likes: {props.randomNumbers[index]}</b>
            <br></br>
            <b>{website.websiteName} : </b>
            <a href={website.urlAddress} target="_blank">
              Link
            </a>
          </p>
        }
        action={
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        }
      />
    </li>
  ));
  return (
    <div style={{ listStyleType: "none", padding: "0px" }}>
      <h1>
        <b>TOP 5 Website</b>
      </h1>{" "}
      {listItems}
    </div>
  );
}
