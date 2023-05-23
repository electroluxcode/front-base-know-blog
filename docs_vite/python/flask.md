

## 命令行交互



```python
# 可以像 python xx.py add xx 调用，但是速度会非常满



import sys
import pyautogui
# python index.py 2  # 能输出后面的值
type = sys.argv[1]
pyautogui.PAUSE = 0.00
# print(sys.argv)
if type == "MouseMove":
    mousex =float( sys.argv[2])
    mousey = float(sys.argv[3])
    pyautogui.moveTo(x=mousex, y=mousey, duration=0.2)
if type == "MouseClick":
    mousex =float( sys.argv[2])
    mousey = float(sys.argv[3])
    pyautogui.click(button='left')
 
 


```





## 简单的flask

```python
from flask import Flask,request,jsonify
import pyautogui

app = Flask(__name__)
# 解决接口返回内容是中文时，乱码的问题
app.config['JSON_AS_ASCII'] = False


# 请求地址映射
@app.route('/index', methods=['GET'])
def test_post():
    # 定义响应结果
    result = {}
    result['code'] = 200
    type = request.args.get('type','')
    mouseX = request.args.get('mouseX','')
    mouseY = request.args.get('mouseY','')
    if type == "MouseClick":
        pyautogui.click(button="left")
    if type == "MouseMove":
        # pyautogui.moveTo(x=int(float(mouseX)), y=int(float(mouseY)), duration=0.1)
        pyautogui.moveTo(x=int(mouseX), y=int(mouseY), duration=0.1)
    if type == "MouseScoll":
        pyautogui.scroll(int(float(mouseY)))
    result['message'] = "成功"
   
    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True, port=8899)
 # get 方式
    # name = request.args.get('name','')
    # post 方式
    # name = request.form.get('name','')
    # json 方式
    # data = request.get_data(as_text=True)
    # print(data)
    # jsonObj = json.loads(data)
```



