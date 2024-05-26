---
title: Parse Command Line Arguments
date: 2020-11-05
tags: [args, argv, js, python, java, javascript, c, c++, node]
---

## Node.js:
Variable: `process.argv`
```
$ node argv.js 1 2 3 
[ '/path/to/node', '/path/to/argv.js', '1', '2', '3' ]
```

Also: [`parseArgs`](https://nodejs.org/api/util.html#utilparseargsconfig) from `node:util`

## Python
Variable: `sys.argv` (must import `sys` module)
```
$ python argv.py 1 2 3
['argv.py', '1', '2', '3']
```

## Java
Variable: `args` (`String[]` datatype parameter in `main()` function)
```
$ java Main 1 2 3
Contents of String[] args: ["1", "2", "3"]
```

## C/C++
Variable: `argv` (length is `argc`)
```c
int main(int argc, char * argv[]) {}
// also: char **argv
```

<small>[node.js](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/)</small>
<small>[java](https://docs.oracle.com/javase/tutorial/essential/environment/cmdLineArgs.html)</small>
