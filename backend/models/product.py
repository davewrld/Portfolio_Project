#!/usr/bin/env python3

from . import db
from datetime import datetime

class Product(db.Document):
    """Product model"""
    name = db.StringField(required=True)
    description = db.StringField()
    price = db.FloatField(required=True)
    stock = db.FloatField(required=True)
    category = db.StringField(max_length=100)
    specifications = db.DictField()
    created_at = db.DateTimeField(default=datetime.now)
    updated_at = db.DateTimeField(default=datetime.now)

    meta = {
        'collection': 'products'  # Explicitly set the collection name
    }