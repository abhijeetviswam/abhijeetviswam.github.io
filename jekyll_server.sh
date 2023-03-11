#!/usr/bin/env bash

set -e

case $1 in
    'build-prod')
        echo "Building docker image of Jekyll"
        docker build -t jekyll .

        echo "Building Jekyll site"
        docker run \
            --volume="$PWD:/srv/jekyll:Z" \
            -e JEKYLL_ENV=prod \
            -t jekyll \
            build
    ;;
    'build')
        echo "Building docker image of Jekyll"
        docker build -t jekyll .

        echo "Building Jekyll site"
        docker run \
            --volume="$PWD:/srv/jekyll:Z" \
            -t jekyll
    ;;
    'serve')
        echo "Starting Jekyll server"
        docker run \
            --volume="$PWD:/srv/jekyll:Z" \
            -p 127.0.0.1:4000:4000 \
            -it jekyll serve --livereload
    ;;
    'serve-drafts')
        echo "Starting Jekyll server with drafts"
        docker run \
            --rm --name jekyll-container \
            --volume="$PWD:/srv/jekyll:Z" \
            -p 127.0.0.1:4000:4000 \
            -it jekyll serve --drafts --livereload
    ;;
esac
