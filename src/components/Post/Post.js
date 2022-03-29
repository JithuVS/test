import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const titleref = useRef();
  const commentref = useRef();

  const deleteRecord = (id) => {
    const newState = data.filter((item) => {
      return item.id !== id.target.id;
    });
    dispatch({ type: "DELETE", payload: newState });
  };

  const click = (e) => {
    e.preventDefault();

    const title = titleref.current.value;
    const comment = commentref.current.value;

    const newData = {
      id: new Date().toString().trim() + Math.random(),
      title,
      comment,
    };

    dispatch({ type: "UPDATE", payload: newData });
  };

  return (
    <div>
      <section>
        <form className="block">
          <input
            className="fields"
            ref={titleref}
            data-test="post-title"
            type="text"
            id="title"
            placeholder="Title"
          ></input>{" "}
          <br></br>
          <br></br>
          <textarea
            className="fields"
            ref={commentref}
            data-test="post-comment"
            id="comment"
            placeholder="Comment"
          ></textarea>
          <br></br>
          <button data-test="post-button" onClick={click}>
            submit
          </button>
        </form>
        <hr></hr>
        <section>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                data-test={`list-${item.title}`}
                onClick={deleteRecord}
                id={item.id}
              >
                {item.title}
                {item.comment}
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};

export default Post;
