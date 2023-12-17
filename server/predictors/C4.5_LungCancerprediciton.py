import json
import sys
import pandas as pd
from sklearn.tree import DecisionTreeClassifier# Import Decision Tree Classifier
from sklearn.model_selection import train_test_split # Import train_test_split function
from sklearn import metrics
import matplotlib.pyplot as plt
ip_dict=json.loads(sys.argv[1])
df=pd.read_csv("predictors/survey_lung_cancer.csv")
df.replace('M',0,inplace=True)
df.replace('F',1,inplace=True)
df.replace('YES',2,inplace=True)
df.replace('NO',1,inplace=True)
df.replace('1',1,inplace=True)
df.replace('2',2,inplace=True)
x = df.iloc[:,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]]
y = df.iloc[:,[15]]
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2)
clf = DecisionTreeClassifier()
clf = clf.fit(x_train,y_train)
df=pd.DataFrame.from_dict(ip_dict)
y_pred=clf.predict(df)
if y_pred[0]==1:
    print(1)
elif y_pred[0]==2:
    print(2)