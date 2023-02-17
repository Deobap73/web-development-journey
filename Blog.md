**February 13, 2023**

It was an interesting day. We are working on creating a code of conduct that will guide us throughout this training year.

The way in which the topic was addressed throughout the morning was undoubtedly very interesting and constructive.

During the afternoon we had the pleasure of having a different Basic Digital Literacy trainer who demonstrated, at least for me, what I have been thinking about teaching our resident trainer……

**February 14, 2023**

…. the day got off to a bad start, really bad to tell you the truth, our resident coach came back and with him the disorganized teaching.

It is not possible to try to teach commands in the “terminal” and not know what to respond to unforeseen situations.

At one point, I lost my temper and was very direct in expressing my frustration with the matter.

I should have had a different attitude, it wasn't good on my part and after the break I asked to speak in front of everyone, apologizing to the coach and other colleagues.

I realized that my learning ambitions do not match the slow and disorganized way we are experiencing in this course, but obviously I will have to adapt to these conditions, so I will remain discreet for the sake of my path in this course and the well-being of other colleagues ...

**February 15, 2023**

,,, The day started strange and some people in the group started to feel the same frustration that I felt from the beginning.

During the morning break, some people in the group decided to question the trainer about his way of teaching. I chose to turn off the camera and sound, I promised myself I'll keep a low profile, and I will.

After resuming the class, things evolved in a more fluid way, I hope I can finally start talking here about everything that has to do with the Web Development course and nothing about everything else.

We are essentially talking about the terminal installation of [Node.js](https://nodejs.org/en/)
There were some problems with the way it was demonstrated in class, personally I opted for a different and more effective approach, using different commands than those used in class…

* source ~/.bashrc
* nvm list-remote
* nvm install v18.14.0   -  **in V18.14.0 you replace with the latest version or the one you want from the list presented in the previous command**
* nvm lts/hydrogen installation
* node -v

with the last command should appear .....

v18.14.0

After....

* npm install -g npm@9.4.2
* sudo apt install rpm

thereby keeping "node.js" and "npm" installed and updated

In the afternoon the theme was centered on the “rpm” command

* npm init
* code .

It is

Install an “npm” package.
Check if and where this package has been installed.
What command was used to check if and where the package was installed?

A way to test commands in the terminal.

At the end we did an evaluation

**February 16, 2023**

It was an interesting day dedicated to “Git”

**What is Git?**

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

After that, we start its installation and start using basic commands for your use…

* sudo apt-get install git

After installing it, start your terminal and type the following command to verify that Git is ready to be used on your computer:

* git –version

In your terminal, run the following commands to identify yourself with Git:

* git config --global user.name "Your Name"
* git config --global user.email "your@email.com"

To create a new repository and start tracking your project with Git, use your terminal

* git init

This is a command that is very often used when working with Git. It shows us which files have been changed, which files are tracked, etc.

* git status

**staging files**

From the project folder, we can use the git add command to add our files to the staging area, which allows them to be tracked.
We can add a specific file to the staging area with the following command:

* git add file.js

To add multiple files, we can do this:

* git add file.js file2.js file3.js

Instead of having to add the files individually, we can also add all the files inside the project folder to the staging area:

* git add .

By default, this adds all the files and folders inside the project folder to the staging area, from where they are ready to be committed and tracked.

**Making commits**

A commit is a snapshot of our code at a particular time, which we are saving to the commit history of our repository. After adding all the files that we want to track to the staging area with the **git add** command, we are ready to make a commit.

To commit the files from the staging area, we use the following command:

* git commit -m "Commit message"

Inside the quotes, we should write a commit message which is used to identify it in the commit history.

The commit message should be a descriptive summary of the changes you are committing to the repository.

**Branching**

Whenever we initialize a folder as a repository, there will be one default branch (typically called master).

We can create a branch that is a copy of (usually) the main branch. Then you can add your changes to this branch without affecting the main branch.

**Creating a new branch**

You can create a new branch using the following command:

* merging branches

Once we create a branch from master, they start living separate lives so to say. We don't want this to continue for too long, because it will become harder and harder to bring the two together.

For example, after you fully implemented and tested a new feature in your code, you would want to merge those changes to the stable branch of your project (which is usually the default master branch).
To merge the changes from a different branch into your current branch, you can use this command:

* git merge <branch-name>

It was a good day of learning...

**February 17, 2023**
