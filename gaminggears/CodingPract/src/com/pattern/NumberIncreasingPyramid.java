package com.pattern;

public class NumberIncreasingPyramid {

	public static void main(String[] args) {
	 
		/*int holder=0;
		for(int i=1;i<=5;i++) {
			holder=i
		}*/
		
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=i;j++) {
				System.out.print(j+" ");
			}
			System.out.println();
		}

	}

}
