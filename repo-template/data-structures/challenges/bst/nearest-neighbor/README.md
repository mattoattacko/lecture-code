# Nearest Value in a Binary Search Tree

    You are working on a team producing estimates of population for some
    creature, given a complex set of inputs. Your team keeps records of the
    simulation runs you've done and their results.

    For each new simulation, you are asked to find the previous run with a
    value nearest to the current result so that you can compare the inputs
    used.

    Write an algorithm that will return this data as quickly as possible.


Students may assume a binary search tree, and even one that self-balances (to
minimize the amortized cost of searching an unbalanced tree)  I provide a
sketch of a BST here to allow the demo tests to run and to give you an idea of
what a BST implementation might look like in Python.

Students MAY NOT assume that a given set of inputs to the simulation will
always produce the same result, so more than one set of inputs may be
associated with a given result value.

Students should come up with some way of associating a set of inputs with the
result (my solution below creates a set of inputs carried with each tree node
where the value of the node is the result (so comparison will work)). They
should, therefore, be asked to design the "node" to be stored in their binary
search tree.

    possible design considerations for this:

        * should all input sets be stored regardless of whether they are
          unique? If yes, then a list of lists is fine, if no, then a Python
          set or dictionary is the appropriate data structure for input sets.
          If they go this route, they should be able to detect that a simple
          Python LIST will not be able to be inserted into a set or dictionary,
          and they should use a TUPLE instead (as shown in my simple example)

In case of a new value that exactly splits the difference between two previous
results, it is acceptable to return only the first one found.

Run time for the algorithm they create should be O(log n)

This problem is adapted from:

http://codercareer.blogspot.com/2013/03/no-45-closest-node-in-binary-search-tree_2.html