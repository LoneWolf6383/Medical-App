import json
import sys
import pandas as pd
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split # Import train_test_split function
from sklearn import metrics
from sklearn.preprocessing import LabelEncoder
df=pd.read_csv("./hypothyroid.csv")
df.replace('?',0, inplace = True)
x = df.iloc[:,[0,2,4,6,7,17,19,21,23]]
y=df.iloc[:,[29]]
encoder=LabelEncoder()
x['on thyroxine']=encoder.fit_transform(x['on thyroxine'])
x['on antithyroid medication']=encoder.fit_transform(x['on antithyroid medication'])
x['pregnant']=encoder.fit_transform(x['pregnant'])
x['thyroid surgery']=encoder.fit_transform(x['thyroid surgery'])
y['binaryClass']=encoder.fit_transform(y['binaryClass'])
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2)
gnb = GaussianNB()
gnb = gnb.fit(x_train,y_train)
ip_dict=json.loads(sys.argv[1])
df=pd.DataFrame.from_dict(ip_dict)
df['on thyroxine']=encoder.fit_transform(df['on thyroxine'])
df['on antithyroid medication']=encoder.fit_transform(df['on antithyroid medication'])
df['pregnant']=encoder.fit_transform(df['pregnant'])
df['thyroid surgery']=encoder.fit_transform(df['thyroid surgery'])
df['binaryClass']=encoder.fit_transform(df['binaryClass'])
y_pred=gnb.predict(df)
if y_pred[0]==1:
    print(1)
else:
    print(2)