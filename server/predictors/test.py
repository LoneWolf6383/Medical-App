import pandas as pd
from sklearn.tree import DecisionTreeClassifier,plot_tree # Import Decision Tree Classifier
from sklearn.model_selection import train_test_split # Import train_test_split function
from sklearn import metrics
import matplotlib.pyplot as plt
df=pd.read_csv("./survey_lung_cancer.csv")
df.replace('M',0,inplace=True)
df.replace('F',1,inplace=True)
df.replace('YES',1,inplace=True)
df.replace('NO',0,inplace=True)
x = df.iloc[:,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]]
y = df.iloc[:,[15]]
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2)
clf = DecisionTreeClassifier()
clf = clf.fit(x_train,y_train)
dataset={   'GENDER':[0],
            'AGE':[69],
            'SMOKING':[1],
            'YELLOW_FINGERS':[2],
            'ANXIETY':[2],
            'PEER_PRESSURE':[1],
            'CHRONIC DISEASE':[1],
            'FATIGUE ':[2],
            'ALLERGY ':[1] ,
            'WHEEZING':[2],
            'ALCOHOL CONSUMING':[2],
            'COUGHING':[2],
            'SHORTNESS OF BREATH':[2],
            'SWALLOWING DIFFICULTY':[2],
            'CHEST PAIN':[2],
}
df=pd.DataFrame.from_dict(dataset)
Y_predict=clf.predict(df)
print(Y_predict)