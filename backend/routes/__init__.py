from flask import Blueprint

def initialize_routes(app):
    from .products import product_bp
    from .orders import order_bp
    from .auth import  auth_bp

    app.register_blueprint(product_bp, url_prefix='/api')
    app.register_blueprint(order_bp, url_prefix='/api')
    app.register_blueprint(auth_bp, url_prefix='/api')