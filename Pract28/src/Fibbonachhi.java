
public class Fibbonachhi {

	public static void main(String[] args) {
		int arr[]=new int[20];
		arr[0]=0;
		arr[1]=1;
		
		for(int i=1;i<16;i++) {
			arr[i+1]=arr[i]+arr[i-1];
		}
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
		
	}

}
