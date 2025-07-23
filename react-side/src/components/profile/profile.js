import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import ProfileDashboard from "./ProfileDashboard";

import React from "react";

const getProfileFromAPI = async (userId) => {
  try {
    const res = await fetch(`http://127.0.0.1:5000/profile/${userId}`);
    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
};

export const Profile = () => {
  const [profileName, setProfileName] = useState(null);
  const [lastWorkouts, setLastWorkout] = useState([]);
  const [nextWorkout, setNextWorkout] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const userId = query.get("user_id");

  useEffect(() => {
    if (!userId) {
      navigate("/signin");
    }

    const loadProfile = async () => {
      const data = await getProfileFromAPI(userId);
      if (data && data.fname) {
        setLastWorkout(data.lastWorkouts);
        setNextWorkout(data.nextWorkout);
        setProfileName(data.fname);
      }
    };
    loadProfile();
  }, [userId, navigate]);
  return (
    <DashboardLayout>
      <ProfileDashboard
        profileName={profileName}
        lastWorkouts={lastWorkouts}
        nextWorkout={nextWorkout}
        userId={userId}
      />
    </DashboardLayout>
  );
};
