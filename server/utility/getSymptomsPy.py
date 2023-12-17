from sys import argv
from pymongo import MongoClient
cluster = MongoClient('mongodb://127.0.0.1:27017')
db=cluster['medical_app']
collections=db[argv[1]]
d=list(collections.find_one({}))
print(d)