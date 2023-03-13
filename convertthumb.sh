#!/bin/bash

SAVEIFS=$IFS
IFS=$(echo -en "\n\b")

DEST="$1"
shift
FILES=$*

# TODO: add force arg to only run if files not already present in the
# destination path

for i in $FILES
do
    ext=$(echo ${i} | rev | cut -d'.' -f1 | rev)
    if ! [[ $ext == "jpg" || $ext == "png" ]]; then
        echo "Format ${ext} not supported"
        continue;
    fi
    echo "Prcoessing image ${i} ..."
    convert -thumbnail 20   ${i} $DEST/$(basename ${i} .${ext})-lq.${ext}
    convert -thumbnail 320  ${i} $DEST/$(basename ${i} .${ext})-320.${ext}
    convert -thumbnail 768  ${i} $DEST/$(basename ${i} .${ext})-768.${ext}
    convert -thumbnail 1024 ${i} $DEST/$(basename ${i} .${ext})-1024.${ext}
    convert -thumbnail 1920 ${i} $DEST/$(basename ${i} .${ext})-1920.${ext}
done

IFS=$SAVEIFS

# usage() {
    # echo "Usage:"
    # echo "./convertthumb.sh <src_dir> <dest_dir>"
# }

# if [ $# -ne 2 ]; then
    # usage
    # exit
# fi

# SRC_DIR=$1
# DEST_DIR=$2

# if [ ! -d "${SRC_DIR}" ]||[ ! -d "${DEST_DIR}" ]; then
    # echo "source/destination directory missing"
    # exit
# fi

# if [ ! `ls ${SRC_DIR}/*.jpg 2>/dev/null| wc -l` -gt 0 ]; then
    # echo "No *.jpg files found in source directory"
    # exit
# fi

# mkdir -p ${DEST_DIR}/min
# mogrify -format avif -path ${DEST_DIR}/min -thumbnail 50 ${SRC_DIR}/*.jpg

# mkdir -p ${DEST_DIR}/sml
# mogrify -format avif -path ${DEST_DIR}/sml -thumbnail 300 ${SRC_DIR}/*.jpg

# mkdir -p ${DEST_DIR}/med
# mogrify -format avif -path ${DEST_DIR}/med -thumbnail 600 ${SRC_DIR}/*.jpg

# mkdir -p ${DEST_DIR}/lrg
# mogrify -format avif -path ${DEST_DIR}/lrg -thumbnail 1000 ${SRC_DIR}/*.jpg
