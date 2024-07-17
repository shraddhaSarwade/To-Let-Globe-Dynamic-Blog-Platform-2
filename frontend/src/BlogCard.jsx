import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "./BlogCard.css";
import DateCategory from "./DateCategory";
import Views from "./Views";
import Likes from "./Likes";
import AuthorDetails from "./AuthorDetails";
// import axios from "axios";
import axios from "./axiosConfig";
import { useNavigate } from "react-router-dom";

//Component to display a Blog Card in all Blogs Page
const BlogCard = ({
  id,
  title,
  author,
  content,
  image,
  role,
  category,
  views,
  likes,
  date,
  intro,
}) => {
  // console.log(process.env.REACT_APP_BACKEND);
  const navigate = useNavigate();

  const [like, setLike] = useState(false);

  const handleLikes = async () => {
    // console.log("clicked");
    if (like === false) {
      const dataToDB = {
        id: id,
        title: title,
        author: author,
        content: content,
        image: image,
        role: role,
        category: category,
        views: views,
        likes: likes + 1,
        date: date,
        intro: intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          // console.log("Success:", response.data);
          // Redirect to the /blogs page
          setLike(!like);
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error actions, e.g., show error message
        });
    } else {
      const dataToDB = {
        id: id,
        title: title,
        author: author,
        content: content,
        image: image,
        role: role,
        category: category,
        views: views,
        likes: likes - 1,
        date: date,
        intro: intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          // console.log("Success:", response.data);
          // Redirect to the /blogs page
          setLike(!like);
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error actions, e.g., show error message
        });
    }
  };

  const handleViews = async () => {
    const dataToDB = {
      id: id,
      title: title,
      author: author,
      content: content,
      image: image,
      role: role,
      category: category,
      views: views + 1,
      likes: likes,
      date: date,
      intro: intro,
    };

    const resp = await axios.post(
      process.env.REACT_APP_BACKEND + `/blogs/updateViews/${id}`,
      dataToDB
    );
    // console.log("Success:", response.data);
    navigate(`/showBlog/${id}`);
  };

  return (
    <div className="card" style={{ width: "30%", height: "70vh" }}>
      {/* <div class="card" style={{ width: "30%" }}> */}
      <img
        src={image}
        className="card-img-top"
        alt="..."
        height="40%"
        style={{ objectFit: "cover" }}
      />
      <div className="row">
        <div className="card-body" id="#nopadding">
          <p className="card-text">
            <DateCategory date={date} category={category} />
          </p>

          <div
            style={{
              height: "20vh",
              overflow: "hidden",
              //   textOverflow: "ellipses",
              //   whiteSpace: "nowrap",
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text"
              style={{
                height: "20vh",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "16px",
              }}
            >
              {intro}
            </p>
          </div>

          <div>
            {/* <a class="readmore btn" onClick={handleViews} href={`/showBlog/${id}`}> */}
            <a className="readmore btn" onClick={handleViews}>
              Read More <TrendingFlatIcon />
            </a>
          </div>

          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-8">
                <AuthorDetails author={author} role={role} />
              </div>
              <div className="col-4 p-0 d-flex justify-content-between">
                <div className="col-6 p-0 d-inline">
                  <Views views={views} />
                </div>
                <div className="col-5 p-0 d-inline">
                  <Likes likes={likes} handleLikes={handleLikes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
