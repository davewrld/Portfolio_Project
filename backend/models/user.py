from . import db

class User(db.Document):
    """User model."""
    username = db.StringField(required=True, unique=True)
    email = db.StringField(required=True, unique=True)
    password_hash = db.StringField(required=True)