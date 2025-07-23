import datetime
from flask import Flask, jsonify, request
from dummy_data import profile_data

from flask_cors import CORS

app = Flask(__name__)
app.debug = True

CORS(app=app, origins="*")


# profile_data = {
#     "1": {
#         "email_id": "xyz@gmail.com",
#         "password": "1234",
#         "data": {
#             "fname": "Neel",
#             "lname": "Haria",
#             "age": 27,
#             "goal": ["Build Lean Muscle"],
#             "consistency": "High",
#             "lastWorkouts": [
#                 {
#                     "id": 1,
#                     "date": "2025-07-18T08:00:00Z",
#                     "type": "HIIT",
#                     "duration": 45,
#                     "current_weight": 77,
#                 },
#                 {
#                     "id": 2,
#                     "date": "2025-07-17T07:00:00Z",
#                     "type": "Yoga",
#                     "duration": 60,
#                     "current_weight": 74,
#                 },
#                 {
#                     "id": 3,
#                     "date": "2025-07-16T06:30:00Z",
#                     "type": "Strength",
#                     "duration": 50,
#                     "current_weight": 74,
#                 },
#                 {
#                     "id": 4,
#                     "date": "2025-07-15T09:00:00Z",
#                     "type": "Cardio",
#                     "duration": 40,
#                     "current_weight": 74,
#                 },
#                 {
#                     "id": 5,
#                     "date": "2025-07-14T10:00:00Z",
#                     "type": "Pilates",
#                     "duration": 55,
#                     "current_weight": 74,
#                 },
#             ],
#             "nextWorkout": [
#                 {
#                     "date": "2025-07-22T08:00:00Z",
#                     "type": "CrossFit",
#                 }
#             ],
#         },
#     }
# }

print(profile_data)


@app.route("/")
def return_time():
    return jsonify(time=datetime.datetime.now())


@app.route("/profile/<int:user_id>/weight", methods=["GET", "POST"])
def get_historical_weight(user_id):
    for key, value in profile_data.items():
        if str(key) == str(user_id):
            weight = []
            date = []
            historical_wo = value["data"]["lastWorkouts"]
            for _ in historical_wo:
                date.append(_["date"])
                weight.append(_["current_weight"])
            return jsonify({"date": date, "weight": weight})
    return jsonify({"message": "Invalid"})


@app.route("/profile/<int:user_id>", methods=["POST", "GET"])
def profile(user_id):
    for key, value in profile_data.items():
        if str(key) == str(user_id):
            return jsonify({"data": value["data"]})
    return jsonify({"message": "Invalid"})


@app.route("/signin", methods=["POST"])
def signin():
    data = request.get_json()
    email_id = data.get("email_id")
    password = data.get("password")
    for key, value in profile_data.items():
        if (email_id == value["email_id"]) and (password == value["password"]):
            return jsonify({"message": "Login Success!", "id": key})
    return jsonify({"message": "Invalid credentials!"})


if __name__ == "__main__":
    app.run(debug=True)
