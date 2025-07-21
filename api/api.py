import datetime
from flask import Flask, jsonify, request

from flask_cors import CORS

app = Flask(__name__)
app.debug = True

CORS(app=app, origins="*")


@app.route("/")
def return_time():
    return jsonify(time=datetime.datetime.now())


@app.route("/profile", methods=["POST", "GET"])
def profile(user_id):
    if user_id == 1:
        profile = {
            "id": 1,
            "name": "Neel",
            "age": 25,
            "goal": ["Build Lean Muscle"],
            "current_weigh": 74,
            "consistency": "High",
        }
    return jsonify({"profile": profile})


@app.route("/signin", methods=["POST"])
def signin():
    print(request)
    data = request.get_json()

    email_id = data.get("email_id")
    password = data.get("password")

    if email_id == "neelharia20@gmail.com" and password == "1234":
        profile = {
            "id": 1,
            "name": "Neel",
            "age": 25,
            "goal": ["Build Lean Muscle"],
            "current_weigh": 74,
            "consistency": "High",
        }
        return jsonify({"message": "Login Success!", "id": profile["id"]})
    return jsonify({"message": "Invalid credentials!"})


if __name__ == "__main__":
    app.run(debug=True)
