
public class LeftHalfPyramid {

	public static void main(String[] args) {
		
		for(int i=0;i<5;i++) {
			int temp=5-1-i;
			for(int j=temp;j>0;j--) {
				System.out.print("  ");
			}
			for(int k=0;k<5-temp;k++) {
			
				System.out.print("* ");
			}
			 System.out.println();
		}
       
	}

}
