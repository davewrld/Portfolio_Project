#!/usr/bin/env python3

from flask import Flask
from config import Config
from models import db


def create_app():
    """"Function intializes app instance

    Return: app instance.
    """

    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize MongoEngine
    db.init_app(app)

    # Register routes
    from routes import initialize_routes
    initialize_routes(app)

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
