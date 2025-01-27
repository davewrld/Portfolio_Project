from flask import Blueprint, request, jsonify
from models.order import Order, OrderItem
from models.product import Product

order_bp = Blueprint('orders', __name__)

@order_bp.route('/<user_id>', methods=['GET'])
def list_orders(user_id):
    """Get all orders for a user."""
    orders = Order.objects(user_id=user_id)
    return jsonify(orders), 200

@order_bp.route('/', methods=['POST'])
def place_order():
    """Place a new order."""
    data = request.json
    user_id = data['user_id']
    items = [OrderItem(product=Product.objects.get(id=item['product_id']), quantity=item['quantity']) for item in data['items']]
    total_price = sum(item.product.price * item.quantity for item in items)
    order = Order(user_id=user_id, items=items, total_price=total_price)
    order.save()
    return jsonify(order), 201
