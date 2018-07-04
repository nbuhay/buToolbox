# Commands

## file
### `file [OPTIONS...] [FILE...]`
Determine type of FILEs.
```bash
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
g

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
```