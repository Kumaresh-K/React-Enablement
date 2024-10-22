import { useNavigate } from "react-router-dom";

export default function useNavigationService() {
  const navigate = useNavigate();

  return (navigationPage: string) => {
    navigate(`/places/${navigationPage}`);
  };
}
