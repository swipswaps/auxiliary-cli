![AUXILIARY TOOLS](https://i.imgur.com/9goTi53.png)

### Examples
aux search for text 'hello' in file.txt

aux compress current folder

aux add bob@gmail.com to  heroku team app

aux list all s3 buckets

aux create lambda function myfunc in aws

aux create new branch dev_ui

aux create postgres addon to herokuapp mytestapp

aux delete readme.md from git

[video demo link] (https://auxiliarytoolsassets.s3-us-west-1.amazonaws.com/aux_gpt_demo_cmp.mp4)


### Getting Started
Install aux cli
```
npm install auxcli -g
```


### Available options
**assist**
```
aux assist <user input>
```
Displays the cli command for doing the task requested by the user
the `assist` flag is optional. It can work without it too!
![samples](https://auxiliarytoolsassets.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-09+at+12.44.45+PM.png)


**connect**
```
aux connect wiki
```
This will prompt for a directory for your intern wiki search
![aux connect wiki](https://auxiliarytoolsassets.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-09+at+12.35.31+PM.png)


**iw**
```
aux iw <keywords to search>
```
iw stands for internal wiki  and is used to search the document folder provided in the `connect` step
instead of having to grep search and then manually viewing the files, we made it super easy to search from your terminal

Eg - 
```
aux iw deploy
```
![aux iw deploy](https://auxiliarytoolsassets.s3-us-west-1.amazonaws.com/iwsearch.png)
![viewing selected file](https://auxiliarytoolsassets.s3-us-west-1.amazonaws.com/iwsearchless.png)


**Help**
```
aux help
```
Displays help menu with a list of available options
