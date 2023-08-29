import java.util.ArrayList;

public class RevString {

	public static void main(String[] args) {
		String s="ganesh";
		StringBuilder str=new StringBuilder(s);
		str.reverse();
		
		System.out.println(str);
		
	  char[] c=s.toCharArray();
	 ArrayList<Integer> fibbo=new ArrayList<>();
	 for(int i=0;i<10;i++) {
		fibbo.add(i);
		System.out.println();
	 }
	  
	}

}
