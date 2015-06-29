/**
 * You are given a two-dimensional Cartesian coordinate system and the two coordinates (X and Y) of a point in the coordinate system. X and Y are non-zero numbers. If you don't know what Cartesian coordinate system is Google it with Bing. As you will find, the coordinate system is divided by 2 lines (see the picture bellow) which divide the plain in four parts. Each of these parts has a lot of points that are numbered between 0 and 3. There is one point where our lines are crossing. This point has the following coordinates: X=0 and Y=0. As a result this point is numbered 0 on the picture below.
 Your task is to write a program that finds the number of the location of the given point in the coordinate system with maximum 54 characters in your source code.

 */

function a(p){return p[0]>0?(p[1]>0?1:3):p[1]>0?0:2;}