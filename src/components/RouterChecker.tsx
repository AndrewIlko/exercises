import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RouterChecker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/form");
  }, []);

  return <></>;
};

export default RouterChecker;
