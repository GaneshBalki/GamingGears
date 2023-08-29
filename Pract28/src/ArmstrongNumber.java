
public class ArmstrongNumber {

	public static void main(String[] args) {
		int num=371;
		String nums=Integer.toString(num);
		int sum=0;
		for(int i =0;i<nums.length();i++) {
          sum = (int) (sum + Math.pow(Integer.parseInt(nums.charAt(i)+""),3));
		}
      System.out.println(sum==num? "Armstrong":"not Armstrong");
	}

}
