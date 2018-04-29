from flask import jsonify, request, Blueprint, render_template
from flask_jwt_extended import (
    jwt_required, create_access_token,
    create_refresh_token,
    set_access_cookies,
    set_refresh_cookies,
    get_jwt_identity,
    jwt_refresh_token_required,
    unset_jwt_cookies
)
import datetime


auth_bp = Blueprint('auth', __name__)


# @auth_bp.route('/')
# def homepage():
#     return render_template('index.html')


@auth_bp.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if username != 'test' or password != 'test':
        return jsonify({'login': False}), 401

    # Create the tokens we will be sending back to the user
    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)

    # Set the JWT cookies in the response
    resp = jsonify({'logged': True, 'expire': (datetime.datetime.now() +
                                               datetime.timedelta(minutes=15)).timestamp()})
    set_access_cookies(resp, access_token)
    set_refresh_cookies(resp, refresh_token)
    return resp, 200


@auth_bp.route('/user/refresh', methods=['POST'])
@jwt_required
@jwt_refresh_token_required
def refresh():
    # Create the new access token
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)

    # Set the access JWT and CSRF double submit protection cookies
    # in this response
    resp = jsonify({'refresh': True})
    set_access_cookies(resp, access_token)
    return resp, 200


@auth_bp.route('/api/protected', methods=['GET'])
@jwt_required
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200


@auth_bp.route('/logout', methods=['POST'])
@jwt_required
def logout():
    print(request.cookies)
    resp = jsonify({'logout': True})
    unset_jwt_cookies(resp)
    return resp, 200
