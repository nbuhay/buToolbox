## copy
### `cp [OPTION]... SOURCE DEST`
Copy a file or directory from path SOURCE to DEST.
```bash
# * wildcard represents all single characters or any string

# copy all .jpg files to /home/usr/
$ cp *.jpg /home/usr/

# recursively copy all contents of Pictures/ to /home/usr
$ cp -r Pictures/ /home/usr/

# enable interactive prompt when an overwrite will occur
$ cp -i foo.jpg bar.jpg
cp: overwrite 'bar.jpg'?

# copy folder and all its contents into another folder
$ mkdir foo
$ cp -r bar/ foo/
$ ls foo/
bar/

# copy contents of a folder, but not the folder itself, to another folder
$ mkdir bar
$ touch bar/test.file
$ ls bar/
test.file
$ mkdir foo
$ cp bar/ foo/
$ ls foo/
test.file
```

## file
### `file [OPTIONS...] [FILE...]`
Determine type of FILEs.
```bash
```
## find
### `find`
Find files on the system.
```bash
# find file.txt searching from system root directory
$ find / -name file.txt

# find directory foo in /home directory
$ find /home -type d -name foo
```

## less
### `less [FILE]`
Paged view of a file.
#### Shortcuts while using less
```bash
# quit less and return to shell
q

# go up or down by 1 page
Page Up/Down
FN + Up/Down Arrows (Windows)

# go up or down by 1 line
Up/Down Arrows

# go to beginning of file
gac

# go to end of file
G

# help
h
```

## list
### `ls [OPTIONS]... [FILE]...`
List information about the FILEs (the current directory by default).
```bash
# by modification time, newest first
$ ls -lt

# list subdirectories recursively
$ ls -R
$ ls --recursive

# do not list implied . and ..
$ ls -A
$ ls --almost-all

# list file starting with foo
$ ls foo*
```

## help
### `help`
Get help for commands.
```bash
$ help echo
$ help pwd
```
## manual
### `man CMD`
See a manual of info on the command.

## move
### `mv`
Move or rename file.
```bash
# move multiple files
$ mv file1.txt file2.txt /home/usr/

# interactive flag for overwrite
$ mv -i directory1 directory2

# create a backup when overwrite occurs (marked with ~)
$ mv -b file1.txt file2.txt
$ ls file2.*
file2.txt  file2.txt~
```

## remove
### `rm`
Remove a file or directory.
```bash
$ rm file1.txt

# interactive
$ rm -i file1.txt

$ rm -r directory
$ rmdir directory
$ rm -rf / # cool... B) 
```