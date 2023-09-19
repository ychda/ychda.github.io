if [ -d "./.git" ]; then
    git add --all
    git commit -m 'deploy'
#    git remote add origin git@github.com:ychda/ychda.github.io.git

#    git push --set-upstream origin gh-pages
#    git push -u origin gh-pages
    git push origin HEAD:gh-pages
else
    ls
    # rm -rf .git
    git init
    git add --all
    git commit -m 'deploy'
    # if 'error: remote origin already exists.'
    git remote rm origin
    git remote add origin git@github.com:ychda/ychda.github.io.git

    git push -u -f origin master:gh-pages

fi
