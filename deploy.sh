if [ -d "./.git" ]; then
    git add --all
    git commit -m 'deploy'
    # git remote add origin git@github.com:ychda/ychda.github.io.git
    # git push --set-upstream origin main
    # git push -u origin main
    git push origin HEAD:main
else
    ls
    rm -rf .git
    git init
    git add --all
    git commit -m 'first init'
    # if 'error: remote origin already exists.'
    # git remote rm origin
    git remote add origin git@github.com:ychda/ychda.github.io.git
    git push -u -f origin master:main
fi
