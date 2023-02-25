FROM jekyll/jekyll:4.2.0

COPY Gemfile ./
RUN touch Gemfile.lock && chmod a+w Gemfile.lock
RUN gem install bundler:2.3.8 && bundle install

ENTRYPOINT [ "jekyll" ]

CMD [ "build" ]
