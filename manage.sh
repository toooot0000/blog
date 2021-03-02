#!/bin/bash
read -p "Which branch:" name
if [ -z ${name} ]
then
    name="main"
fi

read -p "What message:" msg
if [ -z ${msg} ]
then
    msg="This is an automatic submit~"
fi

# git commit -m " ${msg} "
npm run build&&python blogs/manage.py -u&&git pull origin ${name}&&git add .&&git commit -m " ${msg} "&&git push