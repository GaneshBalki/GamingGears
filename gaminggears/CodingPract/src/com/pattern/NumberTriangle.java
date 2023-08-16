package com.pattern;

public class NumberTriangle {

	public static void main(String[] args) {
		
		int spaces = 9;
		int rowsNumber = spaces/2+1;
		for (int i = 1; i <= rowsNumber; i++) {
			int spaceBefore = rowsNumber - i;

			for (int k = 0; k < spaceBefore; k++) {
				System.out.print(" ");
			}
			for (int l = 1; l <= i; l++) {
				System.out.print(i + " ");
			}

			System.out.println();
		}
	}

}
