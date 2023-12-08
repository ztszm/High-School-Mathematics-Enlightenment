# -*- coding: UTF-8 -*-
# !/usr/bin/python
# @time     :2022/2/22 21:43
# @author   :Mo
# @function :get/post of sanic


from sanic.response import json, text
from sanic import Sanic, request

app = Sanic("calculate")
app.config.HEALTH = True


def read_file(file_path):
    try:
        with open(file_path, "r", encoding='utf-8') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        return "文件不存在"


@app.route("/getEu-me", methods=["POST"])
def getemue(param):
    print(param)
    return json(read_file('./json.json'))


if __name__ == "__main__":
    app.run(single_process=True,
            access_log=True,
            host="0.0.0.0",
            port=8088,
            workers=1,
            )
