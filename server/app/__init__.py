import os

from flask import Flask
from config import config
from flask_jwt_extended import JWTManager
from flask_cors import CORS

jwt = JWTManager()
cors = CORS(supports_credentials=True)


def create_app(config_name=None):
    if config_name is None:
        config_name = os.environ.get('APP_CONFIG', 'development')

    app = Flask(__name__)
    app.config.from_object(config[config_name])

    app.config['JWT_SECRET_KEY'] = 'super-secret'
    app.config['JWT_TOKEN_LOCATION'] = ['cookies']
    app.config['JWT_COOKIE_SECURE'] = False
    app.config['JWT_COOKIE_CSRF_PROTECT'] = False
    app.config['JWT_ACCESS_COOKIE_PATH'] = '/'
    app.config['JWT_REFRESH_COOKIE_PATH'] = '/user/refresh'

    jwt.init_app(app)
    cors.init_app(app, supports_credentials=True)

    from app.views import auth_bp
    app.register_blueprint(auth_bp)

    return app
