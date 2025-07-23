import random
from datetime import datetime, timedelta
import json

first_names = [
    "Neel",
    "Ava",
    "Liam",
    "Emma",
    "Noah",
    "Olivia",
    "Sophia",
    "Jackson",
    "Mia",
    "Aiden",
]
last_names = [
    "Haria",
    "Smith",
    "Johnson",
    "Patel",
    "Brown",
    "Williams",
    "Jones",
    "Davis",
    "Garcia",
    "Miller",
]
goals = ["Build Lean Muscle", "Lose Weight", "Improve Flexibility", "Increase Stamina"]
workout_types = [
    "HIIT",
    "Yoga",
    "Strength",
    "Cardio",
    "Pilates",
    "CrossFit",
    "Zumba",
    "Cycling",
]


def random_date(start, end):
    delta = end - start
    return start + timedelta(
        days=random.randint(0, delta.days), hours=random.randint(5, 10)
    )


def generate_user(user_id):
    fname = random.choice(first_names)
    lname = random.choice(last_names)
    age = random.randint(18, 55)
    consistency = random.choice(["High", "Medium", "Low"])
    goal = [random.choice(goals)]

    last_workouts = []
    today = datetime.now()
    base_weight = random.randint(55, 95)

    for i in range(5):
        date = today - timedelta(days=i + 1)
        workout = {
            "id": i + 1,
            "date": date.isoformat(),
            "type": random.choice(workout_types),
            "duration": random.randint(30, 75),
            "current_weight": base_weight - random.randint(0, 3),
        }
        last_workouts.append(workout)

    next_workout = [
        {
            "date": (today + timedelta(days=random.randint(1, 3))).isoformat(),
            "type": random.choice(workout_types),
        }
    ]

    return {
        "email_id": f"user{user_id}@example.com",
        "password": "1234",
        "data": {
            "fname": fname,
            "lname": lname,
            "age": age,
            "goal": goal,
            "consistency": consistency,
            "lastWorkouts": last_workouts,
            "nextWorkout": next_workout,
        },
    }


profile_data = {str(user_id): generate_user(user_id) for user_id in range(1, 1001)}

# # Optionally save to a file
# with open("profile_data.json", "w") as f:
#     json.dump(profile_data, f, indent=2)
