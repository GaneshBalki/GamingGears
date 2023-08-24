import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class SpitArray {
	 public static void main(String[] args) {
	        Scanner scan = new Scanner(System.in);
	        System.out.println("Enter String");
	        String s = scan.nextLine();
	        String [] slt=s.split("[ !,?._'@ ]");
	        List<String> nonEmptyElements = new ArrayList<>();
	        for (String element : slt) {
	            if (element != null && !element.isEmpty()) {
	                nonEmptyElements.add(element);
	            }
	        }   
	        System.out.println(nonEmptyElements.size());
	        for(String str: nonEmptyElements) {
	        	System.out.println(str);
	        }
	        scan.close();
	    }
}
