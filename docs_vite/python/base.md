```js
--1.去到这个网站然后下载，注意只为我安装就可以添加到环境变量
https://repo.anaconda.com/archive/
--2.安装完后可以
conda create -n ai python=3.9
conda activate ai 

pip install -r requirements.txt

或者
pip install pyperclip xlrd pillow pyautogui==0.9.50 
pip install opencv-python -i https://pypi.tuna.tsinghua.edu.cn/simple 

python pcRPA.py   

conda info --envs # 查看所有环境

--3.然后我们看到pcData.json中

可以根据pcDataExample.json里面的示例来定义自己想要的东西

--4.关于开发者的小tips
pip install pipreqs
pipreqs ./ --encoding=utf8


删除环境
conda remove -n your_env_name
 conda deactivate

```