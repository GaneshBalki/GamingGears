package com.pattern;

public class HollowSquareVol2 {

	public static void main(String[] args) {
	
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=5;j++) {
				boolean isBorder= i==1 || i==5 || j==1 || j==5;
				System.out.print(isBorder ? "* ":"  ");
							}
			System.out.println();
		}

	}

}
