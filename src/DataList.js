import { useEffect } from "react";
import { websites } from "./Data";
import { Avatar } from "@mui/material";
import { CardHeader } from "@mui/material";
import { getImageUrl } from "./GetImage";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import "./DataList.css";

export default function List() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  let listItems;
  let myData = websites();
  console.log(websites());
  listItems = myData.map((website) => (
    <li key={website._id}>
      <CardHeader
        avatar={<Avatar src={getImageUrl()}></Avatar>}
        title={
          <p>
            <b>Likes: {website.likes}</b>
            <br></br>
            <b>{website.name} : </b>
            <a href="https://hankhank10.github.io/fakeface/">Link</a>
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
  console.log(listItems);
  return (
    <div style={{ listStyleType: "none", padding: "0px" }}>
      <h1>
        <b>TOP 5 Website</b>
      </h1>{" "}
      {listItems}
    </div>
  );
}
