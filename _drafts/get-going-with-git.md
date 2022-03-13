---
layout: post
title: "Get Going with GIT"
excerpt: 
imagepath: /assets/images/blog/git
permalink: /blog/git
<!-- categories: tech linux tmux -->
---

One would think that after gifting the world arguably the most important 
software product ever released, it's creator would pat himself on the back and
go on to live his life knowing that he has beautifully played his part in the
universe.

But no.

After creating Linux, our lord and saviour Linus Torvalds went ahead to make
another fundamental tool which would be used by [more than 90% of the
developers][1] in the world.

For the uninitiated, **git** is a version control system, which is a fancy way
of saying that it is an epic save button. How many times have you worked on a
project and when you're done with it, your folder ends up looking like this.

```
my_project.txt
my_project_final.txt
my_project_final_v2.txt
my_project_final_final.txt
my_project_actually_final.txt
```

Git essentially does the same thing for you, but in a much more efficient and
elegant fashion. It let's you save a snapshot of your files at any point in
time. You can then refer back to these snapshots from the past, revert your
files back to an older version, and much more. If multiple people are working
on the same project and the same set of files, git helps to keep track of who
did what, when they did it and why did they do it.  

_**pfff... I don't need you to tell me about git. I use it all the time at
work...**_

Maybe. But maybe even if you're using git, _you're not really using git_.

You see many developers I know who need to use git for their day job,
essentially just memorizes four commands.
```bash
git clone "ssh://<your_remote_repository_url>"
    edit all the files that you needs to edit and save it.
git add .
git commit -m "< a small desctiption of what you just edited >"
git push origin
```

While this approach does work to get the changes you made into the common
codebase that everyone is working off of, it barely scratches the surface of
all the potential benefits that git has to offer.

### <a name="the_concepts">The Concepts</a> 

> Just going over the basic concepts of git in this section. If you think you
> already know git well enough, that you have risen above all the peasants who
> still don't know what a branch is, then feel free to jump to [the advanced
> section][adv_section].

For getting to know git better, let's walk through a very realistic scenario
that you might encounter in your programming career - you are assigned to
create an app for Elon Musk so that he can communicate with the aliens once
his spaceship lands on Mars. 

You've been preparing for this moment for your whole life. You brew yourself a
pot of artisanal coffee, pull out your mechanical keyboard and start typing
away.

1. First, you write code for voice recognition to hear what the martians are
   saying.
2. Then you code the translator which converts martian language to English.
3. Finally, you write the audio playback code for playing back the translated
   English out loud.

You're sitting and admiring all the wonderful code you wrote, and thats you get
a call from Elon. Looks like the crew to Mars includes some Japanese astronauts.
The app needs to have a Japanese transation unit, and so you need to work with
the Japanese developer Satoshi Nakamoto and incorporate it in the app.

Alright, no big deal. You just need to send all your code to Satoshi, so that he
can add the Japanese transation module and once he's done he can send everything
back.

Few weeks pass and you get another call from Elon, Apparently newest data from
Mars suggests that martians use light to speak instead of sound ( I know,
martians are weird ), so you need to update your code.

Not the news you expected to hear from Elon. But whatever, you go back to your
laptop, chuck all the voice recognition code, replace all that with image
recognition to decipher all the lights and colors martians use to communicate.
But now your version of the code has stuff Satoshi doesn't have and Satoshi's
version has stuff you don't have.

The phone rings again. We got more data from Mars. Looks like martians use both
light and sound to talk. So looks like you need both voice recog and image recog
to talk to them.

"_But... But... But... I just deleted all that cause you said we don't need it
anymore_ 🥺. _And how do I add Satoshi's code into the app? His files would have
now become completely different from mine. AAAARRRGGHHHH........_"

This scene would have played out very differently (and very non-dramatically) if
you had just used git.

Let's start over from the beginning. Before you even start your project, you
initialise your project directory as a git repository. This creates a .git folder
in your project directory, which is where git does all it's magic.

```bash
# Initialise a new repository
git init
```

With git inititialised, git is ready to track and manage a record of whatever
changes you are going to do in your project folder. You can start writing your
code now. 

You create a new file and write down all the code of voice recognition module.
Once you are happy with it, you need to instruct git to save all the changes
that you just made.

```bash
# Add all the files that you need to be tracked
git add .

# Instruct git to take a snapshot of all the changes you did, and write a brief
# summary of what you did, so it is easier to recognize later
git commit -m "Created the voice recognition module"
```

When you commit, git creates a snapshot of all the changes you made since your
previous commit. In this case there is no previous commit so it's all changes
since the beginning.

<img class="git-blog-img-1" src="{{ page.imagepath }}/1_initial_commit.png" alt="Initial Commit"/>

<img class="git-blog-img-1" src="{{ page.imagepath }}/2_main_branch.png" alt="Initial Commit"/>

<div class="blog-git-scroll">
<img class="git-blog-img-2" src="{{ page.imagepath }}/3_feauture_branch.png" alt="Initial Commit"/>
</div>

<div class="blog-git-scroll">
<img class="git-blog-img-2" src="{{ page.imagepath }}/4_main_grows.png" alt="Initial Commit"/>
</div>

<div class="blog-git-scroll">
<img class="git-blog-img-2" src="{{ page.imagepath }}/5_git_revert.png" alt="Initial Commit"/>
</div>

<div class="blog-git-scroll">
    <img class="git-blog-img-2" src="{{ page.imagepath }}/6_git_merge.png" alt="Initial Commit"/>
</div>

### <a name="the_advanced_section">The Advanced Section</a> 

Draft expand all of these
Better to move Advanced section to a new post - Getting Good at GIT

- git revert
- git bisect 
- git log --graph --oneline
- git config file alias
- git rebase
- 

[1]: https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-other-tools
[concepts]: #the_concepts
[adv_section]: #the_advanced_section
