import { useState, useEffect, useTransition } from "react";
import { useNavigate } from "react-router-dom";

const getProfileFromAPI = async (userId) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/profile/${userId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const Profile = () => {
  const [profileName, setProfileName] = useState(null);
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const userId = query.get("user_id");

  useEffect(() => {
    if (!userId) {
      navigate("/signin");
    }

    const loadProfile = async () => {
      const data = await getProfileFromAPI(userId);
      if (data && data.name) {
        setProfileName(data.name);
      }
    };
    loadProfile();
  }, [userId, navigate]);

  return;
  <div c></div>;
};
