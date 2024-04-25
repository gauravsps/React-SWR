import { useLocation, useNavigate } from "react-router-dom";

const TodoItem = (props) => {
  const { id, title, description, handleDelete } = props ?? {};
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <div className="item-container">
      <div className="item-left">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="item-right">
        {isHome && (
          <button onClick={() => navigate(`/${id}`)} className="view-btn">
            View
          </button>
        )}

        <button
          onClick={() => navigate(isHome ? "/test" : "/")}
          className="btn"
        >
          Test Cache
        </button>
        {isHome && (
          <button onClick={() => handleDelete(id)} className="delete-btn">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
