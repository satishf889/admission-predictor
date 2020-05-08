from flask import Flask, request, render_template
import os
import numpy as np
import pickle
import json
import sys

loaded_model = pickle.load(open('../Model/admission_model.pkl', 'rb'))
print("Model Loaded")

app = Flask(__name__)

@app.route('/')
def my_form():
    count=countValue()
    return render_template('index.html',count=int(count))

@app.route('/prediction',methods=['POST'])
def predict():
    print("Body is ",request.data)
    my_json = request.data.decode('utf8').replace("'", '"')
    data = json.loads(my_json)
    features=[data['GRE_SCORE'],data['UNIVERSITY_RATING'],data['SOP'],data['LOR'],data['RESEARCH_PAPER']]
    features=list(map(float,features))
    result=loaded_model.predict([features])
    expected_per=round((result[0]*100),2)
    log={
        "data_received":data,
        "prediction":expected_per
    }
    count=countValue()
    updateCount(int(count)+1)
    updateLog(log)
    print(f"Response sent is {expected_per}")
    return {"prediction":expected_per}

def countValue():
    with open('logs/count.txt','r') as fr:
        count=int(fr.read())
        return count

def updateCount(new_count):
    with open('logs/count.txt','w') as fw:
        fw.write(f"{new_count}")
    
def updateLog(log):
    with open('logs/prediction-log.txt','a') as fw:
        fw.write(f"{log}\n")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)