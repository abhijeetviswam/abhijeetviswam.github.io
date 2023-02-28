#!/bin/bash
SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

DEST="$1"
shift
FILES=$*
for i in $FILES
do
    echo "Prcoessing image ${i} ..."
    convert -thumbnail 800 ${i} $DEST/$(basename ${i})
done

IFS=$SAVEIFS
