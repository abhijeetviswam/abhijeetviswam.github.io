---
layout: post
title: "Get Going with GIT"
<!-- excerpt:  -->
imagepath: /assets/images/blog/git
date:   2022-03-15 09:00:00 +0530
permalink: /blog/get-going-with-git

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

### <a name="storytime">It's Story Time</a> 

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
2. Then you integrate the martian language to English translator library.
3. Finally, you write the audio playback code for playing back the translated
   English out loud.

You're sitting and admiring all the wonderful code you wrote, and thats you get
a call from Elon. Looks like the crew to Mars includes some Japanese astronauts.
The app needs to have a Japanese transation unit, and so you need to work with
the Japanese developer [ Satoshi Nakamoto ][2] and incorporate it in the app.

Alright, no big deal. You just need to send all your code to Satoshi, so that he
can add the Japanese transation module and once he's done he can send everything
back.

Few weeks pass and you get another call from Elon, Apparently newest data from
Mars suggests that martians use sign language and not speech, so you need to update
your code.

Not the news you expected to hear. But whatever, you get back to your
laptop, chuck all the voice recognition code, replace all that with image
recognition to decode the martian sign language.

But now your version of the code has stuff Satoshi doesn't have and Satoshi's
version has stuff you don't have.

The phone rings again. We got more data from Mars. Looks like martians uses a
combination of sign language and voice to talk. So looks like you need both voice
recog and image recog to talk to them.

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

<div class="blog-git-img">
<img class="blog-git-1" src="{{ page.imagepath }}/1_initial_commit.png" alt="Initial Commit"/>
</div>

As you go further with the development, you keep creating more commits. How
often you create a commit is a personal decision. One can keep adding commits
for every single line change, you can commit after implementing one or two
functions or you can commit after you develop a feature completely. The best
practice would be to stay somewhere in the middle. Keep adding commits too
frequently and it would get overwhelming and it'll be harder to narrow down to a
specific commit in case you want to refer it in the future. On the contrary if
you go too long without commiting, an accidental file delete is all it takes to
lose days of effort - don't ask me how I know (In case you want the entire
feature as one single commit, it can be done at end using a git squash, check
out the [advanced section][adv_section])

For now let's say you are commiting one module as a single commit. So you
already commited the voice recog module, you create two more commits - integrating
the translator module and adding an audio playback module.

<div class="blog-git-img">
<img class="blog-git-1" src="{{ page.imagepath }}/2_main_branch.png" alt="Main Branch"/>
</div>

GIT saves each of your commits as a chain, with each commit linked to it's
parent. Here commit 1 is the parent of commit 2, which in turn is the parent of
commit 3.

Now that you've had done some code commits, you got the requirement to share the
code with another developer. Now would be a good time to introduce you to two
core concepts used in git - branching and remote repositories.

The chain of commits you created till this point were all created on the default
branch in git, usually 'master' or 'main' branch. When you (or a coworker)
starts to work on a new feature, but you want to make sure that the existing
code stays unchanged and would not be potentially be broken due to some issues
in the new feature, this is a great oppurtunity to split your default branch.

You can create a new branch, let's call it 'feature-japanese'

```bash
# Create a new branch
git branch feature-japanese

# Switch to the newly created branch
git checkout feature-japanese
```

Now you or your collegue can start working on the new branch. Whatever new
commits you make on the new branch would not affect the code already commited to
main branch. You can easily switch back and forth between the branches using the
git  checkout command - `git checkout <branch-name>`

<div class="blog-git-img">
<img class="blog-git-2" src="{{ page.imagepath }}/3_feauture_branch.png" alt="Feature Branch"/>
</div>

"_But wait, all the code is still on my laptop. So do I just mail all the code
over to my collegue?_"

Nope. Mailing code changes back and forth are practices from the dark ages. This
is where remote repositories comes into picture. 

The remote repository is just a server which holds an exact replica of
your local repository. All the code from your machine is uploaded to this
remote server. The most popular repository hosting service available is
[Github](https://github.com). Other popular options include [GitLab](https://gitlab.com/),
[Bitbucket](https://bitbucket.org/) etc. You can even host your own remote repo
on your server if you choose to.

Let's say you chose Github to host your remote repo. Just create an account in
Github and create a new empty repository. Github would provide the URL of the
repo you created - https://github.com/yourUsername/yourRepoName

We need to push all the changes in our local repo to the remote repo. For this
first we need to add the remote repo details to our local git instance.

```bash
# Configure the remote repository URL
git add remote origin git@github.com:yourUsername/yourRepoName.git
```

Once you configure your remote. You can push the changes in your branch in the 
local repo to the remote repo using the git push command
```bash
git push -u origin <branch-name>
```

<div class="blog-git-img">
<img class="blog-git-2" src="{{ page.imagepath }}/4_main_grows.png" alt="Growing main branch"/>
</div>

<div class="blog-git-img">
<img class="blog-git-2" src="{{ page.imagepath }}/5_git_revert.png" alt="Git revert"/>
</div>

<div class="blog-git-img">
<img class="blog-git-2" src="{{ page.imagepath }}/6_git_merge.png" alt="Git Merge"/>
</div>


[1]: https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-other-tools
[2]: https://en.wikipedia.org/wiki/Satoshi_Nakamoto
[storytime]: #the_concepts
<!-- TODO: Give proper relative URL here -->
<!-- [adv_section]: {{ site.url }}/blog/git-advanced -->
[adv_section]: {% link _drafts/2022-03-31-getting-good-at-git.md %}
