#!/bin/bash

while getopts ":t:" opt; do
  case $opt in
    t)
        FLAG=$OPTARG;
        npx create-react-app $FLAG;
        cd $FLAG;
        npm start;
        exit 0;
        ;;
    \?)
        echo "Invalid option: -$OPTARG" >&2;
        exit 1;
        ;;
    :)
        echo "Option -$OPTARG requires an argument." >&2
        exit 1
        ;;
  esac
done

echo "Unable to start a react app, specify the name...";
exit 1;