import json
import sys
import numpy as np
from sklearn import preprocessing, neighbors,metrics
from sklearn.model_selection import train_test_split
import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv("./heart.csv")
X = df.iloc[:,[0,1,2,3,4,5,6,7,8,9,10,11,12]]
y = df.iloc[:,[13]]
scaler=preprocessing.StandardScaler()
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
clf = neighbors.KNeighborsClassifier(n_neighbors=10)
clf.fit(X_train, y_train)
ip_dict=json.loads(sys.argv[1])
df=pd.DataFrame.from_dict(ip_dict)
y_pred=clf.predict(df)
if y_pred[0]==1:
    print(1)
else:
    print(2)