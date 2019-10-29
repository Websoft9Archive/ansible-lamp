#!/bin/bash

/usr/bin/inotifywait -mrq -e modify,move,close_write,create /data/wwwroot/ --format "%w%f" | while read line; 
do 
  chown -R apache: $line
done    

