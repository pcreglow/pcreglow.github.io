**Final Draft - Tutorial Journal Week 5**

**Renaming and moving a file with Git**

One of my first successful experiences while using Git was renaming and moving a file. To be able to accomplish this with the command line over Finder or on GitHub was a huge boost in confidence for a beginner like me. Try it for yourself!

Here is the step-by-step for renaming and moving a file:

1. I have identified the file `test.css` in my `TIY-Github` repository.

2. I had been using `test.css` to test some CSS properties. I like the work I was able to produce so it's time to rename this file `main.css`

3. Now that I have determined a new name for this file, let's go to Git and make the change with the following command:

    `git mv test.css main.css`

4. Now let's run `git status` to verifiy the change was made

5. Success! We aren't done yet. It's time to add that change to the stage with `git add main.css`

6. Now let's commit that change with `git commit`- be sure to include a commit message! - and then continue on to moving that file into a new directory.

7. So now we have `main.css` but it currently resides in my `TIY-Github` repository. That's fine, but it should move into my CSS directory in ~TIY-Github~. So lets send that file on the move:

    `git mv main.css css/main.css`

8. Once again, let's run `git status` to make sure that change was made.

9. Success! But let's double check our work by inspecting the CSS directory:

    `cd css`

10. Let's view the contents with `l`

11. Hey there is `main.css`!

12. So now we `git add main.css` to bring that change to the stage.

13. Once more with `git status` to verify that change is on the stage. Run another `git commit` and add a commit message.

14. Congratulations! You renamed and moved a file. 
