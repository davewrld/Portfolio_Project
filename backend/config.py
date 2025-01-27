from datetime import timedelta
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Base configuration."""
    MONGODB_SETTINGS = {
        'host': os.getenv('MONGODB_URI')
    }
