from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models.user import User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.objects(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'user': user.username}), 200
    return jsonify({'message': 'Invalid credentials'}), 401

@auth_bp.route('/auth/logout', methods=['POST'])
def logout():
    return jsonify({'message': 'Logout successful'}), 200

@auth_bp.route('/auth/check', methods=['GET'])
def check_auth():
    return jsonify({'user': 'dummy_user'}), 200