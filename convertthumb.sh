# #!/bin/bash
# SAVEIFS=$IFS
# IFS=$(echo -en "\n\b")

# DEST="$1"
# shift
# FILES=$*
# for i in $FILES
# do
    # echo "Prcoessing image ${i} ..."
    # convert -type webp -thumbnail 800 ${i} $DEST/$(basename ${i})
# done

# IFS=$SAVEIFS

#!/bin/bash

usage() {
    echo "Usage:"
    echo "./convertthumb.sh <src_dir> <dest_dir>"
}

if [ $# -ne 2 ]; then
    usage
    exit
fi

SRC_DIR=$1
DEST_DIR=$2

if [ ! -d "${SRC_DIR}" ]||[ ! -d "${DEST_DIR}" ]; then
    echo "source/destination directory missing"
    exit
fi

if [ ! `ls ${SRC_DIR}/*.jpg 2>/dev/null| wc -l` -gt 0 ]; then
    echo "No *.jpg files found in source directory"
    exit
fi

mogrify -format avif -path ${DEST_DIR} -thumbnail 800 ${SRC_DIR}/*.jpg
