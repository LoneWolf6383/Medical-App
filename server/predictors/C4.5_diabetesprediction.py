import json
import sys
import pandas as pd
from sklearn.tree import DecisionTreeClassifier,plot_tree # Import Decision Tree Classifier
from sklearn.model_selection import train_test_split # Import train_test_split function
from sklearn import metrics
import matplotlib.pyplot as plt
df=pd.read_csv("./diabetes.csv")
x = df.iloc[:,[1,2,3,4,5,6,7]]
y = df.iloc[:,[8]]
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2)
clf = DecisionTreeClassifier(max_depth=5)
clf = clf.fit(x_train,y_train)
ip_dict=json.loads(sys.argv[1])
df=pd.DataFrame.from_dict(ip_dict)
y_pred=clf.predict(df)
if y_pred[0]==1:
    print(1)
else:
    print(2)