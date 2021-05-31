---
layout: post
title:  "A Brief Introduction to tmux"
excerpt: Tmux, like the Vim editor, is one of those tools in a developer's arsenal which can be intimidating at the beginning but becomes indispensable once you start using it. 
date:   2021-05-29 00:52:33 +0530
permalink: /tmux
<!-- categories: tech linux tmux -->
---

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Tmux_logo.svg" alt="tmux_logo" width="400"/>

[Tmux][tmux-gh], like the Vim editor, is one of those tools in a developer's arsenal which can be intimidating at the beginning but becomes indispensable once you start using it. 

Tmux is an acronym for Terminal Multiplexer. It “multiplexes” your terminal window and allow you to create multiple sessions, tabs and panes within the same window. Tmux can elevate your terminal from feeling like an archaic artefact from the ’60s to a modern browser like application with the fancy tabs and panes. It even has support for mouse interactions when you forget the keyboard shortcut for resizing a pane.

![](/assets/images/blog/tmux-sample-screenshot.png)

While all these fancy tabs and windows within a terminal are neat, the greatest attraction for tmux is that all terminal sessions are persistent. This means if you inadvertently close your terminal window when your 2-hour long build is nearing completion, a tmux session would retain all processes in the background. You can pop into the session from a new terminal window to pick up on your work. The feature is even more valuable when working on remote servers. The next time you are in a sketchy WiFi network, and the SSH drops every ten minutes while you frantically try to fix a critical bug in a production server, tmux can help you retain your work in remote sessions (and perhaps help retain your sanity as well).

## Let's fire it up...

Installing tmux is as easy as pie. This is the command you need if you are using Ubuntu. If you are using any other distro, use the equivalent command for the corresponding package manager.
{% highlight bash %}
sudo apt-get install tmux
{% endhighlight %}

To start a new tmux session, it's even easier.
{% highlight bash %}
tmux
{% endhighlight %}

![](/assets/images/blog/tmux-initial.png)

_"So I've installed tmux. But now what? All I see is this ugly green bar at the bottom of my window. Where are the tabs and panes you showed in your clickbait screenshot above? You said mouse works, but my clicks aren't doing anything. Aaarghh..."_

Relax. Deep breaths. In... Out... In... Out...<br/>
I promise you by the end of this article, you'll also be able to make your tmux session look similar to mine.

But first let's check out how to interact with tmux.

All interactions with tmux involves pressing a prefix key, followed by a command key. Out of the box, the prefix key would be set to `C-b`, which is shorthand for pressing the `Ctrl` key and letter `b` together. After pressing the prefix key, the next key press would be registered by tmux and not your shell. For example for creating a new tab, the command is `C-b c`. So you hit the keys `Ctrl+b` first and then hit the `c` key.

Here are the few important ones you need

| Key Binding       | Action                                    |
| ----------------- | ----------------------------------------- |
| `C-b ?`           | Help - Lists all available key bindings   |
| `C-b c`           | Creates a new tab                         |
| `C-b n`           | Switches to the next tab                  |
| `C-b p`           | Switches to the previous tab              |
| `C-b %`           | Splits the current tab vertically         |
| `C-b "`           | Splits the current tab horizontally       |
| `C-b arrowkeys`   | Navigate between open panes               |

![](/assets/images/blog/tmux-demo.gif)

Coming back to the ugly green bar, this bar at the bottom is your status bar. Right out of the box, tmux displays the information about the opened tab on the left and some system information like hostname, time and date. This is just how the creators of tmux designed it to show by default. But the status bar can be configured to display pretty much any information you need it to display. Want to see your battery percentage? You can. Want to see which song is currently playing on Spotify? Done. What if you just want to see a tiny weather icon right in your command line because you are too lazy to turn your head and look out the window? Check.

Customizing the status bar to suite your specific requirement is a whole another rabbit hole in itself into which I don't want to go down today. But if you want to try peeking into that hole, the github repo [awesome-tmux][awesome-tmux-gh] would be a great place to start.

(_Work in Progress. Come back later for full article_ 😉... )

[tmux-gh]:          https://github.com/tmux/tmux
[awesome-tmux-gh]:  https://github.com/rothgar/awesome-tmux
