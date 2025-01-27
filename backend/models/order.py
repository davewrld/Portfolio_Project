#!/usr/bin/env python3

from . import db
from models.product import Product
from datetime import datetime

class OrderItem(db.EmbeddedDocument):
    """Order item model."""
    product = db.ReferenceField(Product, required=True)
    quantity = db.FloatField(required=True)

class Order(db.Document):
    """Order model."""
    user_id = db.StringField(required=True)
    items = db.ListField(db.EmbeddedDocumentField(OrderItem))
    total_price = db.FloatField(required=True)
    order_date =  db.DateTimeField(default=datetime.now)