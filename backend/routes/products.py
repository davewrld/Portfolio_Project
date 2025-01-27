from flask import Blueprint, request, jsonify
from models.product import Product

product_bp = Blueprint('product', __name__)

@product_bp.route('/products', methods=['GET'])
def get_products():
    products = Product.objects()
    return jsonify([{
        'id': str(product.id),
        'name': product.name,
        'description': product.description,
        'price': product.price
    } for product in products]), 200

@product_bp.route('/products/<id>', methods=['GET'])
def get_product(id):
    product = Product.objects(id=id).first()
    if product:
        return jsonify({
            'id': str(product.id),
            'name': product.name,
            'description': product.description,
            'price': product.price
        }), 200
    return jsonify({'message': 'Product not found'}), 404