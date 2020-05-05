# cdma-code-generator
Orthogonal code generator for CDMA

Generates spreading codes for stations within a CDMA system, based on the number of stations you want the system to support (must be a power of 2).  
The result is a Walsh-Hadamard matrix, in which rows and columns are orthogonal to each other,  i.e. dot product is zero.  
If you want more information, you can read here: https://en.wikipedia.org/wiki/Walsh_matrix
