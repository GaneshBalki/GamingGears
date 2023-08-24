import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Anagram {

	static boolean isAnagram(String a, String b) {
       a=a.toLowerCase();
       b=b.toLowerCase();
       char[] arr=a.toCharArray();
       char [] brr=b.toCharArray();
       Arrays.sort(arr);
       Arrays.sort(brr);
      String  aa=new String(arr);
      String  bb=new String(brr);
       return aa.equals(bb);
        
        
    }

  public static void main(String[] args) {
    
        Scanner scan= new Scanner(System.in);
        System.out.println("Enter one String ");
        String a = scan.next();
        System.out.println("Enter one String ");
        String b = scan.next();
        scan.close();
        boolean ret = isAnagram(a, b);
        System.out.println( (ret) ? "Anagrams" : "Not Anagrams" );
    }

}
