
public class StringPalindrome {

	public static void main(String[] args) {
		String str="aabgbaa";
		StringBuilder str2=new StringBuilder(str);
		System.out.println(str.equals(str2.reverse().toString())?"String is Palindrome":"String is not palindrome");
		
		String str3="";
		for(int i=str.length()-1;i>=0;i--) {
			str3=str3+str.charAt(i);
		}
				
		System.out.println(str.equals(str3)?"String is Palindrome ok":"String is not palindrome");
		
	}

}
