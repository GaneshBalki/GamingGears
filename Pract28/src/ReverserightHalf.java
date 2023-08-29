import java.util.Scanner;

public class ReverserightHalf {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter a Number");
		int time=sc.nextInt();
		
		for(int i=0;i<time;i++) {
			for(int j=time-i;j>0;j--) {
				System.out.print("* ");
			}
			System.out.println();
		}
	}

}
